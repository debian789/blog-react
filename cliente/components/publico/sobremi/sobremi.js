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
        <section className='sobreMiListado'>
          <h1>Sobre mi </h1>
          <p className='mensajeSobreMi'>Conóceme un poco más sobre mi trabajo</p>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.datos.sobremi)}}></div>
        </section>
      </Layout>
    )
  }
}
