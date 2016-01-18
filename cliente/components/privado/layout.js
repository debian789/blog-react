import React from 'react'
import {Link} from 'react-router'
import Hammer from 'hammerjs'

module.exports = class Layout extends React.Component {
  handleMostrar (event) {
    let sidePanel = this.refs.sidePanel
    sidePanel.classList.toggle('open')
  }
  componentDidMount () {
    //debugger
    let mainPanel = this.refs.mainPanel
    let sidePanel = this.refs.sidePanel
    let hammerPanel = new Hammer(mainPanel)
    hammerPanel
    .on('swiperight', function (e) {
      sidePanel.classList.toggle('open')
    })
    .on('swipeleft', function (e) {
      sidePanel.classList.toggle('open')
    })
  }
  render () {

    return (
      <section >
        <div id='barraNavegacion' ><span id='mostrar' className='icon-menu' onClick={this.handleMostrar.bind(this)}></span> <span id='tituloBarra'>{this.props.tituloBarra}</span> <span id='subBtn'></span></div>

        <nav id='sidePanel' ref='sidePanel'>
          <div><a href='/'><span className='icon-news'></span> Blog </a></div>
          <div><Link to='/'><span className='icon-list2'></span> Litar blog</Link></div>
          <div><Link to='/portafolio-listar'><span className='icon-stack'></span> Portafolio</Link></div>
          <div><Link to='/contacto-listar'><span className='icon-stack'></span> Contactos </Link></div>
          <div><Link to='/general'><span className='icon-cog'></span></Link></div>
          <div><a href='/logout'><span className='icon-exit'></span> Salir</a></div>
        </nav>
        <section id='mainPanel' ref='mainPanel'>
          <section className='contenedorPrincipal'> { this.props.children }</section>
          <footer> {this.props.componenteFooter} </footer>
        </section>
      </section>
    )
  }
}
