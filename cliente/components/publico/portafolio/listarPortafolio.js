import React from 'react'
import Layout from 'cliente/components/publico/Layout'
import request from 'superagent'
import {Link} from 'react-router'
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
        this.setState({listaPortafolio: data.body})
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
          {
            this.state.listaPortafolio.map((data) => {
              return (
                <div key={data._id} ref={data._id} onClick={this.handleVisualizarPortafolio.bind(this,data)}>
                  <figure >
                    <img src={data.imagenPrincipal} />
                  </figure>
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