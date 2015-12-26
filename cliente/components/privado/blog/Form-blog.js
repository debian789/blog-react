import React from 'react'
import marked from 'marked'
import markedify from 'markedify'

module.exports = class FormBlog extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      textBase:''
    }
  }
  handleTextoBase (event) {
    let textoIngresado = event.target.value
    this.setState({textBase:marked(textoIngresado)})
  }

  convertirHtmlPrevio() {
    return {__html:this.state.textBase}
  }
  render () {
    return (
      <div>
        <textarea onChange={this.handleTextoBase.bind(this)}></textarea>
        <div dangerouslySetInnerHTML={this.convertirHtmlPrevio()}/>
        <form method='POST' action='/api/blog' >
        <input type='text' name='titulo'/>
        <textarea name='descripcion' value={this.state.textBase}></textarea>
        <input type='submit' value='Guardar'/>
      </form>

      </div>
    )
  }
}
