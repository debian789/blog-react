import React from 'react'
import {Link} from 'react-router'
import request from 'superagent'
import marked from 'marked'

module.exports = class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datosGeneral: {
        nombre: '',
        imagenPerfil: false,
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
        if (data.body) {
          if (data.body) {
            this.setState({datosGeneral: data.body})
          }
        }
      }
    })
  }
  render () {
    let urlImagen = this.state.datosGeneral.imagenPerfil ? this.state.datosGeneral.imagenPerfil : '/static/img/default_perfil.jpg'
    let iconFacebook = this.state.datosGeneral.facebook ? <a href={this.state.datosGeneral.facebook} className='iconSocial icon-facebook2' target='_black'></a> : ''
    let iconTwitter = this.state.datosGeneral.twitter ? <a href={this.state.datosGeneral.twitter} className='iconSocial icon-twitter' target='_black'></a> : ''
    let iconGithub = this.state.datosGeneral.github ? <a href={this.state.datosGeneral.github} className='iconSocial icon-github' target='_black'></a> : ''
    return (
      <section>
        <div id='barraNavegacion' >
          <span id='mostrar' className='icon-menu'></span>
          <span id='tituloBarra'>{this.props.tituloBarra}</span> <span id='subBtn'></span>
        </div>
        <nav id='sidePanel'>
          <div><Link to='/' className='icon-news'> Blog</Link></div>
          <div><Link to='/portafolio' className='icon-stack'> Portafolio</Link></div>
          <div><Link to='/sobre-mi' className='icon-stack'> Sobre mi</Link></div>
          <div><Link to='/contacto' className='icon-stack'> Contacto</Link></div>
        </nav>
        <section id='mainPanel'>
          <section className='contenidoLateral'>
            <article>
              <div className='cuadroImagen'>

                <figure>
                  <img src={urlImagen}/>
                </figure>
                <div className='nombreProfesion'><span>{this.state.datosGeneral.nombre} </span></div>
              </div>
              <div dangerouslySetInnerHTML={{__html: marked(this.state.datosGeneral.descripcion)}}></div>
              <hr className='lineaAutor'/>
              {iconFacebook}
              {iconTwitter}
              {iconGithub}

            </article>
          </section>
          <section className = 'contenido'>
            { this.props.children }
          </section>
        </section>
      </section>
    )
  }
}
