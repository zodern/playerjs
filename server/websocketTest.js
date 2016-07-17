var http = require('http');
var wsProxy = require('../node-ws-multi-proxy.js').WebSocketProxy;
var proxy = new wsProxy({ debug:true, webSocketServer:{ port:1234, perMessageDeflate: false } }) ;