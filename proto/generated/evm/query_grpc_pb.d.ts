// package: seiprotocol.seichain.evm
// file: evm/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as evm_query_pb from "../evm/query_pb";
import * as evm_enums_pb from "../evm/enums_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    seiAddressByEVMAddress: IQueryService_ISeiAddressByEVMAddress;
    eVMAddressBySeiAddress: IQueryService_IEVMAddressBySeiAddress;
    staticCall: IQueryService_IStaticCall;
    pointer: IQueryService_IPointer;
    pointerVersion: IQueryService_IPointerVersion;
    pointee: IQueryService_IPointee;
}

interface IQueryService_ISeiAddressByEVMAddress extends grpc.MethodDefinition<evm_query_pb.QuerySeiAddressByEVMAddressRequest, evm_query_pb.QuerySeiAddressByEVMAddressResponse> {
    path: "/seiprotocol.seichain.evm.Query/SeiAddressByEVMAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QuerySeiAddressByEVMAddressRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QuerySeiAddressByEVMAddressRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QuerySeiAddressByEVMAddressResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QuerySeiAddressByEVMAddressResponse>;
}
interface IQueryService_IEVMAddressBySeiAddress extends grpc.MethodDefinition<evm_query_pb.QueryEVMAddressBySeiAddressRequest, evm_query_pb.QueryEVMAddressBySeiAddressResponse> {
    path: "/seiprotocol.seichain.evm.Query/EVMAddressBySeiAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QueryEVMAddressBySeiAddressRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QueryEVMAddressBySeiAddressRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QueryEVMAddressBySeiAddressResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QueryEVMAddressBySeiAddressResponse>;
}
interface IQueryService_IStaticCall extends grpc.MethodDefinition<evm_query_pb.QueryStaticCallRequest, evm_query_pb.QueryStaticCallResponse> {
    path: "/seiprotocol.seichain.evm.Query/StaticCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QueryStaticCallRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QueryStaticCallRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QueryStaticCallResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QueryStaticCallResponse>;
}
interface IQueryService_IPointer extends grpc.MethodDefinition<evm_query_pb.QueryPointerRequest, evm_query_pb.QueryPointerResponse> {
    path: "/seiprotocol.seichain.evm.Query/Pointer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QueryPointerRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QueryPointerRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QueryPointerResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QueryPointerResponse>;
}
interface IQueryService_IPointerVersion extends grpc.MethodDefinition<evm_query_pb.QueryPointerVersionRequest, evm_query_pb.QueryPointerVersionResponse> {
    path: "/seiprotocol.seichain.evm.Query/PointerVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QueryPointerVersionRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QueryPointerVersionRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QueryPointerVersionResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QueryPointerVersionResponse>;
}
interface IQueryService_IPointee extends grpc.MethodDefinition<evm_query_pb.QueryPointeeRequest, evm_query_pb.QueryPointeeResponse> {
    path: "/seiprotocol.seichain.evm.Query/Pointee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<evm_query_pb.QueryPointeeRequest>;
    requestDeserialize: grpc.deserialize<evm_query_pb.QueryPointeeRequest>;
    responseSerialize: grpc.serialize<evm_query_pb.QueryPointeeResponse>;
    responseDeserialize: grpc.deserialize<evm_query_pb.QueryPointeeResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    seiAddressByEVMAddress: grpc.handleUnaryCall<evm_query_pb.QuerySeiAddressByEVMAddressRequest, evm_query_pb.QuerySeiAddressByEVMAddressResponse>;
    eVMAddressBySeiAddress: grpc.handleUnaryCall<evm_query_pb.QueryEVMAddressBySeiAddressRequest, evm_query_pb.QueryEVMAddressBySeiAddressResponse>;
    staticCall: grpc.handleUnaryCall<evm_query_pb.QueryStaticCallRequest, evm_query_pb.QueryStaticCallResponse>;
    pointer: grpc.handleUnaryCall<evm_query_pb.QueryPointerRequest, evm_query_pb.QueryPointerResponse>;
    pointerVersion: grpc.handleUnaryCall<evm_query_pb.QueryPointerVersionRequest, evm_query_pb.QueryPointerVersionResponse>;
    pointee: grpc.handleUnaryCall<evm_query_pb.QueryPointeeRequest, evm_query_pb.QueryPointeeResponse>;
}

export interface IQueryClient {
    seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    staticCall(request: evm_query_pb.QueryStaticCallRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    staticCall(request: evm_query_pb.QueryStaticCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    staticCall(request: evm_query_pb.QueryStaticCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    pointer(request: evm_query_pb.QueryPointerRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    pointer(request: evm_query_pb.QueryPointerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    pointer(request: evm_query_pb.QueryPointerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    pointee(request: evm_query_pb.QueryPointeeRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
    pointee(request: evm_query_pb.QueryPointeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
    pointee(request: evm_query_pb.QueryPointeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    public seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    public seiAddressByEVMAddress(request: evm_query_pb.QuerySeiAddressByEVMAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QuerySeiAddressByEVMAddressResponse) => void): grpc.ClientUnaryCall;
    public eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    public eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    public eVMAddressBySeiAddress(request: evm_query_pb.QueryEVMAddressBySeiAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryEVMAddressBySeiAddressResponse) => void): grpc.ClientUnaryCall;
    public staticCall(request: evm_query_pb.QueryStaticCallRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    public staticCall(request: evm_query_pb.QueryStaticCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    public staticCall(request: evm_query_pb.QueryStaticCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryStaticCallResponse) => void): grpc.ClientUnaryCall;
    public pointer(request: evm_query_pb.QueryPointerRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    public pointer(request: evm_query_pb.QueryPointerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    public pointer(request: evm_query_pb.QueryPointerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerResponse) => void): grpc.ClientUnaryCall;
    public pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    public pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    public pointerVersion(request: evm_query_pb.QueryPointerVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointerVersionResponse) => void): grpc.ClientUnaryCall;
    public pointee(request: evm_query_pb.QueryPointeeRequest, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
    public pointee(request: evm_query_pb.QueryPointeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
    public pointee(request: evm_query_pb.QueryPointeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: evm_query_pb.QueryPointeeResponse) => void): grpc.ClientUnaryCall;
}
