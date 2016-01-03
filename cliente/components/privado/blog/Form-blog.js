import React from 'react'
import marked from 'marked'
import Layout from 'cliente/components/privado/Layout'

module.exports = class FormBlog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textBase: '',
      tituloBase: '',
      imagenPrincipal: ''
    }
  }
  handleTextoBase (event) {
    let textoIngresado = event.target.value
    this.setState({textBase: marked(textoIngresado)})
  }
  handleTitulo (event) {
    this.setState({tituloBase: event.target.value})
  }
  handleImagenPrincipal (event) {
    this.setState({imagenPrincipal: event.target.value})
  }
  render () {
    let contenidoFooter = (
      <form method='POST' action='/api/blog' >
        <input type='hidden' name='titulo' value={this.state.tituloBase} />
        <input type='hidden' name='imagenPrincipal' value={this.state.imagenPrincipal} />
        <textarea name='descripcion' className='displayHidden' value={this.state.textBase} ></textarea>
        <button > Guardar </button>
      </form>
    )

    return (
      <Layout componenteFooter={contenidoFooter}>
        <section className='panelIzq'>
          <input onChange={this.handleTitulo.bind(this)} placeholder='Titulo ' />
          <input onChange={this.handleImagenPrincipal.bind(this)} placeholder='URL Imagen principal ' />
          <textarea onChange={this.handleTextoBase.bind(this)} placeholder='Contenido ...'></textarea>
        </section>
        <section className='panelDer'>
          <h1>{this.state.tituloBase}</h1>
          <figure>
            <img src={this.state.imagenPrincipal} />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: this.state.textBase }}/>
        </section>
    </Layout>
    )
  }
}
