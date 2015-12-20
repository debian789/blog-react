import React from 'react'
import { Link } from 'react-router'

module.exports = class ItemBlog extends React.Component {

  render () {
    return (
      <article className='itemBlog'>
        <h2 ><Link to={`/blog/${this.props.id}`}>{ this.props.titulo }</Link></h2>
        <span>{ this.props.fechaCreacion }</span>
        <span> by { this.props.creador }</span>
        <hr/>
        <figure>
          <img src={ this.props.itemBlogImagen } />
        </figure>
        <hr/>
        <p>{ this.props.descripcion }</p>
      </article>

    )
  }
}
