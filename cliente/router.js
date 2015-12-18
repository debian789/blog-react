import React from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router'
import Home from 'cliente/components/home/home'
import About from 'cliente/components/about'
// activar en developer tools de chrom react
window.React = React

render((
<Router>
	<Route component= {Home} path= '/' />
	<Route component= {About} path= '/about' />
</Router>)
, document.getElementById('container'))
