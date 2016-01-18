'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routerBlogApi = require('server/routers/routerBlogApi');

var _routerBlogApi2 = _interopRequireDefault(_routerBlogApi);

var _routerGeneralApi = require('server/routers/routerGeneralApi');

var _routerGeneralApi2 = _interopRequireDefault(_routerGeneralApi);

var _routerPortafolioApi = require('server/routers/routerPortafolioApi');

var _routerPortafolioApi2 = _interopRequireDefault(_routerPortafolioApi);

var _routerBlog = require('server/routers/routerBlog');

var _routerBlog2 = _interopRequireDefault(_routerBlog);

var _routerContactoApi = require('server/routers/routerContactoApi');

var _routerContactoApi2 = _interopRequireDefault(_routerContactoApi);

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

var _userSchema = require('server/models/userSchema');

var _userSchema2 = _interopRequireDefault(_userSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import MongoStore from 'connect-mongo'
var MongoStore = require('connect-mongo')(_expressSession2.default);
// import flash from 'connect-flash'

var LocalStrategy = _passportLocal.Strategy;
var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3000;

app.use(require('stylus').middleware(_path2.default.join(__dirname, 'public')));
app.use(_express2.default.static('public'));

// middleware para el manejo de datos de formulario body
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use((0, _cookieParser2.default)());

app.use((0, _expressSession2.default)({
  secret: 'holamundo',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: process.env.DB_Conection ? process.env.DB_Conection : 'mongodb://localhost/blogcero' })
}));

app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

_passport2.default.use(new LocalStrategy(_userSchema2.default.authenticate()));
_passport2.default.serializeUser(_userSchema2.default.serializeUser());
_passport2.default.deserializeUser(_userSchema2.default.deserializeUser());

app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// respuesta HTML - render react
app.use('/', _routerBlog2.default);

// respuestas json
app.use('/api', _routerBlogApi2.default);
app.use('/api', _routerGeneralApi2.default);
app.use('/api', _routerPortafolioApi2.default);
app.use('/api', _routerContactoApi2.default);

server.listen(port);
console.log('server iniciado puerto ' + port);