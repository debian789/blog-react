'use strict';

var _layout = require('server/views/layout.jsx');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',

  getDefaultProps: function getDefaultProps() {
    return {

      autoPlay: false,
      maxLoops: 10
    };
  },

  render: function render() {
    return _react2.default.createElement(
      _layout2.default,
      this.props,
      _react2.default.createElement(_reactRouter2.default.RouteHandler, this.props)
    );
  }
});

module.exports = App;