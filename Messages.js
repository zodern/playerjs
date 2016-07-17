var ProtoBuf = require('protobufjs');
var protoStr = require('./messages.json');

var builder = ProtoBuf.loadJson(protoStr);

// attempt login

var PlayerInsightState = builder.build('PlayerInsightState');

module.exports = {
  PlayerInsigthState: builder.build('PlayerInsightState'),
  KeyValuePair: builder.build('KeyValuePair'),
  ServerEndpoint: builder.build('ServerEndP'),
  SimpleConnectArgs: builder.build('SimpleConnectArgs'),
  SimpleConnectOuput: builder.build('SimpleConnectOutput'),
  SimpleRegisterArgs: builder.build('SimpleRegisterArgs'),
  SimpleRegisterOutput: builder.build('SimpleRegisterOutput'),
  SimpleRegisterError: builder.build('SimpleRegisterError'),
  CreateRoomArgs: builder.build('CreateRoomArgs'),
  CreateRoomOutput: builder.build('CreateRoomOutput'),
  JoinRoomArgs: builder.build('JoinRoomArgs'),
  JoinRoomOutput: builder.build('JoinRoomOutput'),
  CreateJoinRoomArgs: builder.build('CreateJoinRoomArgs'),
  CreateJoinRoomOutput: builder.build('CreateJoinRoomOutput'),
  ListRoomsArgs: builder.build('ListRoomsArgs'),
  ListRoomsOutput: builder.build('ListRoomsOutput'),
  ListRoomsError: builder.build('ListRoomsError'),
  RoomInfo: builder.build('RoomInfo'),
  ValueObject: builder.build('ValueObject'),
  ObjectProperty: builder.build('ObjectProperty'),
  ArrayProperty: builder.build('ArrayProperty'),
  BigDBObject: builder.build('BigDBObject'),
  LoadMyPlayerObjectArgs: builder.build('LoadMyPlayerObjectArgs'),
  LoadMyPLayerObjectOutput: builder.build('LoadMyPLayerObjectArgs'),
  PlayerIOError: builder.build('PlayerIOError')
};
