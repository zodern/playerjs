var multiplayer = require('./multiplayer.js');

module.exports = function Client(token) {
  multiplayer._token = token;
  return {
    _token: token,
    multiplayer: multiplayer
  }
};