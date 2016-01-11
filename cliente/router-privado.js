import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import listBlog from 'cliente/components/privado/blog/List-blog'
import formBlog from 'cliente/components/privado/blog/Form-blog'
import formEditar from 'cliente/components/privado/blog/Form-editar'
import formGeneral from 'cliente/components/privado/general/formGeneral'
import formPortafolio from 'cliente/components/privado/portafolio/formPortafolio'
import portafolioListar from 'cliente/components/privado/portafolio/listarPortafolio'

window.React = React


render((
  <Router>
    <Route component = { listBlog } path='/' />
    <Route component = { listBlog } path='/blog' />
    <Route component = { formBlog } path='/crear' />
    <Route component = { formEditar } path='/editar/:id' />
    <Route component = { formGeneral } path='/general' />
    <Route component = { formPortafolio } path='/portafolio' />
    <Route component = { formPortafolio } path='/portafolio/:id' />
    <Route component = { portafolioListar } path='/portafolio-listar' />
  </Router>
), document.getElementById('container'))
