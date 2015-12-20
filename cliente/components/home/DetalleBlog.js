import React from 'react'
import Layout from 'cliente/components/layout'

module.exports = class DetalleBlog extends React.Component {
  render () {
    return (
      <Layout>

      <article className='itemBlog'>
        <h2 >{ this.props.titulo }</h2>
        <span>{ this.props.fechaCreacion }</span>
        <span> by { this.props.creador }</span>
        <hr/>
        <figure>
          <img src={ this.props.itemBlogImagen } />
        </figure>
        <hr/>
        <p>{ this.props.descripcion }</p>
        <div></div>
      </article>
      </Layout>
    )
  }
}
