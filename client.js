var multiplayer = require('./muliplayer');

module.export = function Client(token) {
  return {
    _token: token,
    Multiplayer: multiplayer.apply(this)
  }
};