import React from 'react'
import Layout from 'cliente/components/privado/Layout'
import request from 'superagent'

module.exports = class FormPortafoli extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      titulo: '',
      descripcion: '',
      imagenPrincipal: '',
      fechaCreacion: '',
      urlWeb: '',
      urlRepositorio: '',
      tecnologias: '',
      cliente: '',
      tipo: ''
    }
  }

  componentWillMount () {
    if ( this.props.params.id ) {
      request
      .get(`/api/portafolio/${this.props.params.id}`)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          this.setState({titulo: res.body.titulo})
          this.setState({descripcion: res.body.descripcion})
          this.setState({imagenPrincipal: res.body.imagenPrincipal})
          this.setState({fechaCreacion: res.body.fechaCreacion})
          this.setState({urlWeb: res.body.urlWeb})
          this.setState({urlRepositorio: res.body.urlRepositorio})
          this.setState({tecnologias: res.body.tecnologias})
          this.setState({cliente: res.body.cliente})
          this.setState({tipo: res.body.tipo})
        }
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    let urlSave = this.props.params.id ? `/api/portafolio/${this.props.params.id}` : '/api/portafolio'

    request
    .post(urlSave)
    .send({
      titulo: event.target.elements.titulo.value.trim(),
      descripcion: event.target.elements.descripcion.value.trim(),
      imagenPrincipal: event.target.elements.imagenPrincipal.value.trim(),
      fechaCreacion: event.target.elements.fechaCreacion.value,
      urlWeb: event.target.elements.urlWeb.value.trim(),
      urlRepositorio: event.target.elements.urlRepositorio.value.trim(),
      tecnologias: event.target.elements.tecnologias.value,
      cliente: event.target.elements.cliente.value,
      tipo: event.target.elements.tipo.value
    })
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        if (res.body.error) {

        } else {
          alert('Dato creado')
          window.location.href = '/admin#/portafolio-listar'
        }
      }
    })

  }

  handleTitulo (event) {
    this.setState({titulo: event.target.value})
  }

  handleDescripcion (event) {
    this.setState({descripcion: event.target.value})
  }

  handleImagenPrincipal (event) {
    this.setState({imagenPrincipal: event.target.value})
  }

  handleFechaCreacion (event) {
    this.setState({fechaCreacion: event.target.value})
  }

  handleUrlWeb (event) {
    this.setState({urlWeb: event.target.value})
  }

  handleUrlRepositorio (event) {
    this.setState({urlRepositorio: event.target.value.trim()})
  }

  handleTecnologias (event) {
    this.setState({tecnologias: event.target.value})
  }

  handleCliente (event) {
    this.setState({cliente: event.target.value})
  }

  handleTipo (event) {
    this.setState({tipo: event.target.value})
  }

  render () {
    return (
      <Layout>
        <section className='estiloForm'>
          <h3>Portafolio </h3>
          <hr/>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Titulo</label>
              <input onChange={this.handleTitulo.bind(this)} type='text' name='titulo' value={this.state.titulo} required />
            </div>
            <div>
              <label>Descripción</label>
              <textarea onChange={this.handleDescripcion.bind(this)} name='descripcion' value={this.state.descripcion}></textarea>
            </div>
            <div>
              <label>Imagen principal</label>
              <input onChange={this.handleImagenPrincipal.bind(this)} type='text' name='imagenPrincipal' value={this.state.imagenPrincipal} />
            </div>
            <div>
              <label>Fecha de creación</label>
              <input onChange={this.handleFechaCreacion.bind(this)} type='date' name='fechaCreacion' value={this.state.fechaCreacion} />
            </div>
            <div>
              <label>Url mostrario</label>
              <input onChange={this.handleUrlWeb.bind(this)} type='url' name='urlWeb' value={this.state.urlWeb} />
            </div>
            <div>
              <label>Url del repositorio de proyecto </label>
              <input onChange={this.handleUrlRepositorio.bind(this)} type='url' name='urlRepositorio' value={this.state.urlRepositorio} />
            </div>
            <div>
              <label>Tecnologias implementadas</label>
              <input onChange={this.handleTecnologias.bind(this)} type='text' name='tecnologias' value={this.state.tecnologias} />
            </div>
            <div>
              <label>Cliente </label>
              <input onChange={this.handleCliente.bind(this)} type='text' name='cliente' value={this.state.cliente} />
            </div>
            <div>
              <label>Tipo de desarrollo </label>
              <input onChange={this.handleTipo.bind(this)} type='text' name='tipo' value={this.state.tipo} />
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
