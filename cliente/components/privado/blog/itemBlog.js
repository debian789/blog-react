import React from 'react'

module.exports = class ItemBlog extends React.Component {
  render () {
    return (
      <article className='itemList'>
        <a onClick={ this.props.eventoClick } href='' ><span className='icon-news'></span> { this.props.titulo } </a>
      </article>
    )
  }
}
