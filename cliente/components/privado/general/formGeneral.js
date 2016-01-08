import React from 'react'
import Layout from 'cliente/components/privado/Layout'
import request from 'superagent'

module.exports = class FormGeneral extends React.Component {
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
        this.setState({datosGeneral: data})
      }
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    request
    .post('/api/general')
    .send({
      nombre: event.target.elements.nombre.value.trim(),
      imagenPerfil: event.target.elements.imagenPerfil.value.trim(),
      descripcion: event.target.elements.descripcion.value.trim(),
      facebook: event.target.elements.facebook.value.trim(),
      twitter: event.target.elements.twitter.value.trim(),
      github: event.target.elements.github.value.trim()
    })
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        alert('Dato Modificado')
        window.location.href = '/admin'
      }
    })


  }
  render () {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='nombre' value={this.state.datosGeneral.nombre}required />
          <input type='text' name='imagenPerfil' value={this.state.datosGeneral.imagenPerfil} required />
          <textarea name='descripcion' value={this.state.datosGeneral.descripcion}></textarea>
          <input type='text' name='facebook' value={this.state.datosGeneral.facebook} />
          <input type='text' name='twitter' value={this.state.datosGeneral.twitter} />
          <input type='text' name='github' value={this.state.datosGeneral.github} />
        </form>
      </Layout>
    )
  }
}
