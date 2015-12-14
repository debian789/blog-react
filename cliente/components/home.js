import React from 'react'
import request from 'client-request'
import { Link } from 'react-router'
import Layout from 'cliente/components/layout'
// import { Link } from 'react-router'

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      autoPlay: false,
      maxLoops: 10
    }
  },
  getInitialState: function () {
    return {
      datos: []
    }
  },

  componentWillMount: function () {
    console.log('ejecuto esto antes de render !!!')
    request({
      uri: 'http://localhost:3000/api/blog',
      method: 'GET',
      json: true
    }, (err, response, body) => {
      if (err) { console.log(err) }
      this.setState({datos: body})
    })
  },
  render: function () {
    return (
      <Layout>
          <h1>Disque sonumir los datos del api !!!</h1>
          <Link Link to={`/about`}> de abrir About</Link>
          {
            this.state.datos.map((datos) => {
              return (<div> { datos.titulo } </div>)
            })
          }
      </Layout>
    )
  }
})
