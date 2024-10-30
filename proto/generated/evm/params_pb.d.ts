// package: seiprotocol.seichain.evm
// file: evm/params.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as evm_config_pb from "../evm/config_pb";

export class Params extends jspb.Message { 
    getPriorityNormalizer(): string;
    setPriorityNormalizer(value: string): Params;
    getBaseFeePerGas(): string;
    setBaseFeePerGas(value: string): Params;
    getMinimumFeePerGas(): string;
    setMinimumFeePerGas(value: string): Params;
    clearWhitelistedCwCodeHashesForDelegateCallList(): void;
    getWhitelistedCwCodeHashesForDelegateCallList(): Array<Uint8Array | string>;
    getWhitelistedCwCodeHashesForDelegateCallList_asU8(): Array<Uint8Array>;
    getWhitelistedCwCodeHashesForDelegateCallList_asB64(): Array<string>;
    setWhitelistedCwCodeHashesForDelegateCallList(value: Array<Uint8Array | string>): Params;
    addWhitelistedCwCodeHashesForDelegateCall(value: Uint8Array | string, index?: number): Uint8Array | string;
    getDeliverTxHookWasmGasLimit(): number;
    setDeliverTxHookWasmGasLimit(value: number): Params;

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
        priorityNormalizer: string,
        baseFeePerGas: string,
        minimumFeePerGas: string,
        whitelistedCwCodeHashesForDelegateCallList: Array<Uint8Array | string>,
        deliverTxHookWasmGasLimit: number,
    }
}
