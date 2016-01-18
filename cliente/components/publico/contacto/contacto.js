import React from 'react'
import Layout from 'cliente/components/publico/layout'
import request from 'superagent'

module.exports = class Contacto extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      email: '',
      asunto: '',
      consulta: ''
    }
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
      return (
        <Layout>
          <h2>Contacto</h2>
          <p></p>
          <section>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label>Tu Nombre (Requerido)</label>
                <input onChange={this.handleNombre.bind(this)} type='text' name='nombre' value={this.state.nombre} required />
              </div>
              <div>
                <label>Tu Email (Requerido)</label>
                <input onChange={this.handleEmail.bind(this)} type='text' name='email' value={this.state.email} required />
              </div>
              <hr/>
                <div>
                  <label>Asunto:</label>
                  <input onChange={this.handleAsunto.bind(this)} type='text' name='asunto' value={this.state.asunto}  />
                </div>
                <div>
                  <label>Tu consulta: (Requerido)</label>
                  <input onChange={this.handleConsulta.bind(this)} type='text' name='consulta' value={this.state.consulta}  />
                </div>
              <div>
                <input type='submit' value='Enviar' />
              </div>
            </form>
          </section>
        </Layout>
      )
  }
}