'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routerBlogApi = require('server/routers/routerBlogApi');

var _routerBlogApi2 = _interopRequireDefault(_routerBlogApi);

var _routerBlog = require('server/routers/routerBlog');

var _routerBlog2 = _interopRequireDefault(_routerBlog);

var _mongooseConfig = require('server/config/mongooseConfig');

var _mongooseConfig2 = _interopRequireDefault(_mongooseConfig);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import engine from 'react-engine'

var LocalStrategy = _passportLocal.Strategy;

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

app.use(require('stylus').middleware(_path2.default.join(__dirname, 'public')));
app.use(_express2.default.static('public'));

// middleware para el manejo de datos de formulario body
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use((0, _cookieParser2.default)());

app.use((0, _expressSession2.default)({
  secret: 'holamundo',
  resave: false,
  saveUninitialized: false
}));

app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

_passport2.default.use(new LocalStrategy(function (username, password, done) {
  if (username === 'soy' && password === 'angel') {
    return done(null, { name: 'Super', lastname: 'User', username: 'superuser' });
  }

  done(null, false, { message: 'Unknown user' });
}));

_passport2.default.serializeUser(function (user, done) {
  return done(null, user);
});
_passport2.default.deserializeUser(function (user, done) {
  return done(null, user);
});

app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// respuesta HTML - render react
app.use('/', _routerBlog2.default);

// respuestas json
app.use('/api', _routerBlogApi2.default);

server.listen(3000);
console.log('server iniciado puerto 3000');