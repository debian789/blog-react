import React from 'react'
import request from 'superagent'
import Layout from 'cliente/components/privado/layout'
import marked from 'marked'

module.exports = class FormGeneral extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      imagenPerfil: '',
      descripcion: '',
      sobremi: '',
      facebook: '',
      twitter: '',
      github: '',
      mensajeContacto: ''
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
          this.setState({
            nombre: data.body.nombre,
            imagenPerfil: data.body.imagenPerfil,
            descripcion: data.body.descripcion,
            sobremi: data.body.sobremi,
            facebook: data.body.facebook,
            twitter: data.body.twitter,
            github: data.body.github,
            mensajeContacto: data.body.mensajeContacto
          })
        }
      }
    })
  }
  handleNombre (event) {
    this.setState({nombre: event.target.value})
  }
  handleImagenPerfil (event) {
    this.setState({imagenPerfil: event.target.value.trim()})
  }
  handleDescripcion (event) {
    this.setState({descripcion: event.target.value})
  }
  handleSobremi (event) {
    this.setState({sobremi: event.target.value})
  }
  handleFacebook (event) {
    this.setState({facebook: event.target.value.trim()})
  }
  handleTwitter (event) {
    this.setState({twitter: event.target.value.trim()})
  }
  handleGithub (event) {
    this.setState({github: event.target.value.trim()})
  }
  handleMensajeContacto (event) {
    this.setState({mensajeContacto: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    request
    .post('/api/general')
    .send({
      nombre: event.target.elements.nombre.value,
      imagenPerfil: event.target.elements.imagenPerfil.value.trim(),
      descripcion: event.target.elements.descripcion.value,
      sobremi: event.target.elements.sobremi.value,
      facebook: event.target.elements.facebook.value.trim(),
      twitter: event.target.elements.twitter.value.trim(),
      github: event.target.elements.github.value.trim(),
      mensajeContacto: event.target.elements.mensajeContacto.value
    //  _id: event.target.elements._id.value.trim()
    })
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        alert('Dato Modificado')
        // window.location.href = '/admin'
      }
    })
  }
  render () {
    return (
      <Layout>
        <section className='estiloForm'>
          <h1>Configuraciones Generales </h1>
          <hr/>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Nombre</label>
              <input onChange={this.handleNombre.bind(this)} type='text' name='nombre' value={this.state.nombre} required />
            </div>
            <div>
              <label>Url imagen perfil </label>
              <input onChange={this.handleImagenPerfil.bind(this)} type='text' name='imagenPerfil' value={this.state.imagenPerfil} required />
            </div>
            <div>
              <label>Url Facebook</label>
              <input onChange={this.handleFacebook.bind(this)} type='text' name='facebook' value={this.state.facebook} />
            </div>
            <div>
              <label>Url Twitter</label>
              <input onChange={this.handleTwitter.bind(this)} type='text' name='twitter' value={this.state.twitter} />
            </div>
            <div>
              <label>Url Github</label>
              <input onChange={this.handleGithub.bind(this)} type='text' name='github' value={this.state.github} />
            </div>
            <hr/>
            <div className='descripcionText'>
              <label>Descripción</label>
              <textarea onChange={this.handleDescripcion.bind(this)} name='descripcion' value={this.state.descripcion}></textarea>
            </div>
            <div className='descripcionText'>
              <label>Descripción visualización </label>
              <div  dangerouslySetInnerHTML={{__html: marked(this.state.descripcion)}} ></div>
            </div>
            <hr/>
            <div className='descripcionText'>
              <label>Sobre mi </label>
              <textarea onChange={this.handleSobremi.bind(this)} name='sobremi' value={this.state.sobremi}></textarea>
            </div>

            <div className='descripcionText'>
              <label>Sobre mi  visualización </label>
              <div dangerouslySetInnerHTML={{__html: marked(this.state.sobremi)}}></div>
            </div>
            <hr/>
            <div className='descripcionText'>
              <label>Mensaje en la vista de contacto </label>
              <textarea onChange={this.handleMensajeContacto.bind(this)} name='mensajeContacto' value={this.state.mensajeContacto}></textarea>
            </div>

            <div className='descripcionText'>
              <label>Visualización del mensaje de contacto </label>
              <div dangerouslySetInnerHTML={{__html: marked(this.state.mensajeContacto)}}></div>
            </div>
            <hr/>
            <div>
              <input type='submit' value='Actualizar' />
            </div>
          </form>
        </section>
      </Layout>
    )
  }
}
