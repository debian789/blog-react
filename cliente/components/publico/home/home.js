import React from 'react'
import request from 'superagent'
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
    request
    .get('/api/blog')
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({datos: res.body})
      }
    })
  },
  limitarTexto (texto) {
    if (texto) {
      return texto.substring(0, 200) + '...'
    }
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
