import React from 'react'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <div>

        <section className = 'contenido'>
          { this.props.children }
        </section>
        <section className='contenidoLateral'>
          <article>
            <div className="cuadroImagen">
              <figure>
                <img src='http://placehold.it/300x300'/>
              </figure>
              <div className="nombreProfesion"><span>Miguel Suescun </span><span className='profecionClass'> Developer</span> </div>

            </div>



            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr className="lineaAutor"/>
            <a href="" className='iconSocial icon-facebook2'></a>
            <a href="" className='iconSocial icon-twitter'></a>
            <a href="" className='iconSocial icon-github'></a>
          </article>
        </section>
      </div>
    )
  }
}
