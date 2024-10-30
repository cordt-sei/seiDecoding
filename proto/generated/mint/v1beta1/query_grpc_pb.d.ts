// package: seiprotocol.seichain.mint
// file: mint/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as mint_v1beta1_query_pb from "../../mint/v1beta1/query_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as mint_v1beta1_mint_pb from "../../mint/v1beta1/mint_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    minter: IQueryService_IMinter;
}

interface IQueryService_IParams extends grpc.MethodDefinition<mint_v1beta1_query_pb.QueryParamsRequest, mint_v1beta1_query_pb.QueryParamsResponse> {
    path: "/seiprotocol.seichain.mint.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mint_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<mint_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<mint_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<mint_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IMinter extends grpc.MethodDefinition<mint_v1beta1_query_pb.QueryMinterRequest, mint_v1beta1_query_pb.QueryMinterResponse> {
    path: "/seiprotocol.seichain.mint.Query/Minter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mint_v1beta1_query_pb.QueryMinterRequest>;
    requestDeserialize: grpc.deserialize<mint_v1beta1_query_pb.QueryMinterRequest>;
    responseSerialize: grpc.serialize<mint_v1beta1_query_pb.QueryMinterResponse>;
    responseDeserialize: grpc.deserialize<mint_v1beta1_query_pb.QueryMinterResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<mint_v1beta1_query_pb.QueryParamsRequest, mint_v1beta1_query_pb.QueryParamsResponse>;
    minter: grpc.handleUnaryCall<mint_v1beta1_query_pb.QueryMinterRequest, mint_v1beta1_query_pb.QueryMinterResponse>;
}

export interface IQueryClient {
    params(request: mint_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    minter(request: mint_v1beta1_query_pb.QueryMinterRequest, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
    minter(request: mint_v1beta1_query_pb.QueryMinterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
    minter(request: mint_v1beta1_query_pb.QueryMinterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: mint_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public minter(request: mint_v1beta1_query_pb.QueryMinterRequest, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
    public minter(request: mint_v1beta1_query_pb.QueryMinterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
    public minter(request: mint_v1beta1_query_pb.QueryMinterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mint_v1beta1_query_pb.QueryMinterResponse) => void): grpc.ClientUnaryCall;
}
