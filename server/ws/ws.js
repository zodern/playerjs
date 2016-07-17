var WebSocket = require('ws');
var server = new WebSocket.Server({port: 7000});

server.on('connection', function connection(client) {
  client.once('message', function incoming(message) {
    console.log('incoming', message);
    connect(client, 'ws://' + message + '/');
  });
  client.on('error', function (err) {
    console.log('client err', err);
  });
});

server.on('error', function (err) {
  console.log('server error', err);
});

function connect(client, url) {
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