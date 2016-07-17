require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	module.exports = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var QuickConnect = exports.QuickConnect = __webpack_require__(3);
	var multiplayer = exports.multiplayer = __webpack_require__(9);
	
	QuickConnect.simpleConnect('vortex-test-flaf4vroleq9r5uyrxxvmq', 'guestaccount', 'guestaccountvw11', null, function (err, client) {
	  console.log('logged in as guest');
	  var time = new Date().getTime();
	  client.multiplayer.createJoinRoom('testroom' + time, 'UserRoom2.4', true, null, { test: 'true' }, function (error, client) {
	    console.log('created room', error);
	  }, function () {
	    console.log('error');
	  });
	}, function (error) {
	  console.log('error');
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var messages = __webpack_require__(4);
	var request = __webpack_require__(7);
	var multiplayer = __webpack_require__(9);
	var Client = __webpack_require__(19);
	
	module.exports = {
	  simpleConnect: function simpleConnect(gameId, usernameOrEmail, password, playerInsightSegments, cb) {
	    var args = new messages.SimpleConnectArgs({
	      gameId: gameId,
	      usernameOrEmail: usernameOrEmail,
	      password: password,
	      playerInsightSegments: playerInsightSegments
	    });
	    args = args.toBuffer();
	    request('', 400, args, messages.SimpleConnectOuput, function (err, result) {
	      var client = Client(result.token);
	      cb(err, client);
	    });
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ProtoBuf = __webpack_require__(5);
	var protoStr = __webpack_require__(6);
	
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("protobufjs");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
		"package": null,
		"messages": [
			{
				"name": "KeyValuePair",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "key",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "value",
						"id": 2
					}
				]
			},
			{
				"name": "PlayerInsightState",
				"fields": [
					{
						"rule": "optional",
						"type": "int32",
						"name": "playersOnline",
						"id": 1
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "segments",
						"id": 2
					}
				]
			},
			{
				"name": "ServerEndpoint",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "address",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "int32",
						"name": "port",
						"id": 2
					}
				]
			},
			{
				"name": "SimpleConnectArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "gameId",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "usernameOrEmail",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "password",
						"id": 3
					},
					{
						"rule": "repeated",
						"type": "string",
						"name": "playerInsightSegments",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "clientAPI",
						"id": 5
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "clientInfo",
						"id": 6
					}
				]
			},
			{
				"name": "SimpleConnectOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "token",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "userId",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "showBranding",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "gameFSRedirectMap",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "partnerId",
						"id": 5
					}
				]
			},
			{
				"name": "SimpleRegisterArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "gameId",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "username",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "password",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "email",
						"id": 4
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "extraData",
						"id": 5
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "captchaKey",
						"id": 6
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "captchaValue",
						"id": 7
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "partnerId",
						"id": 8
					},
					{
						"rule": "repeated",
						"type": "string",
						"name": "playerInsightSegments",
						"id": 9
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "clientAPI",
						"id": 10
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "clientInfo",
						"id": 11
					}
				]
			},
			{
				"name": "SimpleRegisterOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "token",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "userId",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "showBranding",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "gameFSRedirectMap",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "partnerId",
						"id": 5
					},
					{
						"rule": "optional",
						"type": "PlayerInsightState",
						"name": "playerInsightState",
						"id": 6
					}
				]
			},
			{
				"name": "SimpleRegisterError",
				"fields": [
					{
						"rule": "optional",
						"type": "int32",
						"name": "errorCode",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "message",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "usernameError",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "passwordError",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "emailError",
						"id": 5
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "captchaError",
						"id": 6
					}
				]
			},
			{
				"name": "CreateRoomArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomId",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "roomType",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "visible",
						"id": 3
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "roomData",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "isDevRoom",
						"id": 5
					}
				]
			},
			{
				"name": "CreateRoomOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomId",
						"id": 1
					}
				]
			},
			{
				"name": "JoinRoomArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomId",
						"id": 1
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "joinData",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "isDevRoom",
						"id": 3
					}
				]
			},
			{
				"name": "JoinRoomOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "joinKey",
						"id": 1
					},
					{
						"rule": "repeated",
						"type": "ServerEndpoint",
						"name": "endpoints",
						"id": 2
					}
				]
			},
			{
				"name": "CreateJoinRoomArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomId",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "roomType",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "visible",
						"id": 3
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "roomData",
						"id": 4
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "joinData",
						"id": 5
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "isDevRoom",
						"id": 6
					}
				]
			},
			{
				"name": "CreateJoinRoomOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomId",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "joinKey",
						"id": 2
					},
					{
						"rule": "repeated",
						"type": "ServerEndpoint",
						"name": "endpoints",
						"id": 3
					}
				]
			},
			{
				"name": "ListRoomsArgs",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "roomType",
						"id": 1
					},
					{
						"rule": "repeated",
						"type": "KeyValuePair",
						"name": "searchCriteria",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "int32",
						"name": "resultLimit",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "int32",
						"name": "resultOffset",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "onlyDevRooms",
						"id": 5
					}
				]
			},
			{
				"name": "ListRoomsOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "RoomInfo",
						"name": "rooms",
						"id": 1
					}
				]
			},
			{
				"name": "RoomInfo",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "id",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "roomType",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "int32",
						"name": "onlineUsers",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "KeyValuePair",
						"name": "roomData",
						"id": 4
					}
				]
			},
			{
				"name": "ValueObject",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "string",
						"id": 2
					},
					{
						"rule": "optional",
						"type": "int32",
						"name": "int32",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "uint32",
						"name": "uInt",
						"id": 4
					},
					{
						"rule": "optional",
						"type": "int64",
						"name": "long",
						"id": 5
					},
					{
						"rule": "optional",
						"type": "bool",
						"name": "bool",
						"id": 6
					},
					{
						"rule": "optional",
						"type": "float",
						"name": "float",
						"id": 7
					},
					{
						"rule": "optional",
						"type": "double",
						"name": "double",
						"id": 8
					},
					{
						"rule": "optional",
						"type": "bytes",
						"name": "byteArray",
						"id": 9
					},
					{
						"rule": "optional",
						"type": "int64",
						"name": "dateTime",
						"id": 10
					},
					{
						"rule": "repeated",
						"type": "ArrayProperty",
						"name": "arrayProperties",
						"id": 11
					},
					{
						"rule": "repeated",
						"type": "ObjectProperty",
						"name": "objectProperties",
						"id": 12
					}
				],
				"enums": [
					{
						"name": "valueType",
						"values": [
							{
								"name": "STRING",
								"id": 0
							},
							{
								"name": "INT",
								"id": 1
							},
							{
								"name": "UINT",
								"id": 2
							},
							{
								"name": "LONG",
								"id": 3
							},
							{
								"name": "BOOL",
								"id": 4
							},
							{
								"name": "FLOAT",
								"id": 5
							},
							{
								"name": "DOUBLe",
								"id": 6
							},
							{
								"name": "BYTEARRAY",
								"id": 7
							},
							{
								"name": "ARRAY",
								"id": 9
							},
							{
								"name": "OBJ",
								"id": 10
							}
						]
					}
				]
			},
			{
				"name": "ObjectProperty",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "name",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "ValueObject",
						"name": "value",
						"id": 2
					}
				]
			},
			{
				"name": "ArrayProperty",
				"fields": [
					{
						"rule": "optional",
						"type": "int32",
						"name": "index",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "ValueObject",
						"name": "value",
						"id": 2
					}
				]
			},
			{
				"name": "BigDBObject",
				"fields": [
					{
						"rule": "optional",
						"type": "string",
						"name": "key",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "version",
						"id": 2
					},
					{
						"rule": "repeated",
						"type": "ObjectProperty",
						"name": "properties",
						"id": 3
					},
					{
						"rule": "optional",
						"type": "uint32",
						"name": "creator",
						"id": 4
					}
				]
			},
			{
				"name": "LoadMyPlayerObjectArgs",
				"fields": []
			},
			{
				"name": "LoadMyPlayerObjectOutput",
				"fields": [
					{
						"rule": "optional",
						"type": "BigDBObject",
						"name": "playerObject",
						"id": 1
					}
				]
			},
			{
				"name": "PlayerIOError",
				"fields": [
					{
						"rule": "optional",
						"type": "int32",
						"name": "errorCode",
						"id": 1
					},
					{
						"rule": "optional",
						"type": "string",
						"name": "message",
						"id": 2
					}
				]
			}
		],
		"enums": [
			{
				"name": "valueType",
				"values": [
					{
						"name": "STRING",
						"id": 0
					},
					{
						"name": "INT",
						"id": 1
					},
					{
						"name": "UINT",
						"id": 2
					},
					{
						"name": "LONG",
						"id": 3
					},
					{
						"name": "BOOL",
						"id": 4
					},
					{
						"name": "FLOAT",
						"id": 5
					},
					{
						"name": "DOUBLe",
						"id": 6
					},
					{
						"name": "BYTEARRAY",
						"id": 7
					},
					{
						"name": "ARRAY",
						"id": 9
					},
					{
						"name": "OBJ",
						"id": 10
					}
				]
			}
		]
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var http = __webpack_require__(8);
	var ProtoBuf = __webpack_require__(5);
	var messages = __webpack_require__(4);
	
	var HOST = 'api.playerio.com';
	var BASE_PATH = '/api/';
	
	module.exports = function request(token, method, body, successMessage, errorMessage, cb) {
	  if (typeof errorMessage === 'function') {
	    cb = errorMessage;
	    errorMessage = messages.PlayerIOError;
	  }
	
	  var options = {
	    host: HOST,
	    path: BASE_PATH + method,
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/x-www-form-urlencoded',
	      'playertoken': token
	    }
	  };
	
	  if (typeof window === "undefined") {
	    options.host = HOST;
	  }
	
	  var req = http.request(options, function (res) {
	    var data = [];
	    res.on('data', function (obj) {
	      data.push(obj);
	    });
	
	    res.on('end', function () {
	      var buffer = Buffer.concat(data);
	      res = _readHead(buffer);
	      if (res.success) {
	        cb(null, successMessage.decode(buffer, res.offset));
	      } else {
	        cb(errorMessage.decode(buffer, res.offset));
	      }
	    });
	  });
	  console.log(body);
	  req.write(body);
	  req.end();
	
	  // request.open('POST', HOST + BASE_PATH + method, true);
	  // request.responseType = 'arraybuffer';
	  // request.setRequestHeader('playertoken', token);
	  // request.onload = function (reqEvent) {
	  //   try {
	  //     var data = successMessage.decode(request.response);
	  //   } catch (e) {
	  //     console.log(String.fromCharCode.apply(String, new Uint8Array(request.response)));
	  //   }
	  //   console.log('data', data);
	  //   cb(null, data);
	  // };
	  //
	  // request.send(body);
	};
	
	function _readHead(buffer) {
	  var pointer = 0;
	  var hasToken = buffer.readInt8(pointer++);
	
	  if (hasToken === 1) {
	    var length = buffer.readInt16BE(pointer);
	    pointer += 2;
	    this.playerToken = buffer.toString('utf-8', pointer, length);
	    pointer += length;
	  }
	
	  return {
	    success: buffer.readInt8(pointer++) === 1,
	    offset: pointer
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _messageUtils = __webpack_require__(10);
	
	var request = __webpack_require__(7);
	var messages = __webpack_require__(4);
	var Connection = __webpack_require__(11).default;
	
	module.exports = {
	  createJoinRoom: function createJoinRoom(roomId, roomType, isVisible, roomData, joinData, cb) {
	    var args = new messages.CreateJoinRoomArgs({
	      roomId: roomId,
	      roomType: roomType,
	      visible: isVisible,
	      roomData: roomData,
	      joinData: (0, _messageUtils.keyValue)(joinData),
	      isDevRoom: false //TODO: this should be if development server
	    });
	    console.log('module.exports', module.exports);
	    request(this._token, 27, args.encode().toBuffer(), messages.CreateJoinRoomOutput, function (err, obj) {
	      console.log(err, obj);
	      var connection = new Connection(obj.endpoints, obj.joinKey, joinData, obj.roomId);
	      connection.on('connect', function () {
	        cb(null, connection);
	      });
	      connection.on('error', function () {
	        cb(connection.error);
	      });
	    });
	  },
	  listRooms: function listRooms(roomType, searchCriteria, resultLimit, resultOffset, onlyDevRooms, cb) {
	    var args = new messages.ListRoomsArgs({
	      roomType: roomType,
	      searchCriteria: (0, _messageUtils.keyValue)(searchCriteria),
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.keyValue = keyValue;
	function keyValue(obj) {
	  if (obj && Object.keys(obj).length > 0) {
	    var keys = [];
	    for (var key in obj) {
	      keys.push({
	        key: key,
	        value: obj[key].toString()
	      });
	    }
	    return keys;
	  } else {
	    return [];
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _net = __webpack_require__(12);
	
	var _net2 = _interopRequireDefault(_net);
	
	var _events = __webpack_require__(13);
	
	var _message = __webpack_require__(14);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _playerioError = __webpack_require__(15);
	
	var _playerioError2 = _interopRequireDefault(_playerioError);
	
	var _errorCode = __webpack_require__(16);
	
	var _errorCode2 = _interopRequireDefault(_errorCode);
	
	var _binarySerializer = __webpack_require__(17);
	
	var _binarySerializer2 = _interopRequireDefault(_binarySerializer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A connection to a running Player.IO multiplayer room.
	 */
	
	var Connection = function (_EventEmitter) {
	  _inherits(Connection, _EventEmitter);
	
	  _createClass(Connection, [{
	    key: 'isConnected',
	
	
	    /**                               79
	     * Determines whether the connection is currently connected to a remote host.
	     * @type {boolean}
	     */
	    get: function get() {
	      return this._isConnected;
	    }
	
	    /**
	     * Represents the ID of the current room.
	     * @type {string}
	     */
	
	  }, {
	    key: 'roomId',
	    get: function get() {
	      return this._roomId;
	    }
	
	    /**
	     * The current error, if there is any.
	     * @private
	     * @type {?PlayerIOError}
	     */
	
	  }, {
	    key: 'error',
	    get: function get() {
	      return this._error;
	    }
	
	    /**
	     * @private
	     * @param {ServerEndpoint[]} endpoints
	     * @param {string} joinKey
	     * @param {?Map<string, string>} joinData
	     * @param {string} roomId
	     */
	
	  }], [{
	    key: '_getEndpoint',
	    value: function _getEndpoint(endpoints) {
	      return endpoints[0];
	    }
	  }]);
	
	  function Connection(endpoints, joinKey, joinData, roomId) {
	    _classCallCheck(this, Connection);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Connection).call(this));
	
	    _this._isConnected = false;
	    _this._roomId = roomId;
	
	    var endpoint = Connection._getEndpoint(endpoints);
	    var serializer = new _binarySerializer2.default();
	
	    serializer.on('message', function (message) {
	      if (!_this._isConnected && message.type === 'playerio.joinresult') {
	        if (!message.items[0]) {
	          _this._error = new _playerioError2.default(message.items[1], message.items[2]);
	          _this.disconnect();
	        } else {
	          _this._isConnected = true;
	          _this.emit('connect');
	        }
	      } else {
	        _this.emit('message', message);
	      }
	    });
	
	    var sock = _net2.default.connect(endpoint.port, endpoint.address);
	    _this._sock = sock;
	
	    sock.on('connect', function () {
	      console.log('connect');
	      _this._sock.write(new Buffer([0]));
	      var msg = new _message2.default('join', joinKey);
	      if (joinData != null) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Object.entries(joinData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2);
	
	            var key = _step$value[0];
	            var value = _step$value[1];
	
	            msg.add(key, value);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      _this.send(msg);
	    });
	
	    sock.on('data', function (data) {
	      console.log('received data');
	      serializer.addBytes(data);
	    });
	
	    sock.on('close', function () {
	      console.log('close');
	      if (_this._isConnected) {
	        _this._isConnected = false;
	        _this.emit('disconnect');
	      } else {
	        _this._error = _this._error || new _playerioError2.default(_errorCode2.default.unsupportedMethod, 'Error connecting to server.');
	        _this.emit('error');
	      }
	    });
	    return _this;
	  }
	
	  /**
	   * Sends a message to the server.
	   * @param {Message} message The message to send.
	   */
	
	
	  _createClass(Connection, [{
	    key: 'send',
	    value: function send(message) {
	      this._sock.write(_binarySerializer2.default.serializeMessage(message));
	    }
	
	    /**
	     * Disconnects from the game room.
	     */
	
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {
	      this._sock.close();
	    }
	  }]);
	
	  return Connection;
	}(_events.EventEmitter);
	
	exports.default = Connection;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("net");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Represents a message sent between client and server.
	 */
	
	var Message = function () {
	  _createClass(Message, [{
	    key: "type",
	
	    /**
	     * The type of the current message.
	     * @type {string}
	     */
	    get: function get() {
	      return this._type;
	    }
	
	    /**
	     * List of data entries in the message, excluding the type.
	     * @type {...string|...Buffer|...number}
	     */
	
	  }, {
	    key: "items",
	    get: function get() {
	      return this._items;
	    }
	
	    /**
	     * The number of data entries in the message, excluding the type.
	     * @type {number}
	     */
	
	  }, {
	    key: "length",
	    get: function get() {
	      return this.items.length;
	    }
	
	    /**
	     * @private
	     * @param {string} type
	     * @param {...string|...Buffer|...number} items
	     */
	
	  }]);
	
	  function Message(type) {
	    _classCallCheck(this, Message);
	
	    this._type = type;
	
	    for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      items[_key - 1] = arguments[_key];
	    }
	
	    this._items = items;
	  }
	
	  /**
	   * Adds new data entries to the message.
	   * @param {...string|...Buffer|...number} items A variable list of the data to add to the message.
	   */
	
	
	  _createClass(Message, [{
	    key: "add",
	    value: function add() {
	      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        items[_key2] = arguments[_key2];
	      }
	
	      // TODO: Check types
	      this._items.push(items);
	    }
	
	    /**
	     * Returns a string that represents the current object.
	     * @returns {string}
	     */
	
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this._items.toString();
	    }
	  }]);
	
	  return Message;
	}();
	
	exports.default = Message;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Represents Player.IO errors which occur during application execution.
	 */
	
	var PlayerIOError = function () {
	  _createClass(PlayerIOError, [{
	    key: "code",
	
	    /**
	     * The code of the error.
	     * @type {number}
	     */
	    get: function get() {
	      return this._code;
	    }
	
	    /**
	     * The message provided with the error.
	     * @type {string}
	     */
	
	  }, {
	    key: "message",
	    get: function get() {
	      return this._message;
	    }
	
	    /**
	     * @private
	     * @param {number} code
	     * @param {string} message
	     */
	
	  }]);
	
	  function PlayerIOError(code, message) {
	    _classCallCheck(this, PlayerIOError);
	
	    this._code = code;
	    this._message = message;
	  }
	
	  return PlayerIOError;
	}();
	
	exports.default = PlayerIOError;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Represents the type of a PlayerIOError.
	 */
	
	var ErrorCode = function () {
	  function ErrorCode() {
	    _classCallCheck(this, ErrorCode);
	  }
	
	  _createClass(ErrorCode, null, [{
	    key: "unsupportedMethod",
	
	    /**
	     * The method requested is not supported.
	     * @type {number}
	     */
	    get: function get() {
	      return 0;
	    }
	
	    /**
	     * A general error occurred.
	     * @type {number}
	     */
	
	  }, {
	    key: "generalError",
	    get: function get() {
	      return 1;
	    }
	
	    /**
	     * An unexpected error occurred inside the Player.IO web service. Please try again.
	     * @type {number}
	     */
	
	  }, {
	    key: "internalError",
	    get: function get() {
	      return 2;
	    }
	
	    /**
	     * Access is denied.
	     * @type {number}
	     */
	
	  }, {
	    key: "accessDenied",
	    get: function get() {
	      return 3;
	    }
	
	    /**
	     * The message is malformatted.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidMessageFormat",
	    get: function get() {
	      return 4;
	    }
	
	    /**
	     * A value is missing.
	     * @type {number}
	     */
	
	  }, {
	    key: "missingValue",
	    get: function get() {
	      return 5;
	    }
	
	    /**
	     * A game is required to do this action.
	     * @type {number}
	     */
	
	  }, {
	    key: "gameRequired",
	    get: function get() {
	      return 6;
	    }
	
	    /**
	     * An error occurred while contacting an external service.
	     * @type {number}
	     */
	
	  }, {
	    key: "externalError",
	    get: function get() {
	      return 7;
	    }
	
	    /**
	     * The given argument value is outside the range of allowed values.
	     * @type {number}
	     */
	
	  }, {
	    key: "argumentOutOfRange",
	    get: function get() {
	      return 8;
	    }
	
	    /**
	     * The game has been disabled, most likely because of missing payment.
	     * @type {number}
	     */
	
	  }, {
	    key: "gameDisabled",
	    get: function get() {
	      return 9;
	    }
	
	    /**
	     * The game requested is not known by the server.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownGame",
	    get: function get() {
	      return 10;
	    }
	
	    /**
	     * The connection requested is not known by the server.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownConnection",
	    get: function get() {
	      return 11;
	    }
	
	    /**
	     * The auth given is invalid or malformatted.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidAuth",
	    get: function get() {
	      return 12;
	    }
	
	    /**
	     * There is no server in any of the selected server clusters for the game that are eligible to start a new room in (they're all at full capacity or there are no servers in any of the clusters). Either change the selected clusters for your game in the admin panel, try again later or start some more servers for one of your clusters.
	     * @type {number}
	     */
	
	  }, {
	    key: "noServersAvailable",
	    get: function get() {
	      return 13;
	    }
	
	    /**
	     * The room data for the room was over the allowed size limit.
	     * @type {number}
	     */
	
	  }, {
	    key: "roomDataTooLarge",
	    get: function get() {
	      return 14;
	    }
	
	    /**
	     * You are unable to create room because there is already a room with the specified ID.
	     * @type {number}
	     */
	
	  }, {
	    key: "roomAlreadyExists",
	    get: function get() {
	      return 15;
	    }
	
	    /**
	     * The game you're connected to does not have a room type with the specified name.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownRoomType",
	    get: function get() {
	      return 16;
	    }
	
	    /**
	     * There is no room running with that ID.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownRoom",
	    get: function get() {
	      return 17;
	    }
	
	    /**
	     * You can't join the room when the roomId is null or an empty string.
	     * @type {number}
	     */
	
	  }, {
	    key: "missingRoomId",
	    get: function get() {
	      return 18;
	    }
	
	    /**
	     * The room already has the maxmium amount of users in it.
	     * @type {number}
	     */
	
	  }, {
	    key: "roomIsFull",
	    get: function get() {
	      return 19;
	    }
	
	    /**
	     * The key you specified is not set as searchable. You can change the searchable keys in the admin panel for the server type.
	     * @type {number}
	     */
	
	  }, {
	    key: "notASearchColumn",
	    get: function get() {
	      return 20;
	    }
	
	    /**
	     * The QuickConnect method (Simple, Facebook, Kongregate, etc.) is not enabled for the game. You can enable the various methods in the admin panel for the game.
	     * @type {number}
	     */
	
	  }, {
	    key: "quickConnectMethodNotEnabled",
	    get: function get() {
	      return 21;
	    }
	
	    /**
	     * The user is unknown.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownUser",
	    get: function get() {
	      return 22;
	    }
	
	    /**
	     * The password supplied is incorrect.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidPassword",
	    get: function get() {
	      return 23;
	    }
	
	    /**
	     * The supplied registration data is incorrect.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidRegistrationData",
	    get: function get() {
	      return 24;
	    }
	
	    /**
	     * The key given for the BigDB object is not a valid BigDB key. Keys must be between 1 and 50 characters. Only letters, numbers, hyphens, underscores, and spaces are allowed.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidBigDBKey",
	    get: function get() {
	      return 25;
	    }
	
	    /**
	     * The object exceeds the maximum allowed size for BigDB objects.
	     * @type {number}
	     */
	
	  }, {
	    key: "bigDBObjectTooLarge",
	    get: function get() {
	      return 26;
	    }
	
	    /**
	     * Could not locate the database object.
	     * @type {number}
	     */
	
	  }, {
	    key: "bigDBObjectDoesNotExist",
	    get: function get() {
	      return 27;
	    }
	
	    /**
	     * The specified table does not exist.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownTable",
	    get: function get() {
	      return 28;
	    }
	
	    /**
	     * The specified index does not exist.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownIndex",
	    get: function get() {
	      return 29;
	    }
	
	    /**
	     * The value given for the index, does not match the expected type.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidIndexValue",
	    get: function get() {
	      return 30;
	    }
	
	    /**
	     * The operation was aborted because the user attempting the operation was not the original creator of the object accessed.
	     * @type {number}
	     */
	
	  }, {
	    key: "notObjectCreator",
	    get: function get() {
	      return 31;
	    }
	
	    /**
	     * The key is already in use by another database object.
	     * @type {number}
	     */
	
	  }, {
	    key: "keyAlreadyUsed",
	    get: function get() {
	      return 32;
	    }
	
	    /**
	     * BigDB object could not be saved using optimistic locks as it's out of date.
	     * @type {number}
	     */
	
	  }, {
	    key: "staleVersion",
	    get: function get() {
	      return 33;
	    }
	
	    /**
	     * Cannot create circular references inside database objects.
	     * @type {number}
	     */
	
	  }, {
	    key: "circularReference",
	    get: function get() {
	      return 34;
	    }
	
	    /**
	     * The server could not complete the heartbeat.
	     * @type {number}
	     */
	
	  }, {
	    key: "heartbeatFailed",
	    get: function get() {
	      return 40;
	    }
	
	    /**
	     * The game code is invalid.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidGameCode",
	    get: function get() {
	      return 41;
	    }
	
	    /**
	     * Cannot access coins or items before vault has been loaded. Please refresh the vault first.
	     * @type {number}
	     */
	
	  }, {
	    key: "valueNotLoaded",
	    get: function get() {
	      return 50;
	    }
	
	    /**
	     * There is no PayVault provider with the specified ID.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownPayVaultProvider",
	    get: function get() {
	      return 51;
	    }
	
	    /**
	     * The specified PayVault provider does not support direct purchases.
	     * @type {number}
	     */
	
	  }, {
	    key: "directPurchaseNotSupportedByProvider",
	    get: function get() {
	      return 52;
	    }
	
	    /**
	     * The specified PayVault provider does not support buying coins.
	     * @type {number}
	     */
	
	  }, {
	    key: "buyingCoinsNotSupportedByProvider",
	    get: function get() {
	      return 54;
	    }
	
	    /**
	     * The user does not have enough coins in the PayVault to complete the purchase or debit.
	     * @type {number}
	     */
	
	  }, {
	    key: "notEnoughCoins",
	    get: function get() {
	      return 55;
	    }
	
	    /**
	     * The item does not exist in the vault.
	     * @type {number}
	     */
	
	  }, {
	    key: "itemNotInVault",
	    get: function get() {
	      return 56;
	    }
	
	    /**
	     * The chosen provider rejected one or more of the purchase arguments.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidPurchaseArguments",
	    get: function get() {
	      return 57;
	    }
	
	    /**
	     * The chosen provider is not configured correctly in the admin panel.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidPayVaultProviderSetup",
	    get: function get() {
	      return 58;
	    }
	
	    /**
	     * Unable to locate the custom PartnerPay action with the given key.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownPartnerPayAction",
	    get: function get() {
	      return 70;
	    }
	
	    /**
	     * The given type was invalid.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidType",
	    get: function get() {
	      return 80;
	    }
	
	    /**
	     * The index was out of bounds from the range of acceptable values.
	     * @type {number}
	     */
	
	  }, {
	    key: "indexOutOfBounds",
	    get: function get() {
	      return 81;
	    }
	
	    /**
	     * The given identifier does not match the expected format.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidIdentifier",
	    get: function get() {
	      return 82;
	    }
	
	    /**
	     * The given argument did not have the expected value.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidArgument",
	    get: function get() {
	      return 83;
	    }
	
	    /**
	     * This client has been logged out.
	     * @type {number}
	     */
	
	  }, {
	    key: "loggedOut",
	    get: function get() {
	      return 84;
	    }
	
	    /**
	     * The given segment was invalid.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidSegment",
	    get: function get() {
	      return 90;
	    }
	
	    /**
	     * Cannot access requests before refresh() has been called.
	     * @type {number}
	     */
	
	  }, {
	    key: "gameRequestsNotLoaded",
	    get: function get() {
	      return 100;
	    }
	
	    /**
	     * Cannot access achievements before refresh() has been called.
	     * @type {number}
	     */
	
	  }, {
	    key: "achievementsNotLoaded",
	    get: function get() {
	      return 110;
	    }
	
	    /**
	     * Cannot find the achievement with the specified ID.
	     * @type {number}
	     */
	
	  }, {
	    key: "unknownAchievement",
	    get: function get() {
	      return 111;
	    }
	
	    /**
	     * Cannot access notification endpoints before refresh() has been called.
	     * @type {number}
	     */
	
	  }, {
	    key: "notificationsNotLoaded",
	    get: function get() {
	      return 120;
	    }
	
	    /**
	     * The given notifications endpoint is invalid.
	     * @type {number}
	     */
	
	  }, {
	    key: "invalidNotificationsEndpoint",
	    get: function get() {
	      return 121;
	    }
	
	    /**
	     * There is an issue with the network.
	     * @type {number}
	     */
	
	  }, {
	    key: "networkIssue",
	    get: function get() {
	      return 130;
	    }
	
	    /**
	     * Cannot access OneScore before refresh() has been called.
	     * @type {number}
	     */
	
	  }, {
	    key: "oneScoreNotLoaded",
	    get: function get() {
	      return 131;
	    }
	
	    /**
	     * The Yahoo features are only avaliable when authenticated to PlayerIO using Yahoo authentication. Authentication methods are managed in the connections setting of your game in the admin panel on PlayerIO.
	     * @type {number}
	     */
	
	  }, {
	    key: "yahooNotAvailable",
	    get: function get() {
	      return 200;
	    }
	
	    /**
	     * Cannot access profile, friends, ignored before Yahoo has been loaded. Please refresh Yahoo first.
	     * @type {number}
	     */
	
	  }, {
	    key: "yahooNotLoaded",
	    get: function get() {
	      return 201;
	    }
	
	    /**
	     * The dialog was closed by the user.
	     * @type {number}
	     */
	
	  }, {
	    key: "dialogClosed",
	    get: function get() {
	      return 301;
	    }
	
	    /**
	     * Check cookie required.
	     * @type {number}
	     */
	
	  }, {
	    key: "adTrackCheckCookie",
	    get: function get() {
	      return 302;
	    }
	  }]);
	
	  return ErrorCode;
	}();
	
	exports.default = ErrorCode;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _bytebuffer = __webpack_require__(18);
	
	var _bytebuffer2 = _interopRequireDefault(_bytebuffer);
	
	var _events = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var STRING_SHORT_PATTERN = 0xC0;
	var STRING_PATTERN = 0x0C;
	
	var BYTE_ARRAY_SHORT_PATTERN = 0x40;
	var BYTE_ARRAY_PATTERN = 0x10;
	
	var UNSIGNED_LONG_PATTERN = 0x38;
	var LONG_PATTERN = 0x30;
	
	var UNSIGNED_INT_SHORT_PATTERN = 0x80;
	var UNSIGNED_INT_PATTERN = 0x08;
	var INT_PATTERN = 0x04;
	
	var DOUBLE_PATTERN = 0x03;
	var FLOAT_PATTERN = 0x02;
	var BOOLEAN_TRUE_PATTERN = 0x01;
	var BOOLEAN_FALSE_PATTERN = 0x00;
	
	var STATE_INIT = 0;
	var STATE_HEADER = 1;
	var STATE_DATA = 2;
	
	/**
	 * @private
	 */
	
	var BinarySerializer = function (_EventEmitter) {
	  _inherits(BinarySerializer, _EventEmitter);
	
	  _createClass(BinarySerializer, null, [{
	    key: 'serializeMessage',
	    value: function serializeMessage(message) {
	      var buf = new _bytebuffer2.default().append(BinarySerializer._serializeValue(message.length)).append(BinarySerializer._serializeValue(message.type));
	
	      for (var i = 0; i < message.length; i++) {
	        buf.append(BinarySerializer._serializeValue(message.items[i]));
	      }
	
	      return buf.flip().toBuffer();
	    }
	  }, {
	    key: '_serializeValue',
	    value: function _serializeValue(value) {
	      var buf = new _bytebuffer2.default();
	
	      if (typeof value === 'boolean') {
	        buf.writeByte(value ? BOOLEAN_TRUE_PATTERN : BOOLEAN_FALSE_PATTERN);
	      } else if (typeof value === 'string') {
	        BinarySerializer._writeShort(buf, value.length, STRING_SHORT_PATTERN, STRING_PATTERN);
	        buf.writeString(value);
	      } else if (typeof value === 'number') {
	        if (value % 1 || value > 0xFFFFFFFF || value < -0x80000000) {
	          // double
	          buf.writeByte(DOUBLE_PATTERN);
	          buf.writeDouble(value);
	        } else if (value > 0x7FFFFFFF) {
	          // uint
	          buf.writeByte(UNSIGNED_INT_PATTERN);
	          buf.writeUint32(value);
	        } else {
	          // int
	          BinarySerializer._writeShort(buf, value, UNSIGNED_INT_SHORT_PATTERN, INT_PATTERN);
	        }
	      } else if (value instanceof Buffer) {
	        BinarySerializer._writeShort(buf, value.length, BYTE_ARRAY_SHORT_PATTERN, BYTE_ARRAY_PATTERN);
	        buf.append(buf);
	      }
	
	      return buf.flip();
	    }
	  }, {
	    key: '_readLength',
	    value: function _readLength(b, pattern) {
	      return (b & ~pattern) + 1;
	    }
	  }, {
	    key: '_hasFlag',
	    value: function _hasFlag(b, pattern) {
	      return (b & pattern) === pattern;
	    }
	  }, {
	    key: '_writeShort',
	    value: function _writeShort(buf, length, topPattern, bottomPattern) {
	      if (length > 63 || length < 0) {
	        BinarySerializer._writeInt32(buf, bottomPattern, length);
	      } else {
	        buf.writeByte(topPattern | length);
	      }
	    }
	  }, {
	    key: '_writeInt32',
	    value: function _writeInt32(buf, pattern, value) {
	      var tempBuf = new _bytebuffer2.default().writeInt32(value).flip();
	
	      while (tempBuf.readUint8(tempBuf.offset) === 0) {
	        tempBuf.offset++;
	      }
	
	      buf.writeByte(pattern | tempBuf.remaining() - 1);
	      buf.append(tempBuf);
	    }
	  }, {
	    key: '_readInt32',
	    value: function _readInt32(buf) {
	      var res = 0;
	      while (buf.offset < buf.limit) {
	        res <<= 8;
	        res += buf.readUint8();
	      }
	      return res;
	    }
	  }]);
	
	  function BinarySerializer() {
	    _classCallCheck(this, BinarySerializer);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BinarySerializer).call(this));
	
	    _this.state = STATE_INIT;
	    _this.valueType = 0;
	    _this.partLength = 0;
	    _this.count = -1;
	    _this.currentMessage = null;
	    _this.buffer = new _bytebuffer2.default();
	    return _this;
	  }
	
	  _createClass(BinarySerializer, [{
	    key: 'addBytes',
	    value: function addBytes(bytes) {
	      for (var i = 0; i < bytes.length; i++) {
	        this.addByte(bytes[i]);
	      }
	    }
	  }, {
	    key: 'addByte',
	    value: function addByte(b) {
	      if (this.state === STATE_INIT) {
	        if (BinarySerializer._hasFlag(b, STRING_SHORT_PATTERN)) {
	          this.valueType = STRING_SHORT_PATTERN;
	          this.partLength = b & ~STRING_SHORT_PATTERN;
	          if (this.partLength > 0) {
	            this.state = STATE_DATA;
	          } else {
	            this.onValue('');
	          }
	        } else if (BinarySerializer._hasFlag(b, BYTE_ARRAY_SHORT_PATTERN)) {
	          this.valueType = BYTE_ARRAY_SHORT_PATTERN;
	          this.partLength = b & ~STRING_SHORT_PATTERN;
	          if (this.partLength > 0) {
	            this.state = STATE_DATA;
	          } else {
	            this.onValue(new Buffer());
	          }
	        } else if (BinarySerializer._hasFlag(b, UNSIGNED_INT_SHORT_PATTERN)) {
	          this.onValue(b & ~UNSIGNED_INT_SHORT_PATTERN);
	        } else if (BinarySerializer._hasFlag(b, UNSIGNED_LONG_PATTERN)) {
	          // TODO: Implement support for longs
	          return 0;
	        } else if (BinarySerializer._hasFlag(b, LONG_PATTERN)) {
	          // TODO: Implement support for longs
	          return 0;
	        } else if (BinarySerializer._hasFlag(b, BYTE_ARRAY_PATTERN)) {
	          this.valueType = BYTE_ARRAY_PATTERN;
	          this.partLength = BinarySerializer._readLength(b, BYTE_ARRAY_PATTERN);
	          this.state = STATE_HEADER;
	        } else if (BinarySerializer._hasFlag(b, UNSIGNED_INT_PATTERN)) {
	          this.valueType = UNSIGNED_INT_PATTERN;
	          this.partLength = BinarySerializer._readLength(b, UNSIGNED_INT_PATTERN);
	          this.state = STATE_DATA;
	        } else if (BinarySerializer._hasFlag(b, INT_PATTERN)) {
	          this.valueType = INT_PATTERN;
	          this.partLength = BinarySerializer._readLength(b, INT_PATTERN);
	          this.state = STATE_DATA;
	        } else if (BinarySerializer._hasFlag(b, DOUBLE_PATTERN)) {
	          this.valueType = DOUBLE_PATTERN;
	          this.partLength = 8;
	          this.state = STATE_DATA;
	        } else if (BinarySerializer._hasFlag(b, FLOAT_PATTERN)) {
	          this.valueType = FLOAT_PATTERN;
	          this.partLength = 4;
	          this.state = STATE_DATA;
	        } else if (BinarySerializer._hasFlag(b, BOOLEAN_TRUE_PATTERN)) {
	          this.onValue(true);
	        } else if (BinarySerializer._hasFlag(b, BOOLEAN_FALSE_PATTERN)) {
	          this.onValue(false);
	        }
	      } else {
	        var buf = this.buffer;
	        var valueType = this.valueType;
	
	        buf.writeByte(b);
	
	        if (buf.offset === this.partLength) {
	          buf.flip();
	
	          if (this.state === STATE_HEADER) {
	            this.partLength = BinarySerializer._readInt32(buf);
	            this.state = STATE_DATA;
	          } else if (this.state === STATE_DATA) {
	            if (valueType === STRING_PATTERN || valueType === STRING_SHORT_PATTERN) {
	              this.onValue(buf.toUTF8());
	            } else if (valueType === BYTE_ARRAY_PATTERN || valueType === BYTE_ARRAY_SHORT_PATTERN) {
	              this.onValue(buf.toBuffer(true));
	            } else if (valueType === UNSIGNED_INT_PATTERN) {
	              this.onValue(BinarySerializer._readInt32(buf));
	            } else if (valueType === INT_PATTERN) {
	              if (buf.limit === 4) {
	                this.onValue(buf.readInt32());
	              } else {
	                this.onValue(BinarySerializer._readInt32(buf));
	              }
	            } else if (valueType === DOUBLE_PATTERN) {
	              this.onValue(buf.readDouble());
	            } else if (valueType === FLOAT_PATTERN) {
	              this.onValue(buf.readFloat());
	            }
	          }
	
	          buf.reset();
	        }
	      }
	    }
	  }, {
	    key: 'onValue',
	    value: function onValue(value) {
	      var count = this.count;
	
	      if (count === -1) {
	        this.count = value;
	      } else {
	        if (!this.currentMessage) {
	          this.currentMessage = new Message(value);
	        } else {
	          this.currentMessage.add(value);
	        }
	
	        var currentMessage = this.currentMessage;
	        if (currentMessage.length === count) {
	          this.emit('message', currentMessage);
	
	          this.count = -1;
	          this.currentMessage = null;
	        }
	      }
	
	      this.state = STATE_INIT;
	    }
	  }]);
	
	  return BinarySerializer;
	}(_events.EventEmitter);
	
	exports.default = BinarySerializer;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("bytebuffer");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var multiplayer = __webpack_require__(9);
	
	module.exports = function Client(token) {
	  multiplayer._token = token;
	  return {
	    _token: token,
	    multiplayer: multiplayer
	  };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map