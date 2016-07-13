var multiplayer = require('./multiplayer.js');

module.exports = function Client(token) {
  return {
    _token: token,
    Multiplayer: multiplayer.apply(this)
  }
};