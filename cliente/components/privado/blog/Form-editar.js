import React from 'react'
import request from 'superagent'
import marked from 'marked'
import Layout from 'cliente/components/privado/Layout'
import toMarkdown from 'to-markdown'

module.exports = class FormEditar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tituloBase: '',
      imagenPrincipal: '',
      textoMarkdown: '',
      textoHtml: '',
      datosBlog: {
        descripcion: ''
      }
    }
  }
  handleTextoBase (event) {
    let textoIngresado = event.target.value
    this.setState({textoMarkdown: textoIngresado})
    this.setState({textoHtml: marked(textoIngresado)})
  }
  handleTitulo (event) {
    this.setState({tituloBase: event.target.value})
  }
  handleImagenPrincipal (event) {
    this.setState({imagenPrincipal: event.target.value})
  }
  handleEliminar (event) {
    event.preventDefault()
    let url = event.target.href
    request
    .post(url)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        alert('Dato eliminado')
        window.location.href = '/admin'
      }
    })
    //debugger
  }
  componentWillMount () {
    request
    .get(`/api/blog/${this.props.params.id}`)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({textoMarkdown: this.converHtmlToMarkdown(res.body.descripcion)})
        this.setState({textoHtml: res.body.descripcion})
        this.setState({tituloBase: res.body.titulo})
        this.setState({imagenPrincipal: res.body.imagenPrincipal})
        this.setState({datosBlog: res.body})
      }
    })
  }
  converHtmlToMarkdown (data) {
    return toMarkdown(data)
  }
  render () {
    let urlGuardar = `/api/blog/${this.props.params.id}`
    let urlEliminar = `/api/blog/eliminar/${this.props.params.id}`
    let contenidoFooter = (
      <form method='POST' action={urlGuardar} >
        <input type='hidden' name='titulo' value={this.state.tituloBase} />
        <input type='hidden' name='imagenPrincipal' value={this.state.imagenPrincipal} />
        <textarea name='descripcion' className='displayHidden' value={this.state.textoHtml} ></textarea>
        <button > Guardar </button>
      </form>
    )

    let figura = <div className='oculto'></div>
    if (this.state.imagenPrincipal !== 'None') {
      figura = (<figure className='figuraItemBlog'>
            <img src={ this.state.imagenPrincipal } />
      </figure>)
    }

    return (
      <Layout componenteFooter={contenidoFooter}>
        <section className='panelIzq'>
          <input onChange={this.handleTitulo.bind(this)} placeholder='Titulo ' value={this.state.tituloBase} />
          <input onChange={this.handleImagenPrincipal.bind(this)} placeholder='URL Imagen principal ' value={this.state.imagenPrincipal} />
          <textarea onChange={this.handleTextoBase.bind(this)} placeholder='Contenido ...' value={ this.state.textoMarkdown }></textarea>
        </section>
        <section className='panelDer'>
          <div className='barraAcciones'><a className='btnEditar' href={urlEliminar} onClick={this.handleEliminar.bind(this)}>Eliminar</a></div>
          <h1>{this.state.tituloBase}</h1>
          {figura}
          <div dangerouslySetInnerHTML={{ __html: this.state.textoHtml}}/>
        </section>
    </Layout>
  )
  }
}
