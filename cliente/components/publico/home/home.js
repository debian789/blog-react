import React from 'react'
import request from 'client-request'
import Layout from 'cliente/components/publico/layout'
import ItemBlog from 'cliente/components/publico/home/itemBlog'

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
  limitarTexto (texto) {
    return texto.substring(0, 200) + '...'
  },
  render: function () {
    return (
      <Layout>
          {
            this.state.datos.map((datos) => {
              return (<ItemBlog key={datos._id} id={datos._id} titulo={datos.titulo} fechaCreacion={datos.fechaCreacion} imagenPrincipal={datos.imagenPrincipal} descripcion={this.limitarTexto(datos.descripcion)} />)
            })
          }
      </Layout>
    )
  }
})
