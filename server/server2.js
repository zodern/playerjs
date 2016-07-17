var httpProxy = require('http-proxy');
var http = require('http');
var url = require('url');
var path = require("path");

var proxy = httpProxy.createProxyServer({
  target: 'http://google.com',
  ws: true
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  console.log('received request for ' + req.url);
  var urlParts = url.parse(req.url, true);
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
  proxyReq.setHeader('host', urlParts.query.url || 'api.playerio.com');
  console.dir(proxyReq.path);
});




var server = http.createServer(function(req, res) {
  console.log('url', req.url);
  proxy.web(req, res, { target: 'http://api.playerio.com' });
});

server.on('upgrade', function (req, socket, head) {
  console.log('upgrading');
  console.log(req.url);
  var parts = url.parse(req.url);
  console.dir(parts);
 //  proxy.ws(req, socket, head);
});

server.listen(process.env.PORT || 8001);
console.log('listening to port 8001');
