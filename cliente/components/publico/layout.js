import React from 'react'
import {Link} from 'react-router'
import request from 'superagent'

module.exports = class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datosGeneral: {
        nombre: '',
        imagenPerfil: '',
        descripcion: '',
        facebook: '',
        twitter: '',
        github: ''
      }
    }
  }
  componentWillMount () {
    request
    .get('/api/general')
    .end((err, data) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({datosGeneral: data.body})
      }
    })
  }
  render () {
    return (
      <section>
        <div id='barraNavegacion' ><span id='mostrar'>ver</span> <span id="tituloBarra">{this.props.tituloBarra}</span> <span id="subBtn"></span></div>
        <nav id='sidePanel'>
          <div><Link to='/'>Blog</Link></div>
        </nav>
        <section id='mainPanel'>
          <section className='contenidoLateral'>
            <article>
              <div className='cuadroImagen'>

                <figure>
                  <img src='http://placehold.it/300x300'/>
                </figure>
                <div className='nombreProfesion'><span>{this.state.datosGeneral.nombre} </span></div>
              </div>
              <p>{this.state.datosGeneral.descripcion}</p>
              <hr className='lineaAutor'/>
              <a href={this.state.datosGeneral.facebook} className='iconSocial icon-facebook2'></a>
              <a href={this.state.datosGeneral.twitter} className='iconSocial icon-twitter'></a>
              <a href={this.state.datosGeneral.github} className='iconSocial icon-github'></a>
            </article>
          </section>
          <section className = 'contenido'>
            { this.props.children }
          </section>
        </section>
      </section>
    )
            // <div><Link>Portafolio</Link></div>
            // <div><Link>Contactame</Link></div>
  }
}
