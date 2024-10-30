// source: oracle/genesis.proto
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
var oracle_oracle_pb = require('../oracle/oracle_pb.js');
goog.object.extend(proto, oracle_oracle_pb);
var cosmos_base_v1beta1_coin_pb = require('../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
goog.exportSymbol('proto.seiprotocol.seichain.oracle.FeederDelegation', null, global);
goog.exportSymbol('proto.seiprotocol.seichain.oracle.GenesisState', null, global);
goog.exportSymbol('proto.seiprotocol.seichain.oracle.PenaltyCounter', null, global);
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
proto.seiprotocol.seichain.oracle.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.seiprotocol.seichain.oracle.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.seiprotocol.seichain.oracle.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.oracle.GenesisState.displayName = 'proto.seiprotocol.seichain.oracle.GenesisState';
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
proto.seiprotocol.seichain.oracle.FeederDelegation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.oracle.FeederDelegation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.oracle.FeederDelegation.displayName = 'proto.seiprotocol.seichain.oracle.FeederDelegation';
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
proto.seiprotocol.seichain.oracle.PenaltyCounter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.seiprotocol.seichain.oracle.PenaltyCounter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.seiprotocol.seichain.oracle.PenaltyCounter.displayName = 'proto.seiprotocol.seichain.oracle.PenaltyCounter';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.seiprotocol.seichain.oracle.GenesisState.repeatedFields_ = [2,3,4,6,7];



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
proto.seiprotocol.seichain.oracle.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.oracle.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.oracle.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && oracle_oracle_pb.Params.toObject(includeInstance, f),
    feederDelegationsList: jspb.Message.toObjectList(msg.getFeederDelegationsList(),
    proto.seiprotocol.seichain.oracle.FeederDelegation.toObject, includeInstance),
    exchangeRatesList: jspb.Message.toObjectList(msg.getExchangeRatesList(),
    oracle_oracle_pb.ExchangeRateTuple.toObject, includeInstance),
    penaltyCountersList: jspb.Message.toObjectList(msg.getPenaltyCountersList(),
    proto.seiprotocol.seichain.oracle.PenaltyCounter.toObject, includeInstance),
    aggregateExchangeRateVotesList: jspb.Message.toObjectList(msg.getAggregateExchangeRateVotesList(),
    oracle_oracle_pb.AggregateExchangeRateVote.toObject, includeInstance),
    priceSnapshotsList: jspb.Message.toObjectList(msg.getPriceSnapshotsList(),
    oracle_oracle_pb.PriceSnapshot.toObject, includeInstance)
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
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState}
 */
proto.seiprotocol.seichain.oracle.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.oracle.GenesisState;
  return proto.seiprotocol.seichain.oracle.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.oracle.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState}
 */
proto.seiprotocol.seichain.oracle.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new oracle_oracle_pb.Params;
      reader.readMessage(value,oracle_oracle_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.seiprotocol.seichain.oracle.FeederDelegation;
      reader.readMessage(value,proto.seiprotocol.seichain.oracle.FeederDelegation.deserializeBinaryFromReader);
      msg.addFeederDelegations(value);
      break;
    case 3:
      var value = new oracle_oracle_pb.ExchangeRateTuple;
      reader.readMessage(value,oracle_oracle_pb.ExchangeRateTuple.deserializeBinaryFromReader);
      msg.addExchangeRates(value);
      break;
    case 4:
      var value = new proto.seiprotocol.seichain.oracle.PenaltyCounter;
      reader.readMessage(value,proto.seiprotocol.seichain.oracle.PenaltyCounter.deserializeBinaryFromReader);
      msg.addPenaltyCounters(value);
      break;
    case 6:
      var value = new oracle_oracle_pb.AggregateExchangeRateVote;
      reader.readMessage(value,oracle_oracle_pb.AggregateExchangeRateVote.deserializeBinaryFromReader);
      msg.addAggregateExchangeRateVotes(value);
      break;
    case 7:
      var value = new oracle_oracle_pb.PriceSnapshot;
      reader.readMessage(value,oracle_oracle_pb.PriceSnapshot.deserializeBinaryFromReader);
      msg.addPriceSnapshots(value);
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
proto.seiprotocol.seichain.oracle.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.oracle.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.oracle.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      oracle_oracle_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getFeederDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.seiprotocol.seichain.oracle.FeederDelegation.serializeBinaryToWriter
    );
  }
  f = message.getExchangeRatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      oracle_oracle_pb.ExchangeRateTuple.serializeBinaryToWriter
    );
  }
  f = message.getPenaltyCountersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.seiprotocol.seichain.oracle.PenaltyCounter.serializeBinaryToWriter
    );
  }
  f = message.getAggregateExchangeRateVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      oracle_oracle_pb.AggregateExchangeRateVote.serializeBinaryToWriter
    );
  }
  f = message.getPriceSnapshotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      oracle_oracle_pb.PriceSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.seiprotocol.seichain.oracle.Params}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.seiprotocol.seichain.oracle.Params} */ (
    jspb.Message.getWrapperField(this, oracle_oracle_pb.Params, 1));
};


/**
 * @param {?proto.seiprotocol.seichain.oracle.Params|undefined} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FeederDelegation feeder_delegations = 2;
 * @return {!Array<!proto.seiprotocol.seichain.oracle.FeederDelegation>}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getFeederDelegationsList = function() {
  return /** @type{!Array<!proto.seiprotocol.seichain.oracle.FeederDelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.seiprotocol.seichain.oracle.FeederDelegation, 2));
};


/**
 * @param {!Array<!proto.seiprotocol.seichain.oracle.FeederDelegation>} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setFeederDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.seiprotocol.seichain.oracle.FeederDelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.oracle.FeederDelegation}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.addFeederDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.seiprotocol.seichain.oracle.FeederDelegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearFeederDelegationsList = function() {
  return this.setFeederDelegationsList([]);
};


/**
 * repeated ExchangeRateTuple exchange_rates = 3;
 * @return {!Array<!proto.seiprotocol.seichain.oracle.ExchangeRateTuple>}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getExchangeRatesList = function() {
  return /** @type{!Array<!proto.seiprotocol.seichain.oracle.ExchangeRateTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, oracle_oracle_pb.ExchangeRateTuple, 3));
};


/**
 * @param {!Array<!proto.seiprotocol.seichain.oracle.ExchangeRateTuple>} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setExchangeRatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.seiprotocol.seichain.oracle.ExchangeRateTuple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.oracle.ExchangeRateTuple}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.addExchangeRates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.seiprotocol.seichain.oracle.ExchangeRateTuple, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearExchangeRatesList = function() {
  return this.setExchangeRatesList([]);
};


/**
 * repeated PenaltyCounter penalty_counters = 4;
 * @return {!Array<!proto.seiprotocol.seichain.oracle.PenaltyCounter>}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getPenaltyCountersList = function() {
  return /** @type{!Array<!proto.seiprotocol.seichain.oracle.PenaltyCounter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.seiprotocol.seichain.oracle.PenaltyCounter, 4));
};


/**
 * @param {!Array<!proto.seiprotocol.seichain.oracle.PenaltyCounter>} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setPenaltyCountersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.seiprotocol.seichain.oracle.PenaltyCounter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.addPenaltyCounters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.seiprotocol.seichain.oracle.PenaltyCounter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearPenaltyCountersList = function() {
  return this.setPenaltyCountersList([]);
};


/**
 * repeated AggregateExchangeRateVote aggregate_exchange_rate_votes = 6;
 * @return {!Array<!proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote>}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getAggregateExchangeRateVotesList = function() {
  return /** @type{!Array<!proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote>} */ (
    jspb.Message.getRepeatedWrapperField(this, oracle_oracle_pb.AggregateExchangeRateVote, 6));
};


/**
 * @param {!Array<!proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote>} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setAggregateExchangeRateVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.addAggregateExchangeRateVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.seiprotocol.seichain.oracle.AggregateExchangeRateVote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearAggregateExchangeRateVotesList = function() {
  return this.setAggregateExchangeRateVotesList([]);
};


/**
 * repeated PriceSnapshot price_snapshots = 7;
 * @return {!Array<!proto.seiprotocol.seichain.oracle.PriceSnapshot>}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.getPriceSnapshotsList = function() {
  return /** @type{!Array<!proto.seiprotocol.seichain.oracle.PriceSnapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, oracle_oracle_pb.PriceSnapshot, 7));
};


/**
 * @param {!Array<!proto.seiprotocol.seichain.oracle.PriceSnapshot>} value
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
*/
proto.seiprotocol.seichain.oracle.GenesisState.prototype.setPriceSnapshotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.seiprotocol.seichain.oracle.PriceSnapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.seiprotocol.seichain.oracle.PriceSnapshot}
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.addPriceSnapshots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.seiprotocol.seichain.oracle.PriceSnapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.seiprotocol.seichain.oracle.GenesisState} returns this
 */
proto.seiprotocol.seichain.oracle.GenesisState.prototype.clearPriceSnapshotsList = function() {
  return this.setPriceSnapshotsList([]);
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
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.oracle.FeederDelegation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.oracle.FeederDelegation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.toObject = function(includeInstance, msg) {
  var f, obj = {
    feederAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.seiprotocol.seichain.oracle.FeederDelegation}
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.oracle.FeederDelegation;
  return proto.seiprotocol.seichain.oracle.FeederDelegation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.oracle.FeederDelegation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.oracle.FeederDelegation}
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeederAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
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
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.oracle.FeederDelegation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.oracle.FeederDelegation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeederAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string feeder_address = 1;
 * @return {string}
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.getFeederAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.oracle.FeederDelegation} returns this
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.setFeederAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validator_address = 2;
 * @return {string}
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.oracle.FeederDelegation} returns this
 */
proto.seiprotocol.seichain.oracle.FeederDelegation.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.toObject = function(opt_includeInstance) {
  return proto.seiprotocol.seichain.oracle.PenaltyCounter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.seiprotocol.seichain.oracle.PenaltyCounter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    votePenaltyCounter: (f = msg.getVotePenaltyCounter()) && oracle_oracle_pb.VotePenaltyCounter.toObject(includeInstance, f)
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
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter}
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.seiprotocol.seichain.oracle.PenaltyCounter;
  return proto.seiprotocol.seichain.oracle.PenaltyCounter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.seiprotocol.seichain.oracle.PenaltyCounter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter}
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = new oracle_oracle_pb.VotePenaltyCounter;
      reader.readMessage(value,oracle_oracle_pb.VotePenaltyCounter.deserializeBinaryFromReader);
      msg.setVotePenaltyCounter(value);
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
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.seiprotocol.seichain.oracle.PenaltyCounter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.seiprotocol.seichain.oracle.PenaltyCounter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVotePenaltyCounter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      oracle_oracle_pb.VotePenaltyCounter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string validator_address = 1;
 * @return {string}
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter} returns this
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional VotePenaltyCounter vote_penalty_counter = 2;
 * @return {?proto.seiprotocol.seichain.oracle.VotePenaltyCounter}
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.getVotePenaltyCounter = function() {
  return /** @type{?proto.seiprotocol.seichain.oracle.VotePenaltyCounter} */ (
    jspb.Message.getWrapperField(this, oracle_oracle_pb.VotePenaltyCounter, 2));
};


/**
 * @param {?proto.seiprotocol.seichain.oracle.VotePenaltyCounter|undefined} value
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter} returns this
*/
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.setVotePenaltyCounter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.seiprotocol.seichain.oracle.PenaltyCounter} returns this
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.clearVotePenaltyCounter = function() {
  return this.setVotePenaltyCounter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.seiprotocol.seichain.oracle.PenaltyCounter.prototype.hasVotePenaltyCounter = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.seiprotocol.seichain.oracle);