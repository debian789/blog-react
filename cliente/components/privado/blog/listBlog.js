import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import Layout from 'cliente/components/privado/layout'
import ItemBlog from 'cliente/components/privado/blog/itemBlog'

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
        if (res.body) {
          this.setState({datosBlog: res.body})
        }
      }
    })
  }

  visualizarItemBlog (datos, event) {
    event.preventDefault()
    this.setState({datos: datos})
  }

  render () {
    let detalleBlogDatos = (
      <article className='itemBlog'>
        <div className='barraAcciones'><Link className='btnEditar' to='/crear'>Crear</Link></div>
        <div className='mensajeInicial'> No se ha seleccionando ningun elemento </div>
      </article>
    )
    let figura = <div className='oculto'></div>
    if (this.state.datos.imagenPrincipal !== 'None') {
      figura = (<figure className='figuraItemBlog'>
            <img src={ this.state.datos.imagenPrincipal } />
      </figure>)
    }

    if (this.state.datos) {
      detalleBlogDatos = (
        <article className='itemBlog'>
          <div className='barraAcciones'>
            <Link className='btnEditar' to='/crear'>Crear</Link>
            <Link className='btnEditar' to={`/editar/${this.state.datos._id}`}>Editar</Link>
          </div>
          <h2 >{ this.state.datos.titulo }</h2>
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
