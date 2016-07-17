
import net from 'net';
import { EventEmitter } from 'events';
import Message from '../message';
import PlayerIOError from '../playerio-error';
import ErrorCode from '../error-code';
import BinarySerializer from '../binary-serializer';

/**
 * A connection to a running Player.IO multiplayer room.
 */
export default class Connection extends EventEmitter {
  static _getEndpoint(endpoints) {
    return endpoints[0];
  }

  /**
   * Determines whether the connection is currently connected to a remote host.
   * @type {boolean}
   */
  get isConnected() {
    return this._isConnected;
  }

  /**
   * Represents the ID of the current room.
   * @type {string}
   */
  get roomId() {
    return this._roomId;
  }

  /**
   * The current error, if there is any.
   * @private
   * @type {?PlayerIOError}
   */
  get error() {
    return this._error;
  }

  /**
   * @private
   * @param {ServerEndpoint[]} endpoints
   * @param {string} joinKey
   * @param {?Map<string, string>} joinData
   * @param {string} roomId
   */
  constructor(endpoints, joinKey, joinData, roomId) {
    super();

    this._isConnected = false;
    this._roomId = roomId;

    let endpoint = Connection._getEndpoint(endpoints);
    let serializer = new BinarySerializer();

    serializer.on('message', (message) => {
      if (!this._isConnected && message.type === 'playerio.joinresult') {
        if (!message.items[0]) {
          this._error = new PlayerIOError(message.items[1], message.items[2]);
          this.disconnect();
        } else {
          this._isConnected = true;
          this.emit('connect');
        }

      } else {
        this.emit('message', message);
      }
    });

    let sock = net.connect(endpoint.port, endpoint.address);
    this._sock = sock;

    sock.on('connect', () => {
      this._sock.write(new Buffer([0]));
      let msg = new Message('join', joinKey);
      if (joinData != null) {
        for (let [key, value] of joinData) {
          msg.add(key, value);
        }
      }
      this.send(msg);
    });

    sock.on('data', (data) => {
      serializer.addBytes(data);
    });

    sock.on('close', () => {
      if (this._isConnected) {
        this._isConnected = false;
        this.emit('disconnect');
      } else {
        this._error = this._error || new PlayerIOError(ErrorCode.unsupportedMethod, 'Error connecting to server.');
        this.emit('error');
      }
    });
  }

  /**
   * Sends a message to the server.
   * @param {Message} message The message to send.
   */
  send(message) {
    this._sock.write(BinarySerializer.serializeMessage(message));
  }

  /**
   * Disconnects from the game room.
   */
  disconnect() {
    this._sock.close();
  }
}
