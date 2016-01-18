import React from 'react'
import Layout from 'cliente/components/publico/layout'
import request from 'superagent'
import marked from 'marked'

module.exports = class Contacto extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      email: '',
      asunto: '',
      consulta: '',
      datosGeneral: {
        github: '',
        facebook: '',
        twitter: '',
        mensajeContacto: ''
      }
    }
  }

  componentWillMount () {
    request
    .get('/api/general')
    .end((err, datos) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({datosGeneral: datos.body})
      }
    })
  }
  handleNombre (event) {
    this.setState({nombre: event.target.value})
  }
  handleEmail (event) {
    this.setState({email: event.target.value})
  }
  handleAsunto (event) {
    this.setState({asunto: event.target.value})
  }
  handleConsulta (event) {
    this.setState({consulta: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    request
    .post('/api/contacto')
    .send({
      nombre: event.target.elements.nombre.value.trim(),
      email: event.target.elements.email.value.trim(),
      asunto: event.target.elements.asunto.value.trim(),
      consulta: event.target.elements.consulta.value.trim()
    })
    .end((err, data) => {
      if (err) {
        console.log(err)
        alert('Error al enviar los datos')
      } else {
        alert('Datos enviados')
        window.location.href = '/#/'
      }
    })
  }
  render () {
    let iconFacebook = this.state.datosGeneral.facebook ? <a href={this.state.datosGeneral.facebook} className='iconSocial icon-facebook2' target='_black'></a> : ''
    let iconTwitter = this.state.datosGeneral.twitter ? <a href={this.state.datosGeneral.twitter} className='iconSocial icon-twitter' target='_black'></a> : ''
    let iconGithub = this.state.datosGeneral.github ? <a href={this.state.datosGeneral.github} className='iconSocial icon-github' target='_black'></a> : ''
    let contactoMensaje = this.state.datosGeneral.mensajeContacto ? <div className='contactoMensaje' dangerouslySetInnerHTML={{__html: marked(this.state.datosGeneral.mensajeContacto)}}/> : ''
    return (
        <Layout>
          <section className='seccionContacto'>

          <h1>Contacto</h1>

          {contactoMensaje}
          <section className='estiloFormContacto'>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label>Tu Nombre (Requerido)</label>
                <input onChange={this.handleNombre.bind(this)} type='text' name='nombre' value={this.state.nombre} required />
              </div>
              <div>
                <label>Tu Email (Requerido)</label>
                <input onChange={this.handleEmail.bind(this)} type='text' name='email' value={this.state.email} required />
              </div>
                <div>
                  <label>Asunto:</label>
                  <input onChange={this.handleAsunto.bind(this)} type='text' name='asunto' value={this.state.asunto} />
                </div>
                <div>
                  <label>Tu consulta: (Requerido)</label>
                  <textarea onChange={this.handleConsulta.bind(this)} type='text' name='consulta' value={this.state.consulta} />
                </div>
              <div>
                <input type='submit' value='Enviar' className='btnAccion'/>
              </div>
            </form>

          </section>
          <section className='cuadroSeguir'>
            <p>También pudes seguirme en </p>
            <div>
              {iconFacebook}
              {iconTwitter}
              {iconGithub}
            </div>
          </section>
          </section>
        </Layout>
      )
  }
}
