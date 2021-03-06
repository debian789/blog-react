import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import Home from 'cliente/components/publico/home/home'
import DetalleBlog from 'cliente/components/publico/home/detalleBlog'
// import About from 'cliente/components/publico/about'
import ListarPortafolio from 'cliente/components/publico/portafolio/listarPortafolio'
import SobreMi from 'cliente/components/publico/sobremi/sobremi'
import Contacto from 'cliente/components/publico/contacto/contacto'

// activar en developer tools de chrom react
window.React = React

render((
	<Router>
		<Route component={ Home } path='/' />
		<Route component= {DetalleBlog} path='/blog/:id'/>
		<Route component={ ListarPortafolio } path='/portafolio' />
		<Route component={ SobreMi } path='/sobre-mi' />
		<Route component={ Contacto } path='/contacto' />
</Router>)
, document.getElementById('container'))
