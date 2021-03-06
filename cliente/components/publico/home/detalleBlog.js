import React from 'react'
import request from 'superagent'
import marked from 'marked'
import Layout from 'cliente/components/publico/layout'

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
        if (res.body) {
          this.setState({datos: res.body})
          this.setState({estado: true})
        }
      }
    })
  }
  render () {
    let componente = (<div className='mensajeInicial'><img src='static/img/load.gif' /></div>)
    let figura = this.state.datos.imagenPrincipal ? <figure className='figuraItemBlog'><img src={ this.state.datos.imagenPrincipal } /></figure> : ''
    // let figura = <div className='oculto'></div>
    // if (this.state.datos.imagenPrincipal !== 'None') {
    //  figura = (<figure className='figuraItemBlog'>
    //    <img src={ this.state.datos.imagenPrincipal } />
    //  </figure>)
    // }

    if (this.state.estado) {
        //  <span>{ this.state.datos.fechaCreacion }</span>
        //  <span> by { this.state.datos.creador }</span>
      componente = (
        <article className='itemBlog'>
          <h1 >{ this.state.datos.titulo }</h1>
          <hr/>
          { figura }
          <p dangerouslySetInnerHTML={ {__html: marked(this.state.datos.descripcion)} }></p>
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
