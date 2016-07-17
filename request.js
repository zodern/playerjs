var http = require('http');
var ProtoBuf = require('protobufjs');
var messages = require('./messages.js');

var HOST = 'api.playerio.com';
var BASE_PATH = '/api/';

module.exports = function request(token, method, body, successMessage, errorMessage, cb) {
  if (typeof errorMessage === 'function') {
    cb = errorMessage;
    errorMessage = messages.PlayerIOError;
  }

  let options = {
    host: HOST,
    path: BASE_PATH + method,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'playertoken': token
    }
  };

  if (typeof window === "undefined") {
    options.host = HOST;
  }

  let req = http.request(options, (res) => {
    let data = [];
    res.on('data', (obj) => {
      data.push(obj);
    });

    res.on('end', () => {
      let buffer = Buffer.concat(data);
      res = _readHead(buffer);
      if (res.success) {
        cb(null, successMessage.decode(buffer, res.offset));
      } else {
        cb(errorMessage.decode(buffer, res.offset));
      }
    });
  });
  console.log(body);
  req.write(body);
  req.end();

  // request.open('POST', HOST + BASE_PATH + method, true);
  // request.responseType = 'arraybuffer';
  // request.setRequestHeader('playertoken', token);
  // request.onload = function (reqEvent) {
  //   try {
  //     var data = successMessage.decode(request.response);
  //   } catch (e) {
  //     console.log(String.fromCharCode.apply(String, new Uint8Array(request.response)));
  //   }
  //   console.log('data', data);
  //   cb(null, data);
  // };
  //
  // request.send(body);
};

function _readHead(buffer) {
  let pointer = 0;
  let hasToken = buffer.readInt8(pointer++);

  if (hasToken === 1) {
    let length = buffer.readInt16BE(pointer);
    pointer += 2;
    this.playerToken = buffer.toString('utf-8', pointer, length);
    pointer += length;
  }

  return {
    success: buffer.readInt8(pointer++) === 1,
    offset: pointer
  };
}