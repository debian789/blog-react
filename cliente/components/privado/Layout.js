import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <section >
        <div id='barraNavegacion' ><span id='mostrar'>ver</span> <span id="tituloBarra">{this.props.tituloBarra}</span> <span id="subBtn"></span></div>

        <nav id='sidePanel'>
          <div><a href='/'><span className='icon-stack'></span> Blog </a></div>
          <div><Link to='/crear'><span className='icon-libreoffice'></span> Crear</Link></div>
          <div><Link to='/general'><span className='icon-libreoffice'></span> General</Link></div>
        </nav>
        <section id='mainPanel'>
          <section className='contenedorPrincipal'> { this.props.children }</section>
          <footer> {this.props.componenteFooter} </footer>
        </section>
      </section>
    )
  }
}
