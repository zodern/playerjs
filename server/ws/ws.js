require('babel-register');
var WebSocket = require('ws');
var server = new WebSocket.Server({port: 7000});
var Socket = require('../ws2.js');

server.on('connection', function connection(client) {
  client.once('message', function incoming(message) {
    var data = JSON.parse(message);
    var url = 'ws://' + data.url + '/';
    var joinKey = data.joinKey;
    var joinData = data.joinData;
    var roomId = data.roomId;

    connect(client, url, joinKey, joinData, roomId);
  });
  client.on('error', function (err) {
    console.log('client err', err);
  });
});

server.on('error', function (err) {
  console.log('server error', err);
});

function connect(client, url, joinKey, joinData, roomId) {
  var endpointClient = new Socket([url], joinKey, joinData, roomId);

  return;
  var ws = new WebSocket(url);
  var queue = [];
  var connected = false;
  console.log('url', url);

  ws.on('open', function open() {
    console.log('ws open');
    connected = true;
    queue.forEach(function sendItem(item) {
      ws.send(item, {binary: true});
    });
  });

  ws.on('message', function (data, flags) {
    client.send(data, {binary: true});
  });
  client.on('message', function incoming(data) {
    if (!connected) {
      return queue.push(data);
    }
    ws.send(data, {binary: true});
  });
  ws.on('error', function (err) {
    console.log(err);
  });
}