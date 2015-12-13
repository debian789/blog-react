'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clientRequest = require('client-request');

var _clientRequest2 = _interopRequireDefault(_clientRequest);

var _layout = require('server/views/layout.jsx');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getDefaultProps: function getDefaultProps() {
    return {

      autoPlay: false,
      maxLoops: 10
    };
  },

  componentWillMount: function componentWillMount() {
    var _this = this;

    var options = {
      uri: 'http://localhost:3001/api/blog',
      method: "GET",
      json: true
    };

    (0, _clientRequest2.default)(options, function (err, response, body) {
      //console.log(err)
      _this.setState({ datos: body });
      //console.log(body.toString())
      //console.log('......-.....')
    });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { title: 'Blog' },
      _react2.default.createElement(
        'h1',
        null,
        'Hola mundo !!!'
      ),
      _react2.default.createElement('div', null)
    );
  }
});
// import { Link } from 'react-router'