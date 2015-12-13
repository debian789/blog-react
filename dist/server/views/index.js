'use strict';

var _routes = require('./routes.jsx');

var _routes2 = _interopRequireDefault(_routes);

var _client = require('react-engine/lib/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('./components/**/*.jsx', {glob: true})

// boot options
var options = {
  routes: _routes2.default // ,

  // supply a function that can be called
  // to resolve the file that was rendered.
  //viewResolver: function(viewName) {
  //  return require('./components/' + viewName);
  //}
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  _client2.default.boot(options);
});