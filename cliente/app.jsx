'use strict'

import Layout from 'server/views/layout.jsx'
import React from 'react'
import Router from 'react-router'

const App = React.createClass({

  getDefaultProps: function () {
    return {

      autoPlay: false,
      maxLoops: 10,
    }
  },




  render () {
    return (
      <Layout {...this.props} >
        <Router.RouteHandler {...this.props} />
      </Layout>
    )
  }
})

module.exports = App
