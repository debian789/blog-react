import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Home  from 'cliente/components/home'
import About  from 'cliente/components/about'

// activar en developer tools de chrom react
window.React = React

render((
	<Router>
		<Route component={ Home } path='/'></Route>
		<Route component={ About } path='/about'></Route>

		</Router>)
,document.getElementById('container'))
