// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tokenfactory_query_pb = require('../tokenfactory/query_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var cosmos_bank_v1beta1_bank_pb = require('../cosmos/bank/v1beta1/bank_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../cosmos/base/query/v1beta1/pagination_pb.js');
var tokenfactory_authorityMetadata_pb = require('../tokenfactory/authorityMetadata_pb.js');
var tokenfactory_params_pb = require('../tokenfactory/params_pb.js');

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListRequest(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomAllowListRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomAllowListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListRequest(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomAllowListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListResponse(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomAllowListResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomAllowListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListResponse(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomAllowListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataRequest(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataRequest(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataResponse(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataResponse(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataRequest(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomMetadataRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataRequest(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataResponse(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomMetadataResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataResponse(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorRequest(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomsFromCreatorRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorRequest(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomsFromCreatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorResponse(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryDenomsFromCreatorResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorResponse(buffer_arg) {
  return tokenfactory_query_pb.QueryDenomsFromCreatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryParamsRequest(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryParamsRequest(buffer_arg) {
  return tokenfactory_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_QueryParamsResponse(arg) {
  if (!(arg instanceof tokenfactory_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_QueryParamsResponse(buffer_arg) {
  return tokenfactory_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Params defines a gRPC query method that returns the tokenfactory module's
// parameters.
params: {
    path: '/seiprotocol.seichain.tokenfactory.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_query_pb.QueryParamsRequest,
    responseType: tokenfactory_query_pb.QueryParamsResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryParamsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryParamsRequest,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryParamsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryParamsResponse,
  },
  // DenomAuthorityMetadata defines a gRPC query method for fetching
// DenomAuthorityMetadata for a particular denom.
denomAuthorityMetadata: {
    path: '/seiprotocol.seichain.tokenfactory.Query/DenomAuthorityMetadata',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest,
    responseType: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataRequest,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAuthorityMetadataResponse,
  },
  // DenomsMetadata defines a gRPC query method for fetching
//  DenomMetadata for a particular denom.
denomMetadata: {
    path: '/seiprotocol.seichain.tokenfactory.Query/DenomMetadata',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_query_pb.QueryDenomMetadataRequest,
    responseType: tokenfactory_query_pb.QueryDenomMetadataResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataRequest,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomMetadataResponse,
  },
  // DenomsFromCreator defines a gRPC query method for fetching all
// denominations created by a specific admin/creator.
denomsFromCreator: {
    path: '/seiprotocol.seichain.tokenfactory.Query/DenomsFromCreator',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_query_pb.QueryDenomsFromCreatorRequest,
    responseType: tokenfactory_query_pb.QueryDenomsFromCreatorResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorRequest,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomsFromCreatorResponse,
  },
  // DenomAllowList defines a gRPC query method for fetching the denom allow list
denomAllowList: {
    path: '/seiprotocol.seichain.tokenfactory.Query/DenomAllowList',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_query_pb.QueryDenomAllowListRequest,
    responseType: tokenfactory_query_pb.QueryDenomAllowListResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListRequest,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_QueryDenomAllowListResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
