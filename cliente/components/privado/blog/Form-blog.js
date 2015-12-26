import React from 'react'

module.exports = class FormBlog extends React.Component {
  render () {
    return (
      <form method='POST' action='/api/blog'>
        <input type='text' name='titulo'/>
        <textarea name='descripcion'></textarea>
        <input type='submit' value='Guardar'/>
      </form>
    )
  }
}
