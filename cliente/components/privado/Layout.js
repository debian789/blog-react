import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <div>
        <header>
          <a href='/'><span className='icon-stack'></span> Blog </a>
          <Link to='/crear'><span className='icon-libreoffice'></span> Crear</Link>
        </header>
        <section> { this.props.children }</section>
        <footer> {this.props.componenteFooter} </footer>
      </div>
    )
  }
}
