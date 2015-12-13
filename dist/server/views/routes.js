'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('server/views/app.jsx');

var _app2 = _interopRequireDefault(_app);

var _home = require('./home.jsx');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var routes = _react2.default.createElement(
  Route,
  { handler: _app2.default },
  _react2.default.createElement(Route, { path: '/', name: 'home', handler: _home2.default })
);

module.exports = routes;