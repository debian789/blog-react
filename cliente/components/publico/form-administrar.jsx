import React from 'react'

class FormAdministrar extends React.Component {
  render () {
    return (

      <form action='/api/blog' method='post'>
        <input type='text' placeholder='Titulo' />
        <input type='submit' />
      </form>

    )
  }
}

module.exports = FormAdministrar
