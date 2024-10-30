// package: seiprotocol.seichain.epoch
// file: epoch/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as epoch_query_pb from "../epoch/query_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../cosmos/base/query/v1beta1/pagination_pb";
import * as epoch_params_pb from "../epoch/params_pb";
import * as epoch_epoch_pb from "../epoch/epoch_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    epoch: IQueryService_IEpoch;
    params: IQueryService_IParams;
}

interface IQueryService_IEpoch extends grpc.MethodDefinition<epoch_query_pb.QueryEpochRequest, epoch_query_pb.QueryEpochResponse> {
    path: "/seiprotocol.seichain.epoch.Query/Epoch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<epoch_query_pb.QueryEpochRequest>;
    requestDeserialize: grpc.deserialize<epoch_query_pb.QueryEpochRequest>;
    responseSerialize: grpc.serialize<epoch_query_pb.QueryEpochResponse>;
    responseDeserialize: grpc.deserialize<epoch_query_pb.QueryEpochResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<epoch_query_pb.QueryParamsRequest, epoch_query_pb.QueryParamsResponse> {
    path: "/seiprotocol.seichain.epoch.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<epoch_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<epoch_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<epoch_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<epoch_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    epoch: grpc.handleUnaryCall<epoch_query_pb.QueryEpochRequest, epoch_query_pb.QueryEpochResponse>;
    params: grpc.handleUnaryCall<epoch_query_pb.QueryParamsRequest, epoch_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    epoch(request: epoch_query_pb.QueryEpochRequest, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    epoch(request: epoch_query_pb.QueryEpochRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    epoch(request: epoch_query_pb.QueryEpochRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    params(request: epoch_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: epoch_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: epoch_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public epoch(request: epoch_query_pb.QueryEpochRequest, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    public epoch(request: epoch_query_pb.QueryEpochRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    public epoch(request: epoch_query_pb.QueryEpochRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryEpochResponse) => void): grpc.ClientUnaryCall;
    public params(request: epoch_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: epoch_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: epoch_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: epoch_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
