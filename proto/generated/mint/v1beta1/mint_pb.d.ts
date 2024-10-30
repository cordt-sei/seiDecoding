// package: seiprotocol.seichain.mint
// file: mint/v1beta1/mint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";

export class Minter extends jspb.Message { 
    getStartDate(): string;
    setStartDate(value: string): Minter;
    getEndDate(): string;
    setEndDate(value: string): Minter;
    getDenom(): string;
    setDenom(value: string): Minter;
    getTotalMintAmount(): number;
    setTotalMintAmount(value: number): Minter;
    getRemainingMintAmount(): number;
    setRemainingMintAmount(value: number): Minter;
    getLastMintAmount(): number;
    setLastMintAmount(value: number): Minter;
    getLastMintDate(): string;
    setLastMintDate(value: string): Minter;
    getLastMintHeight(): number;
    setLastMintHeight(value: number): Minter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Minter.AsObject;
    static toObject(includeInstance: boolean, msg: Minter): Minter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Minter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Minter;
    static deserializeBinaryFromReader(message: Minter, reader: jspb.BinaryReader): Minter;
}

export namespace Minter {
    export type AsObject = {
        startDate: string,
        endDate: string,
        denom: string,
        totalMintAmount: number,
        remainingMintAmount: number,
        lastMintAmount: number,
        lastMintDate: string,
        lastMintHeight: number,
    }
}

export class ScheduledTokenRelease extends jspb.Message { 
    getStartDate(): string;
    setStartDate(value: string): ScheduledTokenRelease;
    getEndDate(): string;
    setEndDate(value: string): ScheduledTokenRelease;
    getTokenReleaseAmount(): number;
    setTokenReleaseAmount(value: number): ScheduledTokenRelease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduledTokenRelease.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduledTokenRelease): ScheduledTokenRelease.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduledTokenRelease, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduledTokenRelease;
    static deserializeBinaryFromReader(message: ScheduledTokenRelease, reader: jspb.BinaryReader): ScheduledTokenRelease;
}

export namespace ScheduledTokenRelease {
    export type AsObject = {
        startDate: string,
        endDate: string,
        tokenReleaseAmount: number,
    }
}

export class Params extends jspb.Message { 
    getMintDenom(): string;
    setMintDenom(value: string): Params;
    clearTokenReleaseScheduleList(): void;
    getTokenReleaseScheduleList(): Array<ScheduledTokenRelease>;
    setTokenReleaseScheduleList(value: Array<ScheduledTokenRelease>): Params;
    addTokenReleaseSchedule(value?: ScheduledTokenRelease, index?: number): ScheduledTokenRelease;

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
        mintDenom: string,
        tokenReleaseScheduleList: Array<ScheduledTokenRelease.AsObject>,
    }
}

export class Version2Minter extends jspb.Message { 
    getLastMintAmount(): string;
    setLastMintAmount(value: string): Version2Minter;
    getLastMintDate(): string;
    setLastMintDate(value: string): Version2Minter;
    getLastMintHeight(): number;
    setLastMintHeight(value: number): Version2Minter;
    getDenom(): string;
    setDenom(value: string): Version2Minter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version2Minter.AsObject;
    static toObject(includeInstance: boolean, msg: Version2Minter): Version2Minter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version2Minter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version2Minter;
    static deserializeBinaryFromReader(message: Version2Minter, reader: jspb.BinaryReader): Version2Minter;
}

export namespace Version2Minter {
    export type AsObject = {
        lastMintAmount: string,
        lastMintDate: string,
        lastMintHeight: number,
        denom: string,
    }
}

export class Version2ScheduledTokenRelease extends jspb.Message { 
    getDate(): string;
    setDate(value: string): Version2ScheduledTokenRelease;
    getTokenReleaseAmount(): number;
    setTokenReleaseAmount(value: number): Version2ScheduledTokenRelease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version2ScheduledTokenRelease.AsObject;
    static toObject(includeInstance: boolean, msg: Version2ScheduledTokenRelease): Version2ScheduledTokenRelease.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version2ScheduledTokenRelease, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version2ScheduledTokenRelease;
    static deserializeBinaryFromReader(message: Version2ScheduledTokenRelease, reader: jspb.BinaryReader): Version2ScheduledTokenRelease;
}

export namespace Version2ScheduledTokenRelease {
    export type AsObject = {
        date: string,
        tokenReleaseAmount: number,
    }
}

export class Version2Params extends jspb.Message { 
    getMintDenom(): string;
    setMintDenom(value: string): Version2Params;
    clearTokenReleaseScheduleList(): void;
    getTokenReleaseScheduleList(): Array<Version2ScheduledTokenRelease>;
    setTokenReleaseScheduleList(value: Array<Version2ScheduledTokenRelease>): Version2Params;
    addTokenReleaseSchedule(value?: Version2ScheduledTokenRelease, index?: number): Version2ScheduledTokenRelease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version2Params.AsObject;
    static toObject(includeInstance: boolean, msg: Version2Params): Version2Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version2Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version2Params;
    static deserializeBinaryFromReader(message: Version2Params, reader: jspb.BinaryReader): Version2Params;
}

export namespace Version2Params {
    export type AsObject = {
        mintDenom: string,
        tokenReleaseScheduleList: Array<Version2ScheduledTokenRelease.AsObject>,
    }
}
