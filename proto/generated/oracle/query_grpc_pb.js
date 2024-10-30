// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var oracle_query_pb = require('../oracle/query_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var oracle_oracle_pb = require('../oracle/oracle_pb.js');

function serialize_seiprotocol_seichain_oracle_QueryActivesRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryActivesRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryActivesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryActivesRequest(buffer_arg) {
  return oracle_query_pb.QueryActivesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryActivesResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryActivesResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryActivesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryActivesResponse(buffer_arg) {
  return oracle_query_pb.QueryActivesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryExchangeRateRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryExchangeRateRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryExchangeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryExchangeRateRequest(buffer_arg) {
  return oracle_query_pb.QueryExchangeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryExchangeRateResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryExchangeRateResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryExchangeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryExchangeRateResponse(buffer_arg) {
  return oracle_query_pb.QueryExchangeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryExchangeRatesRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryExchangeRatesRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryExchangeRatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryExchangeRatesRequest(buffer_arg) {
  return oracle_query_pb.QueryExchangeRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryExchangeRatesResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryExchangeRatesResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryExchangeRatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryExchangeRatesResponse(buffer_arg) {
  return oracle_query_pb.QueryExchangeRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryFeederDelegationRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryFeederDelegationRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryFeederDelegationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryFeederDelegationRequest(buffer_arg) {
  return oracle_query_pb.QueryFeederDelegationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryFeederDelegationResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryFeederDelegationResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryFeederDelegationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryFeederDelegationResponse(buffer_arg) {
  return oracle_query_pb.QueryFeederDelegationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryParamsRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryParamsRequest(buffer_arg) {
  return oracle_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryParamsResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryParamsResponse(buffer_arg) {
  return oracle_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryPriceSnapshotHistoryRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryRequest(buffer_arg) {
  return oracle_query_pb.QueryPriceSnapshotHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryPriceSnapshotHistoryResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryResponse(buffer_arg) {
  return oracle_query_pb.QueryPriceSnapshotHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QuerySlashWindowRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QuerySlashWindowRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QuerySlashWindowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QuerySlashWindowRequest(buffer_arg) {
  return oracle_query_pb.QuerySlashWindowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QuerySlashWindowResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QuerySlashWindowResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QuerySlashWindowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QuerySlashWindowResponse(buffer_arg) {
  return oracle_query_pb.QuerySlashWindowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryTwapsRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryTwapsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryTwapsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryTwapsRequest(buffer_arg) {
  return oracle_query_pb.QueryTwapsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryTwapsResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryTwapsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryTwapsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryTwapsResponse(buffer_arg) {
  return oracle_query_pb.QueryTwapsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryVotePenaltyCounterRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterRequest(buffer_arg) {
  return oracle_query_pb.QueryVotePenaltyCounterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryVotePenaltyCounterResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterResponse(buffer_arg) {
  return oracle_query_pb.QueryVotePenaltyCounterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryVoteTargetsRequest(arg) {
  if (!(arg instanceof oracle_query_pb.QueryVoteTargetsRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryVoteTargetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryVoteTargetsRequest(buffer_arg) {
  return oracle_query_pb.QueryVoteTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_oracle_QueryVoteTargetsResponse(arg) {
  if (!(arg instanceof oracle_query_pb.QueryVoteTargetsResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.oracle.QueryVoteTargetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_oracle_QueryVoteTargetsResponse(buffer_arg) {
  return oracle_query_pb.QueryVoteTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // ExchangeRate returns exchange rate of a denom
exchangeRate: {
    path: '/seiprotocol.seichain.oracle.Query/ExchangeRate',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryExchangeRateRequest,
    responseType: oracle_query_pb.QueryExchangeRateResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryExchangeRateRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryExchangeRateRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryExchangeRateResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryExchangeRateResponse,
  },
  // ExchangeRates returns exchange rates of all denoms
exchangeRates: {
    path: '/seiprotocol.seichain.oracle.Query/ExchangeRates',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryExchangeRatesRequest,
    responseType: oracle_query_pb.QueryExchangeRatesResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryExchangeRatesRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryExchangeRatesRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryExchangeRatesResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryExchangeRatesResponse,
  },
  // Actives returns all active denoms
actives: {
    path: '/seiprotocol.seichain.oracle.Query/Actives',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryActivesRequest,
    responseType: oracle_query_pb.QueryActivesResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryActivesRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryActivesRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryActivesResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryActivesResponse,
  },
  // VoteTargets returns all vote target denoms
voteTargets: {
    path: '/seiprotocol.seichain.oracle.Query/VoteTargets',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryVoteTargetsRequest,
    responseType: oracle_query_pb.QueryVoteTargetsResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryVoteTargetsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryVoteTargetsRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryVoteTargetsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryVoteTargetsResponse,
  },
  // PriceSnapshotHistory returns the history of price snapshots for all assets
priceSnapshotHistory: {
    path: '/seiprotocol.seichain.oracle.Query/PriceSnapshotHistory',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryPriceSnapshotHistoryRequest,
    responseType: oracle_query_pb.QueryPriceSnapshotHistoryResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryPriceSnapshotHistoryResponse,
  },
  twaps: {
    path: '/seiprotocol.seichain.oracle.Query/Twaps',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryTwapsRequest,
    responseType: oracle_query_pb.QueryTwapsResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryTwapsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryTwapsRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryTwapsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryTwapsResponse,
  },
  // FeederDelegation returns feeder delegation of a validator
feederDelegation: {
    path: '/seiprotocol.seichain.oracle.Query/FeederDelegation',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryFeederDelegationRequest,
    responseType: oracle_query_pb.QueryFeederDelegationResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryFeederDelegationRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryFeederDelegationRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryFeederDelegationResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryFeederDelegationResponse,
  },
  // MissCounter returns oracle miss counter of a validator
votePenaltyCounter: {
    path: '/seiprotocol.seichain.oracle.Query/VotePenaltyCounter',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryVotePenaltyCounterRequest,
    responseType: oracle_query_pb.QueryVotePenaltyCounterResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryVotePenaltyCounterResponse,
  },
  // SlashWindow returns slash window information
slashWindow: {
    path: '/seiprotocol.seichain.oracle.Query/SlashWindow',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QuerySlashWindowRequest,
    responseType: oracle_query_pb.QuerySlashWindowResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QuerySlashWindowRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QuerySlashWindowRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QuerySlashWindowResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QuerySlashWindowResponse,
  },
  // Params queries all parameters.
params: {
    path: '/seiprotocol.seichain.oracle.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: oracle_query_pb.QueryParamsRequest,
    responseType: oracle_query_pb.QueryParamsResponse,
    requestSerialize: serialize_seiprotocol_seichain_oracle_QueryParamsRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_oracle_QueryParamsRequest,
    responseSerialize: serialize_seiprotocol_seichain_oracle_QueryParamsResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_oracle_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
