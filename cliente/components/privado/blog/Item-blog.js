import React from 'react'
import {Link} from 'react-router'
module.exports = class ItemBlog extends React.Component {
  saludar (event) {
    event.preventDefault()
    alert('Hola mundo !!!')
    return false
  }
  render () {
    return (
      <article>
        <a onClick={ this.props.eventoSaludar } href='' > { this.props.titulo } </a>
      </article>
    )
  }
}
