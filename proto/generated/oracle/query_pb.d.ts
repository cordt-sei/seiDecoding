// package: seiprotocol.seichain.oracle
// file: oracle/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as oracle_oracle_pb from "../oracle/oracle_pb";

export class QueryExchangeRateRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryExchangeRateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryExchangeRateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryExchangeRateRequest): QueryExchangeRateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryExchangeRateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryExchangeRateRequest;
    static deserializeBinaryFromReader(message: QueryExchangeRateRequest, reader: jspb.BinaryReader): QueryExchangeRateRequest;
}

export namespace QueryExchangeRateRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryExchangeRateResponse extends jspb.Message { 

    hasOracleExchangeRate(): boolean;
    clearOracleExchangeRate(): void;
    getOracleExchangeRate(): oracle_oracle_pb.OracleExchangeRate | undefined;
    setOracleExchangeRate(value?: oracle_oracle_pb.OracleExchangeRate): QueryExchangeRateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryExchangeRateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryExchangeRateResponse): QueryExchangeRateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryExchangeRateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryExchangeRateResponse;
    static deserializeBinaryFromReader(message: QueryExchangeRateResponse, reader: jspb.BinaryReader): QueryExchangeRateResponse;
}

export namespace QueryExchangeRateResponse {
    export type AsObject = {
        oracleExchangeRate?: oracle_oracle_pb.OracleExchangeRate.AsObject,
    }
}

export class QueryExchangeRatesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryExchangeRatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryExchangeRatesRequest): QueryExchangeRatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryExchangeRatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryExchangeRatesRequest;
    static deserializeBinaryFromReader(message: QueryExchangeRatesRequest, reader: jspb.BinaryReader): QueryExchangeRatesRequest;
}

export namespace QueryExchangeRatesRequest {
    export type AsObject = {
    }
}

export class DenomOracleExchangeRatePair extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): DenomOracleExchangeRatePair;

    hasOracleExchangeRate(): boolean;
    clearOracleExchangeRate(): void;
    getOracleExchangeRate(): oracle_oracle_pb.OracleExchangeRate | undefined;
    setOracleExchangeRate(value?: oracle_oracle_pb.OracleExchangeRate): DenomOracleExchangeRatePair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomOracleExchangeRatePair.AsObject;
    static toObject(includeInstance: boolean, msg: DenomOracleExchangeRatePair): DenomOracleExchangeRatePair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomOracleExchangeRatePair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomOracleExchangeRatePair;
    static deserializeBinaryFromReader(message: DenomOracleExchangeRatePair, reader: jspb.BinaryReader): DenomOracleExchangeRatePair;
}

export namespace DenomOracleExchangeRatePair {
    export type AsObject = {
        denom: string,
        oracleExchangeRate?: oracle_oracle_pb.OracleExchangeRate.AsObject,
    }
}

export class QueryExchangeRatesResponse extends jspb.Message { 
    clearDenomOracleExchangeRatePairsList(): void;
    getDenomOracleExchangeRatePairsList(): Array<DenomOracleExchangeRatePair>;
    setDenomOracleExchangeRatePairsList(value: Array<DenomOracleExchangeRatePair>): QueryExchangeRatesResponse;
    addDenomOracleExchangeRatePairs(value?: DenomOracleExchangeRatePair, index?: number): DenomOracleExchangeRatePair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryExchangeRatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryExchangeRatesResponse): QueryExchangeRatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryExchangeRatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryExchangeRatesResponse;
    static deserializeBinaryFromReader(message: QueryExchangeRatesResponse, reader: jspb.BinaryReader): QueryExchangeRatesResponse;
}

export namespace QueryExchangeRatesResponse {
    export type AsObject = {
        denomOracleExchangeRatePairsList: Array<DenomOracleExchangeRatePair.AsObject>,
    }
}

export class QueryActivesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryActivesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryActivesRequest): QueryActivesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryActivesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryActivesRequest;
    static deserializeBinaryFromReader(message: QueryActivesRequest, reader: jspb.BinaryReader): QueryActivesRequest;
}

export namespace QueryActivesRequest {
    export type AsObject = {
    }
}

export class QueryActivesResponse extends jspb.Message { 
    clearActivesList(): void;
    getActivesList(): Array<string>;
    setActivesList(value: Array<string>): QueryActivesResponse;
    addActives(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryActivesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryActivesResponse): QueryActivesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryActivesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryActivesResponse;
    static deserializeBinaryFromReader(message: QueryActivesResponse, reader: jspb.BinaryReader): QueryActivesResponse;
}

export namespace QueryActivesResponse {
    export type AsObject = {
        activesList: Array<string>,
    }
}

export class QueryVoteTargetsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVoteTargetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVoteTargetsRequest): QueryVoteTargetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVoteTargetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVoteTargetsRequest;
    static deserializeBinaryFromReader(message: QueryVoteTargetsRequest, reader: jspb.BinaryReader): QueryVoteTargetsRequest;
}

export namespace QueryVoteTargetsRequest {
    export type AsObject = {
    }
}

export class QueryVoteTargetsResponse extends jspb.Message { 
    clearVoteTargetsList(): void;
    getVoteTargetsList(): Array<string>;
    setVoteTargetsList(value: Array<string>): QueryVoteTargetsResponse;
    addVoteTargets(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVoteTargetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVoteTargetsResponse): QueryVoteTargetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVoteTargetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVoteTargetsResponse;
    static deserializeBinaryFromReader(message: QueryVoteTargetsResponse, reader: jspb.BinaryReader): QueryVoteTargetsResponse;
}

export namespace QueryVoteTargetsResponse {
    export type AsObject = {
        voteTargetsList: Array<string>,
    }
}

export class QueryPriceSnapshotHistoryRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPriceSnapshotHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPriceSnapshotHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPriceSnapshotHistoryRequest;
    static deserializeBinaryFromReader(message: QueryPriceSnapshotHistoryRequest, reader: jspb.BinaryReader): QueryPriceSnapshotHistoryRequest;
}

export namespace QueryPriceSnapshotHistoryRequest {
    export type AsObject = {
    }
}

export class QueryPriceSnapshotHistoryResponse extends jspb.Message { 
    clearPriceSnapshotsList(): void;
    getPriceSnapshotsList(): Array<oracle_oracle_pb.PriceSnapshot>;
    setPriceSnapshotsList(value: Array<oracle_oracle_pb.PriceSnapshot>): QueryPriceSnapshotHistoryResponse;
    addPriceSnapshots(value?: oracle_oracle_pb.PriceSnapshot, index?: number): oracle_oracle_pb.PriceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPriceSnapshotHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPriceSnapshotHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPriceSnapshotHistoryResponse;
    static deserializeBinaryFromReader(message: QueryPriceSnapshotHistoryResponse, reader: jspb.BinaryReader): QueryPriceSnapshotHistoryResponse;
}

export namespace QueryPriceSnapshotHistoryResponse {
    export type AsObject = {
        priceSnapshotsList: Array<oracle_oracle_pb.PriceSnapshot.AsObject>,
    }
}

export class QueryTwapsRequest extends jspb.Message { 
    getLookbackSeconds(): number;
    setLookbackSeconds(value: number): QueryTwapsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTwapsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTwapsRequest): QueryTwapsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTwapsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTwapsRequest;
    static deserializeBinaryFromReader(message: QueryTwapsRequest, reader: jspb.BinaryReader): QueryTwapsRequest;
}

export namespace QueryTwapsRequest {
    export type AsObject = {
        lookbackSeconds: number,
    }
}

export class QueryTwapsResponse extends jspb.Message { 
    clearOracleTwapsList(): void;
    getOracleTwapsList(): Array<oracle_oracle_pb.OracleTwap>;
    setOracleTwapsList(value: Array<oracle_oracle_pb.OracleTwap>): QueryTwapsResponse;
    addOracleTwaps(value?: oracle_oracle_pb.OracleTwap, index?: number): oracle_oracle_pb.OracleTwap;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTwapsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTwapsResponse): QueryTwapsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTwapsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTwapsResponse;
    static deserializeBinaryFromReader(message: QueryTwapsResponse, reader: jspb.BinaryReader): QueryTwapsResponse;
}

export namespace QueryTwapsResponse {
    export type AsObject = {
        oracleTwapsList: Array<oracle_oracle_pb.OracleTwap.AsObject>,
    }
}

export class QueryFeederDelegationRequest extends jspb.Message { 
    getValidatorAddr(): string;
    setValidatorAddr(value: string): QueryFeederDelegationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryFeederDelegationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryFeederDelegationRequest): QueryFeederDelegationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryFeederDelegationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryFeederDelegationRequest;
    static deserializeBinaryFromReader(message: QueryFeederDelegationRequest, reader: jspb.BinaryReader): QueryFeederDelegationRequest;
}

export namespace QueryFeederDelegationRequest {
    export type AsObject = {
        validatorAddr: string,
    }
}

export class QueryFeederDelegationResponse extends jspb.Message { 
    getFeederAddr(): string;
    setFeederAddr(value: string): QueryFeederDelegationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryFeederDelegationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryFeederDelegationResponse): QueryFeederDelegationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryFeederDelegationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryFeederDelegationResponse;
    static deserializeBinaryFromReader(message: QueryFeederDelegationResponse, reader: jspb.BinaryReader): QueryFeederDelegationResponse;
}

export namespace QueryFeederDelegationResponse {
    export type AsObject = {
        feederAddr: string,
    }
}

export class QueryVotePenaltyCounterRequest extends jspb.Message { 
    getValidatorAddr(): string;
    setValidatorAddr(value: string): QueryVotePenaltyCounterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVotePenaltyCounterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVotePenaltyCounterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVotePenaltyCounterRequest;
    static deserializeBinaryFromReader(message: QueryVotePenaltyCounterRequest, reader: jspb.BinaryReader): QueryVotePenaltyCounterRequest;
}

export namespace QueryVotePenaltyCounterRequest {
    export type AsObject = {
        validatorAddr: string,
    }
}

export class QueryVotePenaltyCounterResponse extends jspb.Message { 

    hasVotePenaltyCounter(): boolean;
    clearVotePenaltyCounter(): void;
    getVotePenaltyCounter(): oracle_oracle_pb.VotePenaltyCounter | undefined;
    setVotePenaltyCounter(value?: oracle_oracle_pb.VotePenaltyCounter): QueryVotePenaltyCounterResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVotePenaltyCounterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVotePenaltyCounterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVotePenaltyCounterResponse;
    static deserializeBinaryFromReader(message: QueryVotePenaltyCounterResponse, reader: jspb.BinaryReader): QueryVotePenaltyCounterResponse;
}

export namespace QueryVotePenaltyCounterResponse {
    export type AsObject = {
        votePenaltyCounter?: oracle_oracle_pb.VotePenaltyCounter.AsObject,
    }
}

export class QuerySlashWindowRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySlashWindowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySlashWindowRequest): QuerySlashWindowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySlashWindowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySlashWindowRequest;
    static deserializeBinaryFromReader(message: QuerySlashWindowRequest, reader: jspb.BinaryReader): QuerySlashWindowRequest;
}

export namespace QuerySlashWindowRequest {
    export type AsObject = {
    }
}

export class QuerySlashWindowResponse extends jspb.Message { 
    getWindowProgress(): number;
    setWindowProgress(value: number): QuerySlashWindowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySlashWindowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySlashWindowResponse): QuerySlashWindowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySlashWindowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySlashWindowResponse;
    static deserializeBinaryFromReader(message: QuerySlashWindowResponse, reader: jspb.BinaryReader): QuerySlashWindowResponse;
}

export namespace QuerySlashWindowResponse {
    export type AsObject = {
        windowProgress: number,
    }
}

export class QueryParamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
    export type AsObject = {
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): oracle_oracle_pb.Params | undefined;
    setParams(value?: oracle_oracle_pb.Params): QueryParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
    export type AsObject = {
        params?: oracle_oracle_pb.Params.AsObject,
    }
}
