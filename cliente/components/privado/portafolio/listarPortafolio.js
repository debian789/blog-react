import React from 'react'
import Layout from 'cliente/components/privado/Layout'
import request from 'superagent'
import {Link} from 'react-router'

module.exports = class ListarPortafolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listaPortafolio: []
    }
  }
  componentWillMount () {
    request
    .get('/api/portafolio')
    .end((err, data) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({listaPortafolio: data.body})
      }
    })
  }
  render () {
    return (
      <Layout>
        <section className='listaPortafolio'>
          {
            this.state.listaPortafolio.map((data) => {
              return (
                <div key={data._id}>
                  <figure>
                    <img src={data.imagenPrincipal} />
                  </figure>
                  <div><Link to={`/portafolio/${data._id}`}>Modificar</Link> </div>
                </div>
              )
            })
          }

        </section>
      </Layout>
    )
  }
}
