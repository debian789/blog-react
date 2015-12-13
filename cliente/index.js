import Routes from './routes.jsx'
import Client from 'react-engine/lib/client'

// require('./components/**/*.jsx', {glob: true})

// boot options
var options = {
  routes: Routes // ,

  // supply a function that can be called
  // to resolve the file that was rendered.
  //viewResolver: function(viewName) {
  //  return require('./components/' + viewName);
  //}
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});
