import React from 'react'
import request from 'superagent'
import marked from 'marked'
import Layout from 'cliente/components/publico/layout'
module.exports = class SobreMi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      datos: {
        sobremi: ''
      }
    }
  }
  componentWillMount () {
    request
    .get('/api/general')
    .end((err, data) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({datos: data.body})
      }
    })
  }
  render () {
    return (
      <Layout>
        <div>
          <h2>Sobre mi </h2>
          <p>Conóceme un poco más sobre mi trabajo</p>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.datos.sobremi)}}></div>
        </div>
      </Layout>
    )
  }
}
