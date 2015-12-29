import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import listBlog from 'cliente/components/privado/blog/List-blog'
import formBlog from 'cliente/components/privado/blog/Form-blog'
import formEditar from 'cliente/components/privado/blog/Form-editar'

window.React = React

render((
  <Router>
    <Route component = { listBlog } path='/' />
    <Route component = { listBlog } path='/blog' />
    <Route component = { formBlog } path='/crear' />
    <Route component = { formEditar } path='/editar/:id' />
  </Router>
), document.getElementById('container'))
