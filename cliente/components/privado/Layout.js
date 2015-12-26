import React from 'react'
import {Link} from 'react-router'

module.exports = class Layout extends React.Component {
  render () {
    return (
      <div>
        <header><Link to='/crear'>Crear</Link></header>
        <section> { this.props.children }</section>
        <footer>pie </footer>
      </div>
    )
  }
}
