// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var oracle_tx_pb = require('../oracle/tx_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');

function serialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVote(arg) {
  if (!(arg instanceof oracle_tx_pb.MsgAggregateExchangeRateVote)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVote(buffer_arg) {
  return oracle_tx_pb.MsgAggregateExchangeRateVote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVoteResponse(arg) {
  if (!(arg instanceof oracle_tx_pb.MsgAggregateExchangeRateVoteResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVoteResponse(buffer_arg) {
  return oracle_tx_pb.MsgAggregateExchangeRateVoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsent(arg) {
  if (!(arg instanceof oracle_tx_pb.MsgDelegateFeedConsent)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.MsgDelegateFeedConsent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsent(buffer_arg) {
  return oracle_tx_pb.MsgDelegateFeedConsent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsentResponse(arg) {
  if (!(arg instanceof oracle_tx_pb.MsgDelegateFeedConsentResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsentResponse(buffer_arg) {
  return oracle_tx_pb.MsgDelegateFeedConsentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the oracle Msg service.
var MsgService = exports.MsgService = {
  // AggregateExchangeRateVote defines a method for submitting
// aggregate exchange rate vote
aggregateExchangeRateVote: {
    path: '/seiprotocol.seichain.oracle.Msg/AggregateExchangeRateVote',
    requestStream: false,
    responseStream: false,
    requestType: oracle_tx_pb.MsgAggregateExchangeRateVote,
    responseType: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVote,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVote,
    responseSerialize: serialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVoteResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_MsgAggregateExchangeRateVoteResponse,
  },
  // DelegateFeedConsent defines a method for setting the feeder delegation
delegateFeedConsent: {
    path: '/seiprotocol.seichain.oracle.Msg/DelegateFeedConsent',
    requestStream: false,
    responseStream: false,
    requestType: oracle_tx_pb.MsgDelegateFeedConsent,
    responseType: oracle_tx_pb.MsgDelegateFeedConsentResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsent,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsent,
    responseSerialize: serialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsentResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_MsgDelegateFeedConsentResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
