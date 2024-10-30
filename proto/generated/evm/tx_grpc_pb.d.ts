// package: seiprotocol.seichain.evm
// file: evm/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as evm_tx_pb from "../evm/tx_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";
import * as evm_enums_pb from "../evm/enums_pb";
import * as evm_receipt_pb from "../evm/receipt_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    eVMTransaction: IMsgService_IEVMTransaction;
    send: IMsgService_ISend;
    registerPointer: IMsgService_IRegisterPointer;
    associateContractAddress: IMsgService_IAssociateContractAddress;
    associate: IMsgService_IAssociate;
}

interface IMsgService_IEVMTransaction extends grpc.MethodDefinition<evm_tx_pb.MsgEVMTransaction, evm_tx_pb.MsgEVMTransactionResponse> {
    path: "/seiprotocol.seichain.evm.Msg/EVMTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_tx_pb.MsgEVMTransaction>;
    requestDeserialize: grpc.deserialize<evm_tx_pb.MsgEVMTransaction>;
    responseSerialize: grpc.serialize<evm_tx_pb.MsgEVMTransactionResponse>;
    responseDeserialize: grpc.deserialize<evm_tx_pb.MsgEVMTransactionResponse>;
}
interface IMsgService_ISend extends grpc.MethodDefinition<evm_tx_pb.MsgSend, evm_tx_pb.MsgSendResponse> {
    path: "/seiprotocol.seichain.evm.Msg/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_tx_pb.MsgSend>;
    requestDeserialize: grpc.deserialize<evm_tx_pb.MsgSend>;
    responseSerialize: grpc.serialize<evm_tx_pb.MsgSendResponse>;
    responseDeserialize: grpc.deserialize<evm_tx_pb.MsgSendResponse>;
}
interface IMsgService_IRegisterPointer extends grpc.MethodDefinition<evm_tx_pb.MsgRegisterPointer, evm_tx_pb.MsgRegisterPointerResponse> {
    path: "/seiprotocol.seichain.evm.Msg/RegisterPointer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_tx_pb.MsgRegisterPointer>;
    requestDeserialize: grpc.deserialize<evm_tx_pb.MsgRegisterPointer>;
    responseSerialize: grpc.serialize<evm_tx_pb.MsgRegisterPointerResponse>;
    responseDeserialize: grpc.deserialize<evm_tx_pb.MsgRegisterPointerResponse>;
}
interface IMsgService_IAssociateContractAddress extends grpc.MethodDefinition<evm_tx_pb.MsgAssociateContractAddress, evm_tx_pb.MsgAssociateContractAddressResponse> {
    path: "/seiprotocol.seichain.evm.Msg/AssociateContractAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_tx_pb.MsgAssociateContractAddress>;
    requestDeserialize: grpc.deserialize<evm_tx_pb.MsgAssociateContractAddress>;
    responseSerialize: grpc.serialize<evm_tx_pb.MsgAssociateContractAddressResponse>;
    responseDeserialize: grpc.deserialize<evm_tx_pb.MsgAssociateContractAddressResponse>;
}
interface IMsgService_IAssociate extends grpc.MethodDefinition<evm_tx_pb.MsgAssociate, evm_tx_pb.MsgAssociateResponse> {
    path: "/seiprotocol.seichain.evm.Msg/Associate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_tx_pb.MsgAssociate>;
    requestDeserialize: grpc.deserialize<evm_tx_pb.MsgAssociate>;
    responseSerialize: grpc.serialize<evm_tx_pb.MsgAssociateResponse>;
    responseDeserialize: grpc.deserialize<evm_tx_pb.MsgAssociateResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    eVMTransaction: grpc.handleUnaryCall<evm_tx_pb.MsgEVMTransaction, evm_tx_pb.MsgEVMTransactionResponse>;
    send: grpc.handleUnaryCall<evm_tx_pb.MsgSend, evm_tx_pb.MsgSendResponse>;
    registerPointer: grpc.handleUnaryCall<evm_tx_pb.MsgRegisterPointer, evm_tx_pb.MsgRegisterPointerResponse>;
    associateContractAddress: grpc.handleUnaryCall<evm_tx_pb.MsgAssociateContractAddress, evm_tx_pb.MsgAssociateContractAddressResponse>;
    associate: grpc.handleUnaryCall<evm_tx_pb.MsgAssociate, evm_tx_pb.MsgAssociateResponse>;
}

export interface IMsgClient {
    eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    send(request: evm_tx_pb.MsgSend, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    send(request: evm_tx_pb.MsgSend, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    send(request: evm_tx_pb.MsgSend, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    registerPointer(request: evm_tx_pb.MsgRegisterPointer, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    registerPointer(request: evm_tx_pb.MsgRegisterPointer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    registerPointer(request: evm_tx_pb.MsgRegisterPointer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    associate(request: evm_tx_pb.MsgAssociate, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
    associate(request: evm_tx_pb.MsgAssociate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
    associate(request: evm_tx_pb.MsgAssociate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    public eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    public eVMTransaction(request: evm_tx_pb.MsgEVMTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgEVMTransactionResponse) => void): grpc.ClientUnaryCall;
    public send(request: evm_tx_pb.MsgSend, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    public send(request: evm_tx_pb.MsgSend, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    public send(request: evm_tx_pb.MsgSend, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgSendResponse) => void): grpc.ClientUnaryCall;
    public registerPointer(request: evm_tx_pb.MsgRegisterPointer, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    public registerPointer(request: evm_tx_pb.MsgRegisterPointer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    public registerPointer(request: evm_tx_pb.MsgRegisterPointer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgRegisterPointerResponse) => void): grpc.ClientUnaryCall;
    public associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    public associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    public associateContractAddress(request: evm_tx_pb.MsgAssociateContractAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateContractAddressResponse) => void): grpc.ClientUnaryCall;
    public associate(request: evm_tx_pb.MsgAssociate, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
    public associate(request: evm_tx_pb.MsgAssociate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
    public associate(request: evm_tx_pb.MsgAssociate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_tx_pb.MsgAssociateResponse) => void): grpc.ClientUnaryCall;
}
