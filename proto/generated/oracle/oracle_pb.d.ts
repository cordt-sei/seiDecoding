// package: seiprotocol.seichain.oracle
// file: oracle/oracle.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message { 
    getVotePeriod(): number;
    setVotePeriod(value: number): Params;
    getVoteThreshold(): string;
    setVoteThreshold(value: string): Params;
    getRewardBand(): string;
    setRewardBand(value: string): Params;
    clearWhitelistList(): void;
    getWhitelistList(): Array<Denom>;
    setWhitelistList(value: Array<Denom>): Params;
    addWhitelist(value?: Denom, index?: number): Denom;
    getSlashFraction(): string;
    setSlashFraction(value: string): Params;
    getSlashWindow(): number;
    setSlashWindow(value: number): Params;
    getMinValidPerWindow(): string;
    setMinValidPerWindow(value: string): Params;
    getLookbackDuration(): number;
    setLookbackDuration(value: number): Params;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Params.AsObject;
    static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Params;
    static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
    export type AsObject = {
        votePeriod: number,
        voteThreshold: string,
        rewardBand: string,
        whitelistList: Array<Denom.AsObject>,
        slashFraction: string,
        slashWindow: number,
        minValidPerWindow: string,
        lookbackDuration: number,
    }
}

export class Denom extends jspb.Message { 
    getName(): string;
    setName(value: string): Denom;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Denom.AsObject;
    static toObject(includeInstance: boolean, msg: Denom): Denom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Denom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Denom;
    static deserializeBinaryFromReader(message: Denom, reader: jspb.BinaryReader): Denom;
}

export namespace Denom {
    export type AsObject = {
        name: string,
    }
}

export class AggregateExchangeRateVote extends jspb.Message { 
    clearExchangeRateTuplesList(): void;
    getExchangeRateTuplesList(): Array<ExchangeRateTuple>;
    setExchangeRateTuplesList(value: Array<ExchangeRateTuple>): AggregateExchangeRateVote;
    addExchangeRateTuples(value?: ExchangeRateTuple, index?: number): ExchangeRateTuple;
    getVoter(): string;
    setVoter(value: string): AggregateExchangeRateVote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AggregateExchangeRateVote.AsObject;
    static toObject(includeInstance: boolean, msg: AggregateExchangeRateVote): AggregateExchangeRateVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AggregateExchangeRateVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AggregateExchangeRateVote;
    static deserializeBinaryFromReader(message: AggregateExchangeRateVote, reader: jspb.BinaryReader): AggregateExchangeRateVote;
}

export namespace AggregateExchangeRateVote {
    export type AsObject = {
        exchangeRateTuplesList: Array<ExchangeRateTuple.AsObject>,
        voter: string,
    }
}

export class ExchangeRateTuple extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): ExchangeRateTuple;
    getExchangeRate(): string;
    setExchangeRate(value: string): ExchangeRateTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeRateTuple.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeRateTuple): ExchangeRateTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeRateTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeRateTuple;
    static deserializeBinaryFromReader(message: ExchangeRateTuple, reader: jspb.BinaryReader): ExchangeRateTuple;
}

export namespace ExchangeRateTuple {
    export type AsObject = {
        denom: string,
        exchangeRate: string,
    }
}

export class OracleExchangeRate extends jspb.Message { 
    getExchangeRate(): string;
    setExchangeRate(value: string): OracleExchangeRate;
    getLastUpdate(): string;
    setLastUpdate(value: string): OracleExchangeRate;
    getLastUpdateTimestamp(): number;
    setLastUpdateTimestamp(value: number): OracleExchangeRate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleExchangeRate.AsObject;
    static toObject(includeInstance: boolean, msg: OracleExchangeRate): OracleExchangeRate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleExchangeRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleExchangeRate;
    static deserializeBinaryFromReader(message: OracleExchangeRate, reader: jspb.BinaryReader): OracleExchangeRate;
}

export namespace OracleExchangeRate {
    export type AsObject = {
        exchangeRate: string,
        lastUpdate: string,
        lastUpdateTimestamp: number,
    }
}

export class PriceSnapshotItem extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): PriceSnapshotItem;

    hasOracleExchangeRate(): boolean;
    clearOracleExchangeRate(): void;
    getOracleExchangeRate(): OracleExchangeRate | undefined;
    setOracleExchangeRate(value?: OracleExchangeRate): PriceSnapshotItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceSnapshotItem.AsObject;
    static toObject(includeInstance: boolean, msg: PriceSnapshotItem): PriceSnapshotItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceSnapshotItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceSnapshotItem;
    static deserializeBinaryFromReader(message: PriceSnapshotItem, reader: jspb.BinaryReader): PriceSnapshotItem;
}

export namespace PriceSnapshotItem {
    export type AsObject = {
        denom: string,
        oracleExchangeRate?: OracleExchangeRate.AsObject,
    }
}

export class PriceSnapshot extends jspb.Message { 
    getSnapshotTimestamp(): number;
    setSnapshotTimestamp(value: number): PriceSnapshot;
    clearPriceSnapshotItemsList(): void;
    getPriceSnapshotItemsList(): Array<PriceSnapshotItem>;
    setPriceSnapshotItemsList(value: Array<PriceSnapshotItem>): PriceSnapshot;
    addPriceSnapshotItems(value?: PriceSnapshotItem, index?: number): PriceSnapshotItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: PriceSnapshot): PriceSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceSnapshot;
    static deserializeBinaryFromReader(message: PriceSnapshot, reader: jspb.BinaryReader): PriceSnapshot;
}

export namespace PriceSnapshot {
    export type AsObject = {
        snapshotTimestamp: number,
        priceSnapshotItemsList: Array<PriceSnapshotItem.AsObject>,
    }
}

export class OracleTwap extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): OracleTwap;
    getTwap(): string;
    setTwap(value: string): OracleTwap;
    getLookbackSeconds(): number;
    setLookbackSeconds(value: number): OracleTwap;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleTwap.AsObject;
    static toObject(includeInstance: boolean, msg: OracleTwap): OracleTwap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleTwap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleTwap;
    static deserializeBinaryFromReader(message: OracleTwap, reader: jspb.BinaryReader): OracleTwap;
}

export namespace OracleTwap {
    export type AsObject = {
        denom: string,
        twap: string,
        lookbackSeconds: number,
    }
}

export class VotePenaltyCounter extends jspb.Message { 
    getMissCount(): number;
    setMissCount(value: number): VotePenaltyCounter;
    getAbstainCount(): number;
    setAbstainCount(value: number): VotePenaltyCounter;
    getSuccessCount(): number;
    setSuccessCount(value: number): VotePenaltyCounter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VotePenaltyCounter.AsObject;
    static toObject(includeInstance: boolean, msg: VotePenaltyCounter): VotePenaltyCounter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VotePenaltyCounter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VotePenaltyCounter;
    static deserializeBinaryFromReader(message: VotePenaltyCounter, reader: jspb.BinaryReader): VotePenaltyCounter;
}

export namespace VotePenaltyCounter {
    export type AsObject = {
        missCount: number,
        abstainCount: number,
        successCount: number,
    }
}
