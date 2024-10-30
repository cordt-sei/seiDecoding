// package: seiprotocol.seichain.oracle
// file: oracle/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as oracle_query_pb from "../oracle/query_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as oracle_oracle_pb from "../oracle/oracle_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    exchangeRate: IQueryService_IExchangeRate;
    exchangeRates: IQueryService_IExchangeRates;
    actives: IQueryService_IActives;
    voteTargets: IQueryService_IVoteTargets;
    priceSnapshotHistory: IQueryService_IPriceSnapshotHistory;
    twaps: IQueryService_ITwaps;
    feederDelegation: IQueryService_IFeederDelegation;
    votePenaltyCounter: IQueryService_IVotePenaltyCounter;
    slashWindow: IQueryService_ISlashWindow;
    params: IQueryService_IParams;
}

interface IQueryService_IExchangeRate extends grpc.MethodDefinition<oracle_query_pb.QueryExchangeRateRequest, oracle_query_pb.QueryExchangeRateResponse> {
    path: "/seiprotocol.seichain.oracle.Query/ExchangeRate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryExchangeRateRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryExchangeRateRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryExchangeRateResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryExchangeRateResponse>;
}
interface IQueryService_IExchangeRates extends grpc.MethodDefinition<oracle_query_pb.QueryExchangeRatesRequest, oracle_query_pb.QueryExchangeRatesResponse> {
    path: "/seiprotocol.seichain.oracle.Query/ExchangeRates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryExchangeRatesRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryExchangeRatesRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryExchangeRatesResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryExchangeRatesResponse>;
}
interface IQueryService_IActives extends grpc.MethodDefinition<oracle_query_pb.QueryActivesRequest, oracle_query_pb.QueryActivesResponse> {
    path: "/seiprotocol.seichain.oracle.Query/Actives";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryActivesRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryActivesRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryActivesResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryActivesResponse>;
}
interface IQueryService_IVoteTargets extends grpc.MethodDefinition<oracle_query_pb.QueryVoteTargetsRequest, oracle_query_pb.QueryVoteTargetsResponse> {
    path: "/seiprotocol.seichain.oracle.Query/VoteTargets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryVoteTargetsRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryVoteTargetsRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryVoteTargetsResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryVoteTargetsResponse>;
}
interface IQueryService_IPriceSnapshotHistory extends grpc.MethodDefinition<oracle_query_pb.QueryPriceSnapshotHistoryRequest, oracle_query_pb.QueryPriceSnapshotHistoryResponse> {
    path: "/seiprotocol.seichain.oracle.Query/PriceSnapshotHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryPriceSnapshotHistoryRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryPriceSnapshotHistoryRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryPriceSnapshotHistoryResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryPriceSnapshotHistoryResponse>;
}
interface IQueryService_ITwaps extends grpc.MethodDefinition<oracle_query_pb.QueryTwapsRequest, oracle_query_pb.QueryTwapsResponse> {
    path: "/seiprotocol.seichain.oracle.Query/Twaps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryTwapsRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryTwapsRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryTwapsResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryTwapsResponse>;
}
interface IQueryService_IFeederDelegation extends grpc.MethodDefinition<oracle_query_pb.QueryFeederDelegationRequest, oracle_query_pb.QueryFeederDelegationResponse> {
    path: "/seiprotocol.seichain.oracle.Query/FeederDelegation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryFeederDelegationRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryFeederDelegationRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryFeederDelegationResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryFeederDelegationResponse>;
}
interface IQueryService_IVotePenaltyCounter extends grpc.MethodDefinition<oracle_query_pb.QueryVotePenaltyCounterRequest, oracle_query_pb.QueryVotePenaltyCounterResponse> {
    path: "/seiprotocol.seichain.oracle.Query/VotePenaltyCounter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryVotePenaltyCounterRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryVotePenaltyCounterRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryVotePenaltyCounterResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryVotePenaltyCounterResponse>;
}
interface IQueryService_ISlashWindow extends grpc.MethodDefinition<oracle_query_pb.QuerySlashWindowRequest, oracle_query_pb.QuerySlashWindowResponse> {
    path: "/seiprotocol.seichain.oracle.Query/SlashWindow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QuerySlashWindowRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QuerySlashWindowRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QuerySlashWindowResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QuerySlashWindowResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<oracle_query_pb.QueryParamsRequest, oracle_query_pb.QueryParamsResponse> {
    path: "/seiprotocol.seichain.oracle.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<oracle_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<oracle_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<oracle_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    exchangeRate: grpc.handleUnaryCall<oracle_query_pb.QueryExchangeRateRequest, oracle_query_pb.QueryExchangeRateResponse>;
    exchangeRates: grpc.handleUnaryCall<oracle_query_pb.QueryExchangeRatesRequest, oracle_query_pb.QueryExchangeRatesResponse>;
    actives: grpc.handleUnaryCall<oracle_query_pb.QueryActivesRequest, oracle_query_pb.QueryActivesResponse>;
    voteTargets: grpc.handleUnaryCall<oracle_query_pb.QueryVoteTargetsRequest, oracle_query_pb.QueryVoteTargetsResponse>;
    priceSnapshotHistory: grpc.handleUnaryCall<oracle_query_pb.QueryPriceSnapshotHistoryRequest, oracle_query_pb.QueryPriceSnapshotHistoryResponse>;
    twaps: grpc.handleUnaryCall<oracle_query_pb.QueryTwapsRequest, oracle_query_pb.QueryTwapsResponse>;
    feederDelegation: grpc.handleUnaryCall<oracle_query_pb.QueryFeederDelegationRequest, oracle_query_pb.QueryFeederDelegationResponse>;
    votePenaltyCounter: grpc.handleUnaryCall<oracle_query_pb.QueryVotePenaltyCounterRequest, oracle_query_pb.QueryVotePenaltyCounterResponse>;
    slashWindow: grpc.handleUnaryCall<oracle_query_pb.QuerySlashWindowRequest, oracle_query_pb.QuerySlashWindowResponse>;
    params: grpc.handleUnaryCall<oracle_query_pb.QueryParamsRequest, oracle_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    actives(request: oracle_query_pb.QueryActivesRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    actives(request: oracle_query_pb.QueryActivesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    actives(request: oracle_query_pb.QueryActivesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    twaps(request: oracle_query_pb.QueryTwapsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    twaps(request: oracle_query_pb.QueryTwapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    twaps(request: oracle_query_pb.QueryTwapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    params(request: oracle_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: oracle_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: oracle_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    public exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    public exchangeRate(request: oracle_query_pb.QueryExchangeRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRateResponse) => void): grpc.ClientUnaryCall;
    public exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    public exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    public exchangeRates(request: oracle_query_pb.QueryExchangeRatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryExchangeRatesResponse) => void): grpc.ClientUnaryCall;
    public actives(request: oracle_query_pb.QueryActivesRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    public actives(request: oracle_query_pb.QueryActivesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    public actives(request: oracle_query_pb.QueryActivesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryActivesResponse) => void): grpc.ClientUnaryCall;
    public voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    public voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    public voteTargets(request: oracle_query_pb.QueryVoteTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVoteTargetsResponse) => void): grpc.ClientUnaryCall;
    public priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    public priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    public priceSnapshotHistory(request: oracle_query_pb.QueryPriceSnapshotHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryPriceSnapshotHistoryResponse) => void): grpc.ClientUnaryCall;
    public twaps(request: oracle_query_pb.QueryTwapsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    public twaps(request: oracle_query_pb.QueryTwapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    public twaps(request: oracle_query_pb.QueryTwapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryTwapsResponse) => void): grpc.ClientUnaryCall;
    public feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    public feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    public feederDelegation(request: oracle_query_pb.QueryFeederDelegationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryFeederDelegationResponse) => void): grpc.ClientUnaryCall;
    public votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    public votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    public votePenaltyCounter(request: oracle_query_pb.QueryVotePenaltyCounterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryVotePenaltyCounterResponse) => void): grpc.ClientUnaryCall;
    public slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    public slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    public slashWindow(request: oracle_query_pb.QuerySlashWindowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QuerySlashWindowResponse) => void): grpc.ClientUnaryCall;
    public params(request: oracle_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: oracle_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: oracle_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
