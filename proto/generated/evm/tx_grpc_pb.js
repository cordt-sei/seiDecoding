// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var evm_tx_pb = require('../evm/tx_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../cosmos/base/v1beta1/coin_pb.js');
var evm_enums_pb = require('../evm/enums_pb.js');
var evm_receipt_pb = require('../evm/receipt_pb.js');

function serialize_seiprotocol_seichain_evm_MsgAssociate(arg) {
  if (!(arg instanceof evm_tx_pb.MsgAssociate)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgAssociate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgAssociate(buffer_arg) {
  return evm_tx_pb.MsgAssociate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgAssociateContractAddress(arg) {
  if (!(arg instanceof evm_tx_pb.MsgAssociateContractAddress)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgAssociateContractAddress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgAssociateContractAddress(buffer_arg) {
  return evm_tx_pb.MsgAssociateContractAddress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgAssociateContractAddressResponse(arg) {
  if (!(arg instanceof evm_tx_pb.MsgAssociateContractAddressResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgAssociateContractAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgAssociateContractAddressResponse(buffer_arg) {
  return evm_tx_pb.MsgAssociateContractAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgAssociateResponse(arg) {
  if (!(arg instanceof evm_tx_pb.MsgAssociateResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgAssociateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgAssociateResponse(buffer_arg) {
  return evm_tx_pb.MsgAssociateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgEVMTransaction(arg) {
  if (!(arg instanceof evm_tx_pb.MsgEVMTransaction)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgEVMTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgEVMTransaction(buffer_arg) {
  return evm_tx_pb.MsgEVMTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgEVMTransactionResponse(arg) {
  if (!(arg instanceof evm_tx_pb.MsgEVMTransactionResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgEVMTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgEVMTransactionResponse(buffer_arg) {
  return evm_tx_pb.MsgEVMTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgRegisterPointer(arg) {
  if (!(arg instanceof evm_tx_pb.MsgRegisterPointer)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgRegisterPointer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgRegisterPointer(buffer_arg) {
  return evm_tx_pb.MsgRegisterPointer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgRegisterPointerResponse(arg) {
  if (!(arg instanceof evm_tx_pb.MsgRegisterPointerResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgRegisterPointerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgRegisterPointerResponse(buffer_arg) {
  return evm_tx_pb.MsgRegisterPointerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgSend(arg) {
  if (!(arg instanceof evm_tx_pb.MsgSend)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgSend');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgSend(buffer_arg) {
  return evm_tx_pb.MsgSend.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_MsgSendResponse(arg) {
  if (!(arg instanceof evm_tx_pb.MsgSendResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.MsgSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_MsgSendResponse(buffer_arg) {
  return evm_tx_pb.MsgSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MsgService = exports.MsgService = {
  eVMTransaction: {
    path: '/seiprotocol.seichain.evm.Msg/EVMTransaction',
    requestStream: false,
    responseStream: false,
    requestType: evm_tx_pb.MsgEVMTransaction,
    responseType: evm_tx_pb.MsgEVMTransactionResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_MsgEVMTransaction,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_MsgEVMTransaction,
    responseSerialize: serialize_seiprotocol_seichain_evm_MsgEVMTransactionResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_MsgEVMTransactionResponse,
  },
  send: {
    path: '/seiprotocol.seichain.evm.Msg/Send',
    requestStream: false,
    responseStream: false,
    requestType: evm_tx_pb.MsgSend,
    responseType: evm_tx_pb.MsgSendResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_MsgSend,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_MsgSend,
    responseSerialize: serialize_seiprotocol_seichain_evm_MsgSendResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_MsgSendResponse,
  },
  registerPointer: {
    path: '/seiprotocol.seichain.evm.Msg/RegisterPointer',
    requestStream: false,
    responseStream: false,
    requestType: evm_tx_pb.MsgRegisterPointer,
    responseType: evm_tx_pb.MsgRegisterPointerResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_MsgRegisterPointer,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_MsgRegisterPointer,
    responseSerialize: serialize_seiprotocol_seichain_evm_MsgRegisterPointerResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_MsgRegisterPointerResponse,
  },
  associateContractAddress: {
    path: '/seiprotocol.seichain.evm.Msg/AssociateContractAddress',
    requestStream: false,
    responseStream: false,
    requestType: evm_tx_pb.MsgAssociateContractAddress,
    responseType: evm_tx_pb.MsgAssociateContractAddressResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_MsgAssociateContractAddress,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_MsgAssociateContractAddress,
    responseSerialize: serialize_seiprotocol_seichain_evm_MsgAssociateContractAddressResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_MsgAssociateContractAddressResponse,
  },
  associate: {
    path: '/seiprotocol.seichain.evm.Msg/Associate',
    requestStream: false,
    responseStream: false,
    requestType: evm_tx_pb.MsgAssociate,
    responseType: evm_tx_pb.MsgAssociateResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_MsgAssociate,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_MsgAssociate,
    responseSerialize: serialize_seiprotocol_seichain_evm_MsgAssociateResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_MsgAssociateResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
