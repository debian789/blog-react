import React from 'react'
import request from 'client-request'
import { Link } from 'react-router'
import Layout from 'cliente/components/layout'
import ItemBlog from 'cliente/components/home/itemBlog'


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
          //<Link Link to={`/about`}> de abrir About</Link>
    var descripcion = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'



    return (
      <Layout>
          {
            this.state.datos.map((datos) => {
              return (<ItemBlog titulo='Programacion react' fechaCreacion='12-223-4' itemBlogImagen='http://placehold.it/900x300' descripcion={descripcion} />)
            })
          }
          {
            this.state.datos.map((datos) => {
              return (<ItemBlog titulo='Programacion react' fechaCreacion='12-223-4' itemBlogImagen='http://placehold.it/900x300' descripcion={descripcion} />)
            })
          }
      </Layout>
    )
  }
})
