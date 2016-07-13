var ProtoBuf = require('protobufjs');
var protoStr = require('./messages.json');
console.log(protoStr);

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
  ValueObject: builder.build('ValueObject'),
  ObjectProperty: builder.build('ObjectProperty'),
  ArrayProperty: builder.build('ArrayProperty'),
  BigDBObject: builder.build('BigDBObject'),
  LoadMyPlayerObjectArgs: builder.build('LoadMyPlayerObjectArgs'),
  LoadMyPLayerObjectOutput: builder.build('LoadMyPLayerObjectArgs'),
  PlayerIOError: builder.build('PlayerIOError')
};
