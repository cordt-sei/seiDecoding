// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tokenfactory_query_pb from "../tokenfactory/query_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../cosmos/base/query/v1beta1/pagination_pb";
import * as tokenfactory_authorityMetadata_pb from "../tokenfactory/authorityMetadata_pb";
import * as tokenfactory_params_pb from "../tokenfactory/params_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    denomAuthorityMetadata: IQueryService_IDenomAuthorityMetadata;
    denomMetadata: IQueryService_IDenomMetadata;
    denomsFromCreator: IQueryService_IDenomsFromCreator;
    denomAllowList: IQueryService_IDenomAllowList;
}

interface IQueryService_IParams extends grpc.MethodDefinition<tokenfactory_query_pb.QueryParamsRequest, tokenfactory_query_pb.QueryParamsResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<tokenfactory_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryParamsResponse>;
}
interface IQueryService_IDenomAuthorityMetadata extends grpc.MethodDefinition<tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Query/DenomAuthorityMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest>;
    requestDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest>;
    responseSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse>;
}
interface IQueryService_IDenomMetadata extends grpc.MethodDefinition<tokenfactory_query_pb.QueryDenomMetadataRequest, tokenfactory_query_pb.QueryDenomMetadataResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Query/DenomMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomMetadataRequest>;
    requestDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomMetadataRequest>;
    responseSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomMetadataResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomMetadataResponse>;
}
interface IQueryService_IDenomsFromCreator extends grpc.MethodDefinition<tokenfactory_query_pb.QueryDenomsFromCreatorRequest, tokenfactory_query_pb.QueryDenomsFromCreatorResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Query/DenomsFromCreator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomsFromCreatorRequest>;
    requestDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomsFromCreatorRequest>;
    responseSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomsFromCreatorResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomsFromCreatorResponse>;
}
interface IQueryService_IDenomAllowList extends grpc.MethodDefinition<tokenfactory_query_pb.QueryDenomAllowListRequest, tokenfactory_query_pb.QueryDenomAllowListResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Query/DenomAllowList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomAllowListRequest>;
    requestDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomAllowListRequest>;
    responseSerialize: grpc.serialize<tokenfactory_query_pb.QueryDenomAllowListResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_query_pb.QueryDenomAllowListResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<tokenfactory_query_pb.QueryParamsRequest, tokenfactory_query_pb.QueryParamsResponse>;
    denomAuthorityMetadata: grpc.handleUnaryCall<tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse>;
    denomMetadata: grpc.handleUnaryCall<tokenfactory_query_pb.QueryDenomMetadataRequest, tokenfactory_query_pb.QueryDenomMetadataResponse>;
    denomsFromCreator: grpc.handleUnaryCall<tokenfactory_query_pb.QueryDenomsFromCreatorRequest, tokenfactory_query_pb.QueryDenomsFromCreatorResponse>;
    denomAllowList: grpc.handleUnaryCall<tokenfactory_query_pb.QueryDenomAllowListRequest, tokenfactory_query_pb.QueryDenomAllowListResponse>;
}

export interface IQueryClient {
    params(request: tokenfactory_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: tokenfactory_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: tokenfactory_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
    denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
    denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: tokenfactory_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: tokenfactory_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: tokenfactory_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomAuthorityMetadata(request: tokenfactory_query_pb.QueryDenomAuthorityMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAuthorityMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: tokenfactory_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    public denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    public denomsFromCreator(request: tokenfactory_query_pb.QueryDenomsFromCreatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomsFromCreatorResponse) => void): grpc.ClientUnaryCall;
    public denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
    public denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
    public denomAllowList(request: tokenfactory_query_pb.QueryDenomAllowListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_query_pb.QueryDenomAllowListResponse) => void): grpc.ClientUnaryCall;
}
