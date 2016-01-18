import React from 'react'
import Layout from 'cliente/components/privado/layout'
import request from 'superagent'

module.exports = class ListarContactos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactos: []
    }
  }
  componentWillMount () {
    request
    .get('/api/contacto')
    .end((err, datos) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({contactos: datos.body})
      }
    })
  }
  render () {
    return (
      <Layout>
        <table>
          <thead>

          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Asunto</th>
            <th>Consulta</th>
            <th>Acción</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.contactos.map((registros) => {
              return (
                <tr key={registros._id}>
                  <td>{registros.nombre}</td>
                  <td>{registros.email}</td>
                  <td>{registros.asunto}</td>
                  <td>{registros.consulta}</td>
                  <td><span id={registros.id}> Eliminar </span></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Layout>
    )
  }
}
