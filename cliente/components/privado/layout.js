import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <section >
        <div id='barraNavegacion' ><span id='mostrar' className='icon-menu'></span> <span id='tituloBarra'>{this.props.tituloBarra}</span> <span id='subBtn'></span></div>

        <nav id='sidePanel'>
          <div><a href='/'><span className='icon-news'></span> Blog </a></div>
          <div><Link to='/'><span className='icon-list2'></span> Litar blog</Link></div>
          <div><Link to='/portafolio-listar'><span className='icon-stack'></span> Portafolio</Link></div>
          <div><Link to='/contacto-listar'><span className='icon-stack'></span> Contactos </Link></div>
          <div><Link to='/general'><span className='icon-cog'></span></Link></div>
          <div><a href='/logout'><span className='icon-exit'></span> Salir</a></div>
        </nav>
        <section id='mainPanel'>
          <section className='contenedorPrincipal'> { this.props.children }</section>
          <footer> {this.props.componenteFooter} </footer>
        </section>
      </section>
    )
  }
}
