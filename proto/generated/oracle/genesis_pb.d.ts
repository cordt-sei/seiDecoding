// package: seiprotocol.seichain.oracle
// file: oracle/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as oracle_oracle_pb from "../oracle/oracle_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): oracle_oracle_pb.Params | undefined;
    setParams(value?: oracle_oracle_pb.Params): GenesisState;
    clearFeederDelegationsList(): void;
    getFeederDelegationsList(): Array<FeederDelegation>;
    setFeederDelegationsList(value: Array<FeederDelegation>): GenesisState;
    addFeederDelegations(value?: FeederDelegation, index?: number): FeederDelegation;
    clearExchangeRatesList(): void;
    getExchangeRatesList(): Array<oracle_oracle_pb.ExchangeRateTuple>;
    setExchangeRatesList(value: Array<oracle_oracle_pb.ExchangeRateTuple>): GenesisState;
    addExchangeRates(value?: oracle_oracle_pb.ExchangeRateTuple, index?: number): oracle_oracle_pb.ExchangeRateTuple;
    clearPenaltyCountersList(): void;
    getPenaltyCountersList(): Array<PenaltyCounter>;
    setPenaltyCountersList(value: Array<PenaltyCounter>): GenesisState;
    addPenaltyCounters(value?: PenaltyCounter, index?: number): PenaltyCounter;
    clearAggregateExchangeRateVotesList(): void;
    getAggregateExchangeRateVotesList(): Array<oracle_oracle_pb.AggregateExchangeRateVote>;
    setAggregateExchangeRateVotesList(value: Array<oracle_oracle_pb.AggregateExchangeRateVote>): GenesisState;
    addAggregateExchangeRateVotes(value?: oracle_oracle_pb.AggregateExchangeRateVote, index?: number): oracle_oracle_pb.AggregateExchangeRateVote;
    clearPriceSnapshotsList(): void;
    getPriceSnapshotsList(): Array<oracle_oracle_pb.PriceSnapshot>;
    setPriceSnapshotsList(value: Array<oracle_oracle_pb.PriceSnapshot>): GenesisState;
    addPriceSnapshots(value?: oracle_oracle_pb.PriceSnapshot, index?: number): oracle_oracle_pb.PriceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisState.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisState;
    static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
    export type AsObject = {
        params?: oracle_oracle_pb.Params.AsObject,
        feederDelegationsList: Array<FeederDelegation.AsObject>,
        exchangeRatesList: Array<oracle_oracle_pb.ExchangeRateTuple.AsObject>,
        penaltyCountersList: Array<PenaltyCounter.AsObject>,
        aggregateExchangeRateVotesList: Array<oracle_oracle_pb.AggregateExchangeRateVote.AsObject>,
        priceSnapshotsList: Array<oracle_oracle_pb.PriceSnapshot.AsObject>,
    }
}

export class FeederDelegation extends jspb.Message { 
    getFeederAddress(): string;
    setFeederAddress(value: string): FeederDelegation;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): FeederDelegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeederDelegation.AsObject;
    static toObject(includeInstance: boolean, msg: FeederDelegation): FeederDelegation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeederDelegation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeederDelegation;
    static deserializeBinaryFromReader(message: FeederDelegation, reader: jspb.BinaryReader): FeederDelegation;
}

export namespace FeederDelegation {
    export type AsObject = {
        feederAddress: string,
        validatorAddress: string,
    }
}

export class PenaltyCounter extends jspb.Message { 
    getValidatorAddress(): string;
    setValidatorAddress(value: string): PenaltyCounter;

    hasVotePenaltyCounter(): boolean;
    clearVotePenaltyCounter(): void;
    getVotePenaltyCounter(): oracle_oracle_pb.VotePenaltyCounter | undefined;
    setVotePenaltyCounter(value?: oracle_oracle_pb.VotePenaltyCounter): PenaltyCounter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PenaltyCounter.AsObject;
    static toObject(includeInstance: boolean, msg: PenaltyCounter): PenaltyCounter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PenaltyCounter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PenaltyCounter;
    static deserializeBinaryFromReader(message: PenaltyCounter, reader: jspb.BinaryReader): PenaltyCounter;
}

export namespace PenaltyCounter {
    export type AsObject = {
        validatorAddress: string,
        votePenaltyCounter?: oracle_oracle_pb.VotePenaltyCounter.AsObject,
    }
}
