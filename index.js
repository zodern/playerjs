export var QuickConnect = require('./QuickConnect.js');
export var multiplayer = require('./multiplayer');

QuickConnect.simpleConnect('vortex-test-flaf4vroleq9r5uyrxxvmq', 'guestaccount', 'guestaccountvw11', null, function (err, client) {
  console.log('logged in as guest');
  var time = new Date().getTime();
  client.multiplayer.createJoinRoom('testroom' + time, 'UserRoom2.4', true, null, {test: 'true'}, function (error, client) {
    console.log('created room', error);
  }, function () {
    console.log('error');
  });
}, function (error) {
  console.log('error');
});