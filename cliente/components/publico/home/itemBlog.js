import React from 'react'
import { Link } from 'react-router'
import marked from 'marked'
module.exports = class ItemBlog extends React.Component {
  render () {
    let figura = this.props.imagenPrincipal ? <figure className='figuraItemBlogReducida '><img src={ this.props.imagenPrincipal } /></figure> : ''
    // let figura = <div className='oculto'></div>
    // if (this.props.imagenPrincipal !== 'None') {
    //  figura = (<figure className='figuraItemBlogReducida '>
    //        <img src={ this.props.imagenPrincipal } />
    //  </figure>)
    // }
    return (
        // <span>{ this.props.fechaCreacion }</span>
        // <span> by { this.props.creador }</span>
      <article className='itemBlog'>
        <h2 ><Link to={`/blog/${this.props.id}`}>{ this.props.titulo }</Link></h2>
        {figura}
        <p dangerouslySetInnerHTML={{ __html: marked(this.props.descripcion)} }></p>
      </article>

    )
  }
}
