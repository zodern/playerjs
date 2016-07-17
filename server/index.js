var httpProxy = require('http-proxy');
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
require('./ws/ws2.js');

var proxy = httpProxy.createProxyServer({
  ws: true
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  console.log('received request for ' + req.url);
  proxyReq.setHeader('host', 'api.playerio.com');
  console.log(proxyReq.path);
});

proxy.on('proxyReqWs', function (proxyReq, req, res) {
  console.log('proxyReqWs');
  proxyReq.setHeader('host','api.playerio.com');
});


var server = http.createServer(app);
app.use(express.static('../output'));

app.use(function (req, res) {
  console.log('url', req.url);
  proxy.web(req, res, {target: 'http://api.playerio.com'});
});

server.on('upgrade', function (req, socket, head) {
  console.log('upgrading', req.url);

  proxy.ws(req, socket, head, {target: 'localhost', port: 9015, toProxy: true}, function (err){
    console.log('finished', err);
  });
});

server.listen(process.env.PORT || 8000);
console.log('listening to port 8000');
