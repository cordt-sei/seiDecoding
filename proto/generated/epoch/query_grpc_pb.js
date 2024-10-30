// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var epoch_query_pb = require('../epoch/query_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../cosmos/base/query/v1beta1/pagination_pb.js');
var epoch_params_pb = require('../epoch/params_pb.js');
var epoch_epoch_pb = require('../epoch/epoch_pb.js');

function serialize_seiprotocol_seichain_epoch_QueryEpochRequest(arg) {
  if (!(arg instanceof epoch_query_pb.QueryEpochRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.epoch.QueryEpochRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_epoch_QueryEpochRequest(buffer_arg) {
  return epoch_query_pb.QueryEpochRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_epoch_QueryEpochResponse(arg) {
  if (!(arg instanceof epoch_query_pb.QueryEpochResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.epoch.QueryEpochResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_epoch_QueryEpochResponse(buffer_arg) {
  return epoch_query_pb.QueryEpochResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_epoch_QueryParamsRequest(arg) {
  if (!(arg instanceof epoch_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.epoch.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_epoch_QueryParamsRequest(buffer_arg) {
  return epoch_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_epoch_QueryParamsResponse(arg) {
  if (!(arg instanceof epoch_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.epoch.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_epoch_QueryParamsResponse(buffer_arg) {
  return epoch_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Query the epoch in the chain
epoch: {
    path: '/seiprotocol.seichain.epoch.Query/Epoch',
    requestStream: false,
    responseStream: false,
    requestType: epoch_query_pb.QueryEpochRequest,
    responseType: epoch_query_pb.QueryEpochResponse,
    requestSerialize: serialize_seiprotocol_seichain_epoch_QueryEpochRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_epoch_QueryEpochRequest,
    responseSerialize: serialize_seiprotocol_seichain_epoch_QueryEpochResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_epoch_QueryEpochResponse,
  },
  // Parameters queries the parameters of the module.
params: {
    path: '/seiprotocol.seichain.epoch.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: epoch_query_pb.QueryParamsRequest,
    responseType: epoch_query_pb.QueryParamsResponse,
    requestSerialize: serialize_seiprotocol_seichain_epoch_QueryParamsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_epoch_QueryParamsRequest,
    responseSerialize: serialize_seiprotocol_seichain_epoch_QueryParamsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_epoch_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
