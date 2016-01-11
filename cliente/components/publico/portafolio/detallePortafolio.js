import React from 'react'
module.exports = class detallePortafolio extends React.Component {
  render () {
    let cliente = this.props.datosDetalle.cliente ? <div><strong>Cliente:</strong> {this.props.datosDetalle.cliente}</div> : ''
    let fecha = this.props.datosDetalle.fechaCreacion ? <div><strong>Fecha:</strong> {this.props.datosDetalle.fechaCreacion}</div> : ''
    let demo = this.props.datosDetalle.urlWeb ? <div><strong>Demo:</strong> <a href={this.props.datosDetalle.urlWeb} target='_black'>{this.props.datosDetalle.urlWeb}</a></div> : ''
    let tipo = this.props.datosDetalle.tipo ? <div><strong>Tipo:</strong> {this.props.datosDetalle.tipo}</div> : ''
    let urlRepo = this.props.datosDetalle.urlRepositorio ? <div><strong>Url Repositorio:</strong><a href={this.props.datosDetalle.urlRepositorio} target='_black'> {this.props.datosDetalle.urlRepositorio}</a></div> : ''
    let tecnologias = this.props.datosDetalle.tecnologias ? <div><strong>Tecnologias implementadas:</strong> {this.props.datosDetalle.tecnologias}</div> : ''



    return (
      <section className='ventanaCompleta'>
        <div className='cerrarVentana'><span onClick={this.props.eventoCerrar} className='icon-cross'></span></div>
        <h1>{this.props.datosDetalle.titulo}</h1>
        <figure>
          <img src={this.props.datosDetalle.imagenPrincipal}/>
        </figure>
        <p>{this.props.datosDetalle.descripcion}</p>
        <section className='caracteristicasPortafolio'>
          {cliente}
          {fecha}
          {demo}
          {tipo}
          {urlRepo}
          {tecnologias}
        </section>
      </section>
    )
  }
}
