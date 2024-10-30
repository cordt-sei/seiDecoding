// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tokenfactory_tx_pb = require('../tokenfactory/tx_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../cosmos/base/v1beta1/coin_pb.js');
var cosmos_bank_v1beta1_bank_pb = require('../cosmos/bank/v1beta1/bank_pb.js');

function serialize_seiprotocol_seichain_tokenfactory_MsgBurn(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgBurn)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgBurn');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgBurn(buffer_arg) {
  return tokenfactory_tx_pb.MsgBurn.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgBurnResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgBurnResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgBurnResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgBurnResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgBurnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgChangeAdmin(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgChangeAdmin)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgChangeAdmin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgChangeAdmin(buffer_arg) {
  return tokenfactory_tx_pb.MsgChangeAdmin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgChangeAdminResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgChangeAdminResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgChangeAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgChangeAdminResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgChangeAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgCreateDenom(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgCreateDenom)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgCreateDenom');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgCreateDenom(buffer_arg) {
  return tokenfactory_tx_pb.MsgCreateDenom.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgCreateDenomResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgCreateDenomResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgCreateDenomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgCreateDenomResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgCreateDenomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgMint(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgMint)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgMint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgMint(buffer_arg) {
  return tokenfactory_tx_pb.MsgMint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgMintResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgMintResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgMintResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgMintResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgMintResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadata(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgSetDenomMetadata)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadata(buffer_arg) {
  return tokenfactory_tx_pb.MsgSetDenomMetadata.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadataResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgSetDenomMetadataResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgSetDenomMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadataResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgSetDenomMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenom(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgUpdateDenom)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgUpdateDenom');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenom(buffer_arg) {
  return tokenfactory_tx_pb.MsgUpdateDenom.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenomResponse(arg) {
  if (!(arg instanceof tokenfactory_tx_pb.MsgUpdateDenomResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.tokenfactory.MsgUpdateDenomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenomResponse(buffer_arg) {
  return tokenfactory_tx_pb.MsgUpdateDenomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the tokefactory module's gRPC message service.
var MsgService = exports.MsgService = {
  createDenom: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/CreateDenom',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgCreateDenom,
    responseType: tokenfactory_tx_pb.MsgCreateDenomResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgCreateDenom,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgCreateDenom,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgCreateDenomResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgCreateDenomResponse,
  },
  updateDenom: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/UpdateDenom',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgUpdateDenom,
    responseType: tokenfactory_tx_pb.MsgUpdateDenomResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenom,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenom,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenomResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgUpdateDenomResponse,
  },
  mint: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/Mint',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgMint,
    responseType: tokenfactory_tx_pb.MsgMintResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgMint,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgMint,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgMintResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgMintResponse,
  },
  burn: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/Burn',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgBurn,
    responseType: tokenfactory_tx_pb.MsgBurnResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgBurn,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgBurn,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgBurnResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgBurnResponse,
  },
  changeAdmin: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/ChangeAdmin',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgChangeAdmin,
    responseType: tokenfactory_tx_pb.MsgChangeAdminResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgChangeAdmin,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgChangeAdmin,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgChangeAdminResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgChangeAdminResponse,
  },
  setDenomMetadata: {
    path: '/seiprotocol.seichain.tokenfactory.Msg/SetDenomMetadata',
    requestStream: false,
    responseStream: false,
    requestType: tokenfactory_tx_pb.MsgSetDenomMetadata,
    responseType: tokenfactory_tx_pb.MsgSetDenomMetadataResponse,
    requestSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadata,
    requestDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadata,
    responseSerialize: serialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadataResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_tokenfactory_MsgSetDenomMetadataResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
