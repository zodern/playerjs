import {keyValue} from './messageUtils';
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
      joinData: keyValue(joinData),
      isDevRoom: false //TODO: this should be if development server
    });
    console.log('module.exports', module.exports);
    request(this._token, 27, args.encode().toBuffer(), messages.CreateJoinRoomOutput, function (err, obj) {
      console.log(err, obj);
      let connection = new Connection(obj.endpoints, obj.joinKey, joinData, obj.roomId);
      connection.on('connect', ()=> {
        cb(null, connection);
      });
      connection.on('error', () => {
        cb(connection.error);
      });
    });
  },
  listRooms(roomType, searchCriteria, resultLimit, resultOffset, onlyDevRooms, cb) {
    var args = new messages.ListRoomsArgs({
      roomType: roomType,
      searchCriteria: keyValue(searchCriteria),
      resultLimit: resultLimit,
      resultOffset: resultOffset,
      onlyDevRooms: onlyDevRooms
    });

    request(this._token, 30, args.encode().toBuffer(), messages.ListRoomsOutput, function (err, result) {
      console.log('list rooms', err, result);
      cb(err, result);
    });
  },
  _token: null
};