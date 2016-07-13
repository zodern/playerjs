var httpProxy = require('http-proxy');
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require("path");
var express = require('express');
var app = express();
var browserNet = require('net-browserify');

var proxy = httpProxy.createProxyServer({
  target: 'http://google.com'
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  console.log('received request for ' + req.url);
  var headersToRemove = [
    'cookie',
    "accept-language",
    "accept-encoding",
    'Origin',
    'Referer',
    'accept',
    'user-agent',
    'cache-control',
    'pragma',
    'content-length',
    'connection'
  ];
  headersToRemove.forEach(function (header) {
    proxyReq.removeHeader(header);
  });
  proxyReq.removeHeader('Origin');
  proxyReq.removeHeader('Referer');
  proxyReq.removeHeader('');
  proxyReq.setHeader('host', 'api.playerio.com');
  console.dir(proxyReq.path)
});

var server = http.createServer(app);
app.use(express.static('../output'));
app.use(browserNet());

app.use(function(req, res) {
  proxy.web(req, res, { target: 'http://api.playerio.com' });
});

server.listen(process.env.PORT || 8000);
console.log('listening to port 8000');
