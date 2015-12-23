import React from 'react'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <div>
        <header>encabezado</header>
        <section> { this.props.children }</section>
        <footer>pie </footer>
      </div>
    )
  }
}
