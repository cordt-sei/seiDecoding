// package: seiprotocol.seichain.oracle
// file: oracle/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as oracle_tx_pb from "../oracle/tx_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    aggregateExchangeRateVote: IMsgService_IAggregateExchangeRateVote;
    delegateFeedConsent: IMsgService_IDelegateFeedConsent;
}

interface IMsgService_IAggregateExchangeRateVote extends grpc.MethodDefinition<oracle_tx_pb.MsgAggregateExchangeRateVote, oracle_tx_pb.MsgAggregateExchangeRateVoteResponse> {
    path: "/seiprotocol.seichain.oracle.Msg/AggregateExchangeRateVote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_tx_pb.MsgAggregateExchangeRateVote>;
    requestDeserialize: grpc.deserialize<oracle_tx_pb.MsgAggregateExchangeRateVote>;
    responseSerialize: grpc.serialize<oracle_tx_pb.MsgAggregateExchangeRateVoteResponse>;
    responseDeserialize: grpc.deserialize<oracle_tx_pb.MsgAggregateExchangeRateVoteResponse>;
}
interface IMsgService_IDelegateFeedConsent extends grpc.MethodDefinition<oracle_tx_pb.MsgDelegateFeedConsent, oracle_tx_pb.MsgDelegateFeedConsentResponse> {
    path: "/seiprotocol.seichain.oracle.Msg/DelegateFeedConsent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<oracle_tx_pb.MsgDelegateFeedConsent>;
    requestDeserialize: grpc.deserialize<oracle_tx_pb.MsgDelegateFeedConsent>;
    responseSerialize: grpc.serialize<oracle_tx_pb.MsgDelegateFeedConsentResponse>;
    responseDeserialize: grpc.deserialize<oracle_tx_pb.MsgDelegateFeedConsentResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    aggregateExchangeRateVote: grpc.handleUnaryCall<oracle_tx_pb.MsgAggregateExchangeRateVote, oracle_tx_pb.MsgAggregateExchangeRateVoteResponse>;
    delegateFeedConsent: grpc.handleUnaryCall<oracle_tx_pb.MsgDelegateFeedConsent, oracle_tx_pb.MsgDelegateFeedConsentResponse>;
}

export interface IMsgClient {
    aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
    delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
    delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    public aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    public aggregateExchangeRateVote(request: oracle_tx_pb.MsgAggregateExchangeRateVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgAggregateExchangeRateVoteResponse) => void): grpc.ClientUnaryCall;
    public delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
    public delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
    public delegateFeedConsent(request: oracle_tx_pb.MsgDelegateFeedConsent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: oracle_tx_pb.MsgDelegateFeedConsentResponse) => void): grpc.ClientUnaryCall;
}
