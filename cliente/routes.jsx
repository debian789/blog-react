'use strict'
import React from 'react'
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

import App  from 'server/views/app.jsx'
import Home from './home.jsx'



var routes = (
  <Route  handler= {App}>
    <Route path='/' name='home'   handler={Home}/>
  </Route>
)

module.exports = routes
