import React from 'react'
import request from 'superagent'
import Layout from 'cliente/components/privado/Layout'
import ItemBlog from 'cliente/components/privado/blog/Item-blog'
import {Link} from 'react-router'

class DescripcionBlog extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (<div dangerouslySetInnerHTML={{__html: this.props.descripcion}}></div>)
  }
}

module.exports = class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datosBlog: [],
      datos: false
    }
  }

  componentWillMount () {
    request
    .get('/api/blog')
    .end((err, res) => {
      if (err) {
        console.log(err)
      }else {
        this.setState({datosBlog: res.body})
      }
    })
  }

  visualizarItemBlog (datos, event) {
    event.preventDefault()
    this.setState({datos: datos})
  }

  render () {
    let detalleBlogDatos = (<article className='mensajeInicial'> No se ha seleccionando ningun elemento </article>)
    let figura = <div className='oculto'></div>
    if (this.state.datos.imagenPrincipal !== 'None') {
      figura = (<figure className='figuraItemBlog'>
            <img src={ this.state.datos.imagenPrincipal } />
      </figure>)
    }
    if (this.state.datos) {
      detalleBlogDatos = (
        <article className='itemBlog'>
          <div className='barraAcciones'><Link className='btnEditar' to={`/editar/${this.state.datos._id}`}>Editar</Link></div>
          <h2 >{ this.state.datos.titulo }</h2>
          <span>{ this.state.datos.fechaCreacion }</span>
          <span> by { this.state.datos.creador }</span>
          {figura}
          <DescripcionBlog descripcion= { this.state.datos.descripcion }/>
          <div></div>
        </article>
        )
    }
    return (
      <Layout>
        <section className='itemListIzq'>
          {
            this.state.datosBlog.map((dato) => {
              return (<ItemBlog key={dato._id} titulo= {dato.titulo} eventoClick= {this.visualizarItemBlog.bind(this, dato) }/>)
            })
          }
        </section>
        <section className='itemListDer'>
          {
            detalleBlogDatos
          }
        </section>
      </Layout>
    )
  }
}
