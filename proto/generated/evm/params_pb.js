// source: evm/params.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var evm_config_pb = require('../evm/config_pb.js');
goog.object.extend(proto, evm_config_pb);
goog.exportSymbol('proto.seiprotocol.seichain.evm.Params', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.seiprotocol.seichain.evm.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.seiprotocol.seichain.evm.Params.repeatedFields_, null);
};
goog.inherits(proto.seiprotocol.seichain.evm.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.evm.Params.displayName = 'proto.seiprotocol.seichain.evm.Params';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.seiprotocol.seichain.evm.Params.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.seiprotocol.seichain.evm.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.evm.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.evm.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.evm.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    priorityNormalizer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    baseFeePerGas: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minimumFeePerGas: jspb.Message.getFieldWithDefault(msg, 4, ""),
    whitelistedCwCodeHashesForDelegateCallList: msg.getWhitelistedCwCodeHashesForDelegateCallList_asB64(),
    deliverTxHookWasmGasLimit: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.seiprotocol.seichain.evm.Params}
 */
proto.seiprotocol.seichain.evm.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.evm.Params;
  return proto.seiprotocol.seichain.evm.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.evm.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.evm.Params}
 */
proto.seiprotocol.seichain.evm.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriorityNormalizer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFeePerGas(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinimumFeePerGas(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addWhitelistedCwCodeHashesForDelegateCall(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeliverTxHookWasmGasLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.seiprotocol.seichain.evm.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.evm.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.evm.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.evm.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriorityNormalizer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBaseFeePerGas();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinimumFeePerGas();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWhitelistedCwCodeHashesForDelegateCallList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      8,
      f
    );
  }
  f = message.getDeliverTxHookWasmGasLimit();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional string priority_normalizer = 2;
 * @return {string}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getPriorityNormalizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.setPriorityNormalizer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string base_fee_per_gas = 3;
 * @return {string}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getBaseFeePerGas = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.setBaseFeePerGas = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string minimum_fee_per_gas = 4;
 * @return {string}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getMinimumFeePerGas = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.setMinimumFeePerGas = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated bytes whitelisted_cw_code_hashes_for_delegate_call = 8;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getWhitelistedCwCodeHashesForDelegateCallList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * repeated bytes whitelisted_cw_code_hashes_for_delegate_call = 8;
 * This is a type-conversion wrapper around `getWhitelistedCwCodeHashesForDelegateCallList()`
 * @return {!Array<string>}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getWhitelistedCwCodeHashesForDelegateCallList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getWhitelistedCwCodeHashesForDelegateCallList()));
};


/**
 * repeated bytes whitelisted_cw_code_hashes_for_delegate_call = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWhitelistedCwCodeHashesForDelegateCallList()`
 * @return {!Array<!Uint8Array>}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getWhitelistedCwCodeHashesForDelegateCallList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getWhitelistedCwCodeHashesForDelegateCallList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.setWhitelistedCwCodeHashesForDelegateCallList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.addWhitelistedCwCodeHashesForDelegateCall = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.clearWhitelistedCwCodeHashesForDelegateCallList = function() {
  return this.setWhitelistedCwCodeHashesForDelegateCallList([]);
};


/**
 * optional uint64 deliver_tx_hook_wasm_gas_limit = 9;
 * @return {number}
 */
proto.seiprotocol.seichain.evm.Params.prototype.getDeliverTxHookWasmGasLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.seiprotocol.seichain.evm.Params} returns this
 */
proto.seiprotocol.seichain.evm.Params.prototype.setDeliverTxHookWasmGasLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


goog.object.extend(exports, proto.seiprotocol.seichain.evm);