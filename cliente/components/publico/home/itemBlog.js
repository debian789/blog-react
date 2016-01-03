import React from 'react'
import { Link } from 'react-router'

module.exports = class ItemBlog extends React.Component {
  //convertirHtmlPrevio (dato) {
  //  return{ __html: dato}
  // }
  render () {
    let figura = <div className='oculto'></div>
    if (this.props.itemBlogImagen) {
      figura = (<figure className='figuraItemBlog'>
        <img src={ this.props.itemBlogImagen } />
      </figure>)
    }
    return (
      <article className='itemBlog'>
        <h2 ><Link to={`/blog/${this.props.id}`}>{ this.props.titulo }</Link></h2>
        <span>{ this.props.fechaCreacion }</span>
        <span> by { this.props.creador }</span>
        {figura}
        <p dangerouslySetInnerHTML={ { __html: this.props.descripcion} }></p>
      </article>

    )
  }
}
