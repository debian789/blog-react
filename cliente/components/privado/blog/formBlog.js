import React from 'react'
import marked from 'marked'
import request from 'superagent'
import Layout from 'cliente/components/privado/layout'

module.exports = class FormBlog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textoEnHTML: '',
      textoEnMd: '',
      tituloBase: '',
      imagenPrincipal: ''
    }
  }
  handleTextoMd (event) {
    let textoIngresado = event.target.value
    this.setState({textoEnHTML: marked(textoIngresado)})
    this.setState({textoEnMd: textoIngresado})
  }
  handleTitulo (event) {
    this.setState({tituloBase: event.target.value})
  }
  handleImagenPrincipal (event) {
    this.setState({imagenPrincipal: event.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()

    request
    .post('/api/blog')
    .send({
      titulo: e.target.elements.titulo.value.trim(),
      imagenPrincipal: e.target.elements.imagenPrincipal.value.trim(),
      descripcion: e.target.elements.descripcion.value.trim()
    })
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        if (res.body.error) {

        } else {
          alert('Dato creado')
          window.location.href = '/admin'
        }
      }
    })
  }
  render () {
    let contenidoFooter = (
      <form method='POST' onSubmit={this.handleSubmit} >
        <input type='hidden' name='titulo' value={this.state.tituloBase} />
        <input type='hidden' name='imagenPrincipal' value={this.state.imagenPrincipal}  />
        <textarea name='descripcion' className='displayHidden' value={this.state.textoEnMd} ></textarea>
        <button > Guardar </button>
      </form>
    )

    return (
      <Layout componenteFooter={contenidoFooter}>
        <section className='panelIzq'>
          <input onChange={this.handleTitulo.bind(this)} placeholder='Titulo ' />
          <span className=''></span>
          <input onChange={this.handleImagenPrincipal.bind(this)} placeholder='URL Imagen principal' />
          <span className=''></span>
          <span className=''></span>
          <textarea onChange={this.handleTextoMd.bind(this)} placeholder='Contenido ...' ></textarea>
        </section>
        <section className='panelDer'>
          <h1>{this.state.tituloBase}</h1>
          <figure>
            <img src={this.state.imagenPrincipal} />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: this.state.textoEnHTML }}/>
        </section>
    </Layout>
    )
  }
}
