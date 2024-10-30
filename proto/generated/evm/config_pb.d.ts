// package: seiprotocol.seichain.evm
// file: evm/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class ChainConfig extends jspb.Message { 
    getCancunTime(): number;
    setCancunTime(value: number): ChainConfig;
    getPragueTime(): number;
    setPragueTime(value: number): ChainConfig;
    getVerkleTime(): number;
    setVerkleTime(value: number): ChainConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChainConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ChainConfig): ChainConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChainConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChainConfig;
    static deserializeBinaryFromReader(message: ChainConfig, reader: jspb.BinaryReader): ChainConfig;
}

export namespace ChainConfig {
    export type AsObject = {
        cancunTime: number,
        pragueTime: number,
        verkleTime: number,
    }
}
