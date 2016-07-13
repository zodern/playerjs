var multiplayer = require('./multiplayer.js');

module.export = function Client(token) {
  return {
    _token: token,
    Multiplayer: multiplayer.apply(this)
  }
};