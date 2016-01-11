import React from 'react'
import request from 'superagent'
import Layout from 'cliente/components/privado/layout'

module.exports = class FormGeneral extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      imagenPerfil: '',
      descripcion: '',
      facebook: '',
      twitter: '',
      github: ''
    }
  }
  componentWillMount () {
    request
    .get('/api/general')
    .end((err, data) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          nombre: data.body.nombre,
          imagenPerfil: data.body.imagenPerfil,
          descripcion: data.body.descripcion,
          facebook: data.body.facebook,
          twitter: data.body.twitter,
          github: data.body.github
        })
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
  handleFacebook (event) {
    this.setState({facebook: event.target.value.trim()})
  }
  handleTwitter (event) {
    this.setState({twitter: event.target.value.trim()})
  }
  handleGithub (event) {
    this.setState({github: event.target.value.trim()})
  }

  handleSubmit (event) {
    event.preventDefault()
    request
    .post('/api/general')
    .send({
      nombre: event.target.elements.nombre.value,
      imagenPerfil: event.target.elements.imagenPerfil.value.trim(),
      descripcion: event.target.elements.descripcion.value,
      facebook: event.target.elements.facebook.value.trim(),
      twitter: event.target.elements.twitter.value.trim(),
      github: event.target.elements.github.value.trim()
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
            <div className='descripcionText'>
              <label>Descripción</label>
              <textarea onChange={this.handleDescripcion.bind(this)} name='descripcion' value={this.state.descripcion}></textarea>
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
