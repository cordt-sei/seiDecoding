// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mint_v1beta1_query_pb = require('../../mint/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var mint_v1beta1_mint_pb = require('../../mint/v1beta1/mint_pb.js');

function serialize_seiprotocol_seichain_mint_QueryMinterRequest(arg) {
  if (!(arg instanceof mint_v1beta1_query_pb.QueryMinterRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.mint.QueryMinterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_mint_QueryMinterRequest(buffer_arg) {
  return mint_v1beta1_query_pb.QueryMinterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_mint_QueryMinterResponse(arg) {
  if (!(arg instanceof mint_v1beta1_query_pb.QueryMinterResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.mint.QueryMinterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_mint_QueryMinterResponse(buffer_arg) {
  return mint_v1beta1_query_pb.QueryMinterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_mint_QueryParamsRequest(arg) {
  if (!(arg instanceof mint_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.mint.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_mint_QueryParamsRequest(buffer_arg) {
  return mint_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_mint_QueryParamsResponse(arg) {
  if (!(arg instanceof mint_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.mint.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_mint_QueryParamsResponse(buffer_arg) {
  return mint_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query provides defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Params returns the total set of minting parameters.
params: {
    path: '/seiprotocol.seichain.mint.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: mint_v1beta1_query_pb.QueryParamsRequest,
    responseType: mint_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_seiprotocol_seichain_mint_QueryParamsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_mint_QueryParamsRequest,
    responseSerialize: serialize_seiprotocol_seichain_mint_QueryParamsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_mint_QueryParamsResponse,
  },
  // EpochProvisions current minting epoch provisions value.
minter: {
    path: '/seiprotocol.seichain.mint.Query/Minter',
    requestStream: false,
    responseStream: false,
    requestType: mint_v1beta1_query_pb.QueryMinterRequest,
    responseType: mint_v1beta1_query_pb.QueryMinterResponse,
    requestSerialize: serialize_seiprotocol_seichain_mint_QueryMinterRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_mint_QueryMinterRequest,
    responseSerialize: serialize_seiprotocol_seichain_mint_QueryMinterResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_mint_QueryMinterResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
