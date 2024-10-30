// package: seiprotocol.seichain.evm
// file: evm/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class Whitelist extends jspb.Message { 
    clearHashesList(): void;
    getHashesList(): Array<string>;
    setHashesList(value: Array<string>): Whitelist;
    addHashes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Whitelist.AsObject;
    static toObject(includeInstance: boolean, msg: Whitelist): Whitelist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Whitelist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Whitelist;
    static deserializeBinaryFromReader(message: Whitelist, reader: jspb.BinaryReader): Whitelist;
}

export namespace Whitelist {
    export type AsObject = {
        hashesList: Array<string>,
    }
}

export class DeferredInfo extends jspb.Message { 
    getTxIndex(): number;
    setTxIndex(value: number): DeferredInfo;
    getTxHash(): Uint8Array | string;
    getTxHash_asU8(): Uint8Array;
    getTxHash_asB64(): string;
    setTxHash(value: Uint8Array | string): DeferredInfo;
    getTxBloom(): Uint8Array | string;
    getTxBloom_asU8(): Uint8Array;
    getTxBloom_asB64(): string;
    setTxBloom(value: Uint8Array | string): DeferredInfo;
    getSurplus(): string;
    setSurplus(value: string): DeferredInfo;
    getError(): string;
    setError(value: string): DeferredInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeferredInfo.AsObject;
    static toObject(includeInstance: boolean, msg: DeferredInfo): DeferredInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeferredInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeferredInfo;
    static deserializeBinaryFromReader(message: DeferredInfo, reader: jspb.BinaryReader): DeferredInfo;
}

export namespace DeferredInfo {
    export type AsObject = {
        txIndex: number,
        txHash: Uint8Array | string,
        txBloom: Uint8Array | string,
        surplus: string,
        error: string,
    }
}
