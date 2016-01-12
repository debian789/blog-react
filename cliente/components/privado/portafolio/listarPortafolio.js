import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import Layout from 'cliente/components/privado/layout'

module.exports = class ListarPortafolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listaPortafolio: []
    }
  }
  handleEliminar (event) {
    event.preventDefault()
    let this2 = this
    let id = event.target.id

    var r = confirm('Realmente desea eliminarlo? ')
    if (r === true) {
      request
      .post(event.target.href)
      .end((err, data) => {
        if (err) {
          console.log(err)
        } else {
          this2.refs[id].remove()
        }
      })
    } else {

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
  render () {
    return (
      <Layout>
        <section className='listaPortafolio'>
        <div className='barraAcciones'><h1>Portafolio</h1><Link className='btnEditar' to='/portafolio'>Crear portafolio</Link></div>
        <hr/>
          {
            this.state.listaPortafolio.map((data) => {
              return (
                <div key={data._id} ref={data._id}  className='itemPortafolio'>
                  <figure>
                    <img src={data.imagenPrincipal} />
                  </figure>
                  <div><Link to={`/portafolio/${data._id}`}>Modificar</Link> <a id={data._id} onClick={this.handleEliminar.bind(this)} href={`/api/portafolio/eliminar/${data._id}`}>Eliminar</a></div>
                </div>
              )
            })
          }
        </section>
      </Layout>
    )
  }
}
