import React from 'react'
module.exports = class ItemBlog extends React.Component {
  render () {
    return (
      <article className='itemList'>
        <a onClick={ this.props.eventoClick } href='' > { this.props.titulo } </a>
      </article>
    )
  }
}
