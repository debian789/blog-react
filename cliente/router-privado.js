import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import listBlog from 'cliente/components/privado/blog/List-blog'

window.React = React

render((
  <Router>
    <Route component = { listBlog } path='/' />
    <Route component = { listBlog } path='/blog' />
    <Route component = { listBlog } path='/crear' />
  </Router>
), document.getElementById('container'))
