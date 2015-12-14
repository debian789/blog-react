import React from 'react'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <div>
        <section className='topHeader'>top</section>
        <section className='contenido'>
        contenido
          { this.props.children }
        </section>
        <section className='contenidoLateral'>lateral</section>
      </div>
    )
  }
}
