var messages = require('./messages.js');
var request = require('./request.js');
var multiplayer = require('./multiplayer');
var Client = require('./client.js');

module.exports = {
  simpleConnect: function (gameId, usernameOrEmail, password, playerInsightSegments, cb) {
    var args = new messages.SimpleConnectArgs({
      gameId: gameId,
      usernameOrEmail: usernameOrEmail,
      password: password,
      playerInsightSegments: playerInsightSegments
    });
    args = args.encode().toArrayBuffer();
    request('', 400, args, messages.SimpleConnectOuput, function (err, result) {
          var client = new Client(result.token);
      cb(err, client);
    });
  }
};