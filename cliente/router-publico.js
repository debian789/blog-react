import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import Home from 'cliente/components/publico/home/home'
import DetalleBlog from 'cliente/components/publico/home/DetalleBlog'
import About from 'cliente/components/publico/about'

// activar en developer tools de chrom react
window.React = React

render((
	<Router>
		<Route component={ Home } path='/' />
		<Route component= {DetalleBlog} path='/blog/:id'/>
		<Route component={ About } path='/about' />
</Router>)
, document.getElementById('container'))
