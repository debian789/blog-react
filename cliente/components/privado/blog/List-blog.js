import React from 'react'
import request from 'client-request'
import Layout from 'cliente/components/privado/Layout'
import ItemBlog from 'cliente/components/privado/blog/Item-blog'

module.exports = class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      datosBlog: [],
      datos: []
    }
  }

  componentWillMount () {
    request({
      uri: 'http://localhost:3000/api/blog',
      method: 'GET',
      json: true
    }, (err, response, body) => {
      if (err) { console.log(err) }
      this.setState({datosBlog: body})
    })
  }

  visualizarItemBlog (datos, event) {
    event.preventDefault()
    this.setState({datos: datos})
  }

  render () {
    let detalleBlogDatos = (<article>No se an cargado datos </article>)
      if (this.state.datos) {
         detalleBlogDatos = (
        <article className='itemBlog'>
          <h2 >{ this.state.datos.titulo }</h2>
          <span>{ this.state.datos.fechaCreacion }</span>
          <span> by { this.state.datos.creador }</span>
          <hr/>
          <figure>
            <img src={ this.state.datos.itemBlogImagen } />
          </figure>
          <hr/>
          <p>{ this.state.datos.descripcion }</p>
          <div></div>
        </article>
        )
      }
    return (
      <Layout>
        <section>
          {
            this.state.datosBlog.map((dato) => {
              return (<ItemBlog titulo= {dato.titulo} eventoSaludar= {this.visualizarItemBlog.bind(this, dato) }/>)
            })
          }
        </section>
        <section>
          {
            detalleBlogDatos
          }
        </section>
      </Layout>
    )
  }
}
