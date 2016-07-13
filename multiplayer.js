var request = require('./request');
var messages = require('./messages');
var Connection = require('./socket.js').default;

module.exports = {
  createJoinRoom: function (roomId, roomType, isVisible, roomData, joinData, cb) {
    var args = new messages.CreateJoinRoomArgs({
      roomId: roomId,
      roomType: roomType,
      visible: isVisible,
      roomData: roomData,
      joinData: joinData,
      isDevRoom: false //TODO: this should be if development server
    });
    console.log('module.exports', module.exports);
    request(this._token, 27, args.toBuffer(), messages.CreateJoinRoomOutput, function (err, obj) {
       console.log(err, obj);
      let connection = new Connection(obj.endpoints, obj.joinKey, joinData, obj.roomId);
      connection.on('connect', ()=> {
         cb(null, connection);
      });
      connection.on('error', () => {
         cb(connection.error);
      });
    });
  } ,
  _token: null
};