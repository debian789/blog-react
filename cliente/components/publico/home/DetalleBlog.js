import React from 'react'
import Layout from 'cliente/components/publico/layout'
import request from 'superagent'

module.exports = class DetalleBlog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datos: [],
      estado: false
    }
  }

  componentWillMount () {
    request
    .get(`/api/blog/${this.props.params.id}`)
    .end((err, res) => {
      if (err) {
        console.log(err)
      }else {
        this.setState({datos: res.body})
        this.setState({estado: true})
      }
    })
  }
  render () {
    let componente = (<div className='mensajeInicial'> No se pudo cargar los datos </div>)
    let figura = <div className='oculto'></div>
    if (this.state.datos.imagenPrincipal !== 'None') {
      figura = (<figure className='figuraItemBlog'>
        <img src={ this.state.datos.imagenPrincipal } />
      </figure>)
    }

    if (this.state.estado) {
      componente = (
        <article className='itemBlog'>
          <h2 >{ this.state.datos.titulo }</h2>
          <span>{ this.state.datos.fechaCreacion }</span>
          <span> by { this.state.datos.creador }</span>
          { figura }
          <p dangerouslySetInnerHTML={ {__html: this.state.datos.descripcion} }></p>
          <div></div>
        </article>
      )
    }

    return (
      <Layout>
        {componente}
      </Layout>
    )
  }
}
