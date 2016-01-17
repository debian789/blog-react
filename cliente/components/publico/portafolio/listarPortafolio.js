import React from 'react'
import request from 'superagent'
import Layout from 'cliente/components/publico/layout'
import DetallePortafolio from 'cliente/components/publico/portafolio/detallePortafolio'

module.exports = class ListarPortafolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listaPortafolio: [],
      visualizarDetalle: false,
      datosDetalle: []
    }
  }

  componentWillMount () {
    request
    .get('/api/portafolio')
    .end((err, data) => {
      if (err) {
        console.log(err)
      } else {
        if (data.body) {
          this.setState({listaPortafolio: data.body})
        }
      }
    })
  }
  handleVisualizarPortafolio (data, event) {
    this.setState({visualizarDetalle: true})
    this.setState({datosDetalle: data})
  }
  handleOcultarVisualizacionPortafolio (event) {
    this.setState({visualizarDetalle: false})
  }
  render () {
    let visualizarDetalle = this.state.visualizarDetalle ? <DetallePortafolio datosDetalle={this.state.datosDetalle} eventoCerrar={this.handleOcultarVisualizacionPortafolio.bind(this)}/> : ''
    return (
      <Layout>
        <section className='listaPortafolio'>
          <h1>Portafolio</h1>
          <p>Selección de mis últimos trabajos realizados </p>
          {
            this.state.listaPortafolio.map((data) => {
              return (
                <div key={data._id} ref={data._id} onClick={this.handleVisualizarPortafolio.bind(this, data)}>
                  <figure >
                    <img src={data.imagenPrincipal} />
                  </figure>
                  <p>{data.titulo}</p>
                </div>
              )
            })
          }
        </section>
        {visualizarDetalle}
      </Layout>
    )
  }
}
