import React from 'react'
import request from 'client-request'
// import { Link } from 'react-router'
import Layout from 'server/views/layout.jsx'


module.exports = React.createClass({
  getDefaultProps: function() {
    return {

      autoPlay: false,
      maxLoops: 10,
    }
  },



  componentWillMount: function () {

    var options = {
      uri:'http://localhost:3001/api/blog',
      method:"GET",
      json:true
    }

    request(options, (err, response, body) => {
      //console.log(err)
      this.setState({datos:body});
      //console.log(body.toString())
      //console.log('......-.....')
    })



  },

  render: function () {
    return (
      <div title = 'Blog'>
        <h1>Hola mundo !!!</h1>
        <div></div>

  </div>
    )
  }
})
