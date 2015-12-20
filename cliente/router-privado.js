import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Home from 'cliente/components/privado/home/home'


window.React = React

render((
  <Router>
    <Route component = { Home } path='/' />
  </Router>
), document.getElementById('container'))
