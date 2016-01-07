import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
  handleCerrar () {

  }
  render () {
    return (
      <div>
        <section className='contenidoLateral'>
          <article>
            <div className='cuadroImagen'>
              <figure>
                <img src='http://placehold.it/300x300'/>
              </figure>
              <div className='nombreProfesion'><span>Miguel Suescun </span></div>

            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr className='lineaAutor'/>
            <a href='' className='iconSocial icon-facebook2'></a>
            <a href='' className='iconSocial icon-twitter'></a>
            <a href='' className='iconSocial icon-github'></a>
          </article>
        </section>
        <section className = 'contenido'>
          <nav>
            <div id='cerrarMenu' onClick={this.handleCerrar}><span>X</span></div>
            <div><Link to='/'>Blog</Link></div>
          </nav>
          { this.props.children }
        </section>
      </div>
    )
            // <div><Link>Portafolio</Link></div>
            // <div><Link>Contactame</Link></div>
  }
}
