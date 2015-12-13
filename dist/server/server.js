'use strict';

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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import engine from 'react-engine'

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

// middleware para el manejo de datos de formulario body
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// implementar react-engine para el render de react
// app.engine('.jsx', engine.server.create({
//  routes: require('server/views/routes.jsx'),
//  routesFilePath: 'server/views/routes.jsx'
// }))

app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'hjs');
// app.set('view', engine.expressView)

// respuesta HTML - render react
app.use('/', _routerBlog2.default);

// app.get('/', (req, res) => {
//   res.render(req.url, {
//    title: 'hola jjj3j3j3j3 :P '
//  })
// })

// respuestas json
app.use('/api', _routerBlogApi2.default);

app.listen(3001);
console.log('server iniciado puerto 3000');