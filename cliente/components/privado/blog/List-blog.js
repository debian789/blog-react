import React from 'react'
import request from 'client-request'
import Layout from 'cliente/components/privado/Layout'
import ItemBlog from 'cliente/components/privado/blog/Item-blog'

module.exports = class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      datosBlog: []
    }
  }

  componentWillMount () {
    request({
      uri: 'http://localhost:3000/api/blog',
      method: 'GET',
      json: true
    }, (err, response, body) => {
      if (err) { console.log(err) }
      this.setState({datosBlog: body})
    })
  }

  saludar2(event) {
    event.preventDefault()
    alert('Hooooooola Miguel !!!! wiiiii !!!  ')
  }

  render () {
    return (
      <Layout>
        <div> a{
            this.state.datosBlog.map((dato) => {
              return (<ItemBlog titulo= {dato.titulo}  eventoSaludar= {this.saludar2}/>)
            })
          } </div>
      </Layout>
    )
  }
}
