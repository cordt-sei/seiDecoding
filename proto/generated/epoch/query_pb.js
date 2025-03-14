// source: epoch/query.proto
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
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_base_query_v1beta1_pagination_pb = require('../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var epoch_params_pb = require('../epoch/params_pb.js');
goog.object.extend(proto, epoch_params_pb);
var epoch_epoch_pb = require('../epoch/epoch_pb.js');
goog.object.extend(proto, epoch_epoch_pb);
goog.exportSymbol('proto.seiprotocol.seichain.epoch.QueryEpochRequest', null, global);
goog.exportSymbol('proto.seiprotocol.seichain.epoch.QueryEpochResponse', null, global);
goog.exportSymbol('proto.seiprotocol.seichain.epoch.QueryParamsRequest', null, global);
goog.exportSymbol('proto.seiprotocol.seichain.epoch.QueryParamsResponse', null, global);
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
proto.seiprotocol.seichain.epoch.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.epoch.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.epoch.QueryParamsRequest.displayName = 'proto.seiprotocol.seichain.epoch.QueryParamsRequest';
}
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
proto.seiprotocol.seichain.epoch.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.epoch.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.epoch.QueryParamsResponse.displayName = 'proto.seiprotocol.seichain.epoch.QueryParamsResponse';
}
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
proto.seiprotocol.seichain.epoch.QueryEpochRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.epoch.QueryEpochRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.epoch.QueryEpochRequest.displayName = 'proto.seiprotocol.seichain.epoch.QueryEpochRequest';
}
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
proto.seiprotocol.seichain.epoch.QueryEpochResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.epoch.QueryEpochResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.epoch.QueryEpochResponse.displayName = 'proto.seiprotocol.seichain.epoch.QueryEpochResponse';
}



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
proto.seiprotocol.seichain.epoch.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.epoch.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsRequest}
 */
proto.seiprotocol.seichain.epoch.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.epoch.QueryParamsRequest;
  return proto.seiprotocol.seichain.epoch.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsRequest}
 */
proto.seiprotocol.seichain.epoch.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.seiprotocol.seichain.epoch.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.epoch.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





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
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.epoch.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && epoch_params_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsResponse}
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.epoch.QueryParamsResponse;
  return proto.seiprotocol.seichain.epoch.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsResponse}
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new epoch_params_pb.Params;
      reader.readMessage(value,epoch_params_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.epoch.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.epoch.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      epoch_params_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.seiprotocol.seichain.epoch.Params}
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.seiprotocol.seichain.epoch.Params} */ (
    jspb.Message.getWrapperField(this, epoch_params_pb.Params, 1));
};


/**
 * @param {?proto.seiprotocol.seichain.epoch.Params|undefined} value
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsResponse} returns this
*/
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.seiprotocol.seichain.epoch.QueryParamsResponse} returns this
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.seiprotocol.seichain.epoch.QueryParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};





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
proto.seiprotocol.seichain.epoch.QueryEpochRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.epoch.QueryEpochRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryEpochRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochRequest}
 */
proto.seiprotocol.seichain.epoch.QueryEpochRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.epoch.QueryEpochRequest;
  return proto.seiprotocol.seichain.epoch.QueryEpochRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochRequest}
 */
proto.seiprotocol.seichain.epoch.QueryEpochRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.seiprotocol.seichain.epoch.QueryEpochRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.epoch.QueryEpochRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryEpochRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





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
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.epoch.QueryEpochResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epoch: (f = msg.getEpoch()) && epoch_epoch_pb.Epoch.toObject(includeInstance, f)
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
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochResponse}
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.epoch.QueryEpochResponse;
  return proto.seiprotocol.seichain.epoch.QueryEpochResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochResponse}
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new epoch_epoch_pb.Epoch;
      reader.readMessage(value,epoch_epoch_pb.Epoch.deserializeBinaryFromReader);
      msg.setEpoch(value);
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
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.epoch.QueryEpochResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.epoch.QueryEpochResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpoch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      epoch_epoch_pb.Epoch.serializeBinaryToWriter
    );
  }
};


/**
 * optional Epoch epoch = 1;
 * @return {?proto.seiprotocol.seichain.epoch.Epoch}
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.getEpoch = function() {
  return /** @type{?proto.seiprotocol.seichain.epoch.Epoch} */ (
    jspb.Message.getWrapperField(this, epoch_epoch_pb.Epoch, 1));
};


/**
 * @param {?proto.seiprotocol.seichain.epoch.Epoch|undefined} value
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochResponse} returns this
*/
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.setEpoch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.seiprotocol.seichain.epoch.QueryEpochResponse} returns this
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.clearEpoch = function() {
  return this.setEpoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.seiprotocol.seichain.epoch.QueryEpochResponse.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.seiprotocol.seichain.epoch);
