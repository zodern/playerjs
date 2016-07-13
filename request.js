var http = require('http');
var ProtoBuf = require('protobufjs');
var messages = require('./messages.js');

var HOST = 'http://localhost:8000';
var BASE_PATH = '/api/';

module.exports = function request(token, method, body, successMessage, errorMessage, cb) {
  console.trace(token);

  if (typeof errorMessage === 'function') {
    cb = errorMessage;
    errorMessage = messages.PlayerIOError;
  }

  if (typeof window === "undefined") {
    options.host = HOST;
  }

  var request = new ProtoBuf.Util.XHR();
  request.open('POST', HOST + BASE_PATH + method, true);
  request.responseType = 'arraybuffer';
  request.setRequestHeader('playertoken', token);
  request.onload = function (reqEvent) {
    try {
      var data = successMessage.decode(request.response);
    } catch (e) {
      console.log(String.fromCharCode.apply(String, new Uint8Array(request.response)));
    }
    console.log('data', data);
    cb(null, data);
  };

  request.send(body);
};