// package: seiprotocol.seichain.oracle
// file: oracle/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class MsgAggregateExchangeRateVote extends jspb.Message { 
    getExchangeRates(): string;
    setExchangeRates(value: string): MsgAggregateExchangeRateVote;
    getFeeder(): string;
    setFeeder(value: string): MsgAggregateExchangeRateVote;
    getValidator(): string;
    setValidator(value: string): MsgAggregateExchangeRateVote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAggregateExchangeRateVote.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAggregateExchangeRateVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRateVote;
    static deserializeBinaryFromReader(message: MsgAggregateExchangeRateVote, reader: jspb.BinaryReader): MsgAggregateExchangeRateVote;
}

export namespace MsgAggregateExchangeRateVote {
    export type AsObject = {
        exchangeRates: string,
        feeder: string,
        validator: string,
    }
}

export class MsgAggregateExchangeRateVoteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAggregateExchangeRateVoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAggregateExchangeRateVoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRateVoteResponse;
    static deserializeBinaryFromReader(message: MsgAggregateExchangeRateVoteResponse, reader: jspb.BinaryReader): MsgAggregateExchangeRateVoteResponse;
}

export namespace MsgAggregateExchangeRateVoteResponse {
    export type AsObject = {
    }
}

export class MsgDelegateFeedConsent extends jspb.Message { 
    getOperator(): string;
    setOperator(value: string): MsgDelegateFeedConsent;
    getDelegate(): string;
    setDelegate(value: string): MsgDelegateFeedConsent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDelegateFeedConsent.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDelegateFeedConsent): MsgDelegateFeedConsent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDelegateFeedConsent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDelegateFeedConsent;
    static deserializeBinaryFromReader(message: MsgDelegateFeedConsent, reader: jspb.BinaryReader): MsgDelegateFeedConsent;
}

export namespace MsgDelegateFeedConsent {
    export type AsObject = {
        operator: string,
        delegate: string,
    }
}

export class MsgDelegateFeedConsentResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDelegateFeedConsentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDelegateFeedConsentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDelegateFeedConsentResponse;
    static deserializeBinaryFromReader(message: MsgDelegateFeedConsentResponse, reader: jspb.BinaryReader): MsgDelegateFeedConsentResponse;
}

export namespace MsgDelegateFeedConsentResponse {
    export type AsObject = {
    }
}
