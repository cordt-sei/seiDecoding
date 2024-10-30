// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var evm_query_pb = require('../evm/query_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var evm_enums_pb = require('../evm/enums_pb.js');

function serialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressRequest(arg) {
  if (!(arg instanceof evm_query_pb.QueryEVMAddressBySeiAddressRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressRequest(buffer_arg) {
  return evm_query_pb.QueryEVMAddressBySeiAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressResponse(arg) {
  if (!(arg instanceof evm_query_pb.QueryEVMAddressBySeiAddressResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressResponse(buffer_arg) {
  return evm_query_pb.QueryEVMAddressBySeiAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointeeRequest(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointeeRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointeeRequest(buffer_arg) {
  return evm_query_pb.QueryPointeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointeeResponse(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointeeResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointeeResponse(buffer_arg) {
  return evm_query_pb.QueryPointeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointerRequest(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointerRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointerRequest(buffer_arg) {
  return evm_query_pb.QueryPointerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointerResponse(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointerResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointerResponse(buffer_arg) {
  return evm_query_pb.QueryPointerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointerVersionRequest(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointerVersionRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointerVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointerVersionRequest(buffer_arg) {
  return evm_query_pb.QueryPointerVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryPointerVersionResponse(arg) {
  if (!(arg instanceof evm_query_pb.QueryPointerVersionResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryPointerVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryPointerVersionResponse(buffer_arg) {
  return evm_query_pb.QueryPointerVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressRequest(arg) {
  if (!(arg instanceof evm_query_pb.QuerySeiAddressByEVMAddressRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressRequest(buffer_arg) {
  return evm_query_pb.QuerySeiAddressByEVMAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressResponse(arg) {
  if (!(arg instanceof evm_query_pb.QuerySeiAddressByEVMAddressResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressResponse(buffer_arg) {
  return evm_query_pb.QuerySeiAddressByEVMAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryStaticCallRequest(arg) {
  if (!(arg instanceof evm_query_pb.QueryStaticCallRequest)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryStaticCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryStaticCallRequest(buffer_arg) {
  return evm_query_pb.QueryStaticCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_seiprotocol_seichain_evm_QueryStaticCallResponse(arg) {
  if (!(arg instanceof evm_query_pb.QueryStaticCallResponse)) {
    throw new Error('Expected argument of type seiprotocol.seichain.evm.QueryStaticCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_seiprotocol_seichain_evm_QueryStaticCallResponse(buffer_arg) {
  return evm_query_pb.QueryStaticCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  seiAddressByEVMAddress: {
    path: '/seiprotocol.seichain.evm.Query/SeiAddressByEVMAddress',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QuerySeiAddressByEVMAddressRequest,
    responseType: evm_query_pb.QuerySeiAddressByEVMAddressResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QuerySeiAddressByEVMAddressResponse,
  },
  eVMAddressBySeiAddress: {
    path: '/seiprotocol.seichain.evm.Query/EVMAddressBySeiAddress',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QueryEVMAddressBySeiAddressRequest,
    responseType: evm_query_pb.QueryEVMAddressBySeiAddressResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QueryEVMAddressBySeiAddressResponse,
  },
  staticCall: {
    path: '/seiprotocol.seichain.evm.Query/StaticCall',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QueryStaticCallRequest,
    responseType: evm_query_pb.QueryStaticCallResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QueryStaticCallRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QueryStaticCallRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QueryStaticCallResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QueryStaticCallResponse,
  },
  pointer: {
    path: '/seiprotocol.seichain.evm.Query/Pointer',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QueryPointerRequest,
    responseType: evm_query_pb.QueryPointerResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QueryPointerRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointerRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QueryPointerResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointerResponse,
  },
  pointerVersion: {
    path: '/seiprotocol.seichain.evm.Query/PointerVersion',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QueryPointerVersionRequest,
    responseType: evm_query_pb.QueryPointerVersionResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QueryPointerVersionRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointerVersionRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QueryPointerVersionResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointerVersionResponse,
  },
  pointee: {
    path: '/seiprotocol.seichain.evm.Query/Pointee',
    requestStream: false,
    responseStream: false,
    requestType: evm_query_pb.QueryPointeeRequest,
    responseType: evm_query_pb.QueryPointeeResponse,
    requestSerialize: serialize_seiprotocol_seichain_evm_QueryPointeeRequest,
    requestDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointeeRequest,
    responseSerialize: serialize_seiprotocol_seichain_evm_QueryPointeeResponse,
    responseDeserialize: deserialize_seiprotocol_seichain_evm_QueryPointeeResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
