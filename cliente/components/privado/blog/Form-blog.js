import React from 'react'
import marked from 'marked'
// import markedify from 'markedify'
import Layout from 'cliente/components/privado/Layout'

module.exports = class FormBlog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textBase: '',
      tituloBase: ''
    }
  }
  handleTextoBase (event) {
    let textoIngresado = event.target.value
    this.setState({textBase: marked(textoIngresado)})
  }
  handleTitulo (event) {
    this.setState({tituloBase: event.target.value})
  }
  //convertirHtmlPrevio () {
  //  return { __html: this.state.textBase}
  //}
  render () {
    let contenidoFooter = (
      <form method='POST' action='/api/blog' >
        <input type='hidden' name='titulo' value={this.state.tituloBase} />
        <textarea name='descripcion' className='displayHidden' value={this.state.textBase} ></textarea>
        <button > Guardar </button>
      </form>
    )

    return (
      <Layout componenteFooter={contenidoFooter}>
        <section className='panelIzq'>
          <input onChange={this.handleTitulo.bind(this)} placeholder='Titulo ' />
          <textarea onChange={this.handleTextoBase.bind(this)} placeholder='Contenido ...'></textarea>
        </section>
        <section className='panelDer'>
          <div dangerouslySetInnerHTML={{ __html: this.state.textBase}}/>
        </section>
    </Layout>
    )
  }
}
