import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
    //      <div><Link to='/portafolio'><span className='icon-libreoffice'></span> Portafolio - Crear</Link></div>
    //      <div><Link to='/crear'><span className='icon-libreoffice'></span> Crear</Link></div>
  render () {
    return (
      <section >
        <div id='barraNavegacion' ><span id='mostrar'>ver</span> <span id='tituloBarra'>{this.props.tituloBarra}</span> <span id='subBtn'></span></div>

        <nav id='sidePanel'>
          <div><a href='/'><span className='icon-news'></span> Blog </a></div>
          <div><Link to='/'><span className='icon-list2'></span> Litar blog</Link></div>
          <div><Link to='/portafolio-listar'><span className='icon-stack'></span> Portafolio</Link></div>
          <div><Link to='/general'><span className='icon-cog'></span></Link></div>
          <div><a href='/salir'><span className='icon-exit'></span> Salir</a></div>
        </nav>
        <section id='mainPanel'>
          <section className='contenedorPrincipal'> { this.props.children }</section>
          <footer> {this.props.componenteFooter} </footer>
        </section>
      </section>
    )
  }
}
