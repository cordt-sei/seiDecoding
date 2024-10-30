// package: seiprotocol.seichain.evm
// file: evm/receipt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class Log extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Log;
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): Log;
    addTopics(value: string, index?: number): string;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Log;
    getIndex(): number;
    setIndex(value: number): Log;
    getSynthetic(): boolean;
    setSynthetic(value: boolean): Log;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
    export type AsObject = {
        address: string,
        topicsList: Array<string>,
        data: Uint8Array | string,
        index: number,
        synthetic: boolean,
    }
}

export class Receipt extends jspb.Message { 
    getTxType(): number;
    setTxType(value: number): Receipt;
    getCumulativeGasUsed(): number;
    setCumulativeGasUsed(value: number): Receipt;
    getContractAddress(): string;
    setContractAddress(value: string): Receipt;
    getTxHashHex(): string;
    setTxHashHex(value: string): Receipt;
    getGasUsed(): number;
    setGasUsed(value: number): Receipt;
    getEffectiveGasPrice(): number;
    setEffectiveGasPrice(value: number): Receipt;
    getBlockNumber(): number;
    setBlockNumber(value: number): Receipt;
    getTransactionIndex(): number;
    setTransactionIndex(value: number): Receipt;
    getStatus(): number;
    setStatus(value: number): Receipt;
    getFrom(): string;
    setFrom(value: string): Receipt;
    getTo(): string;
    setTo(value: string): Receipt;
    getVmError(): string;
    setVmError(value: string): Receipt;
    clearLogsList(): void;
    getLogsList(): Array<Log>;
    setLogsList(value: Array<Log>): Receipt;
    addLogs(value?: Log, index?: number): Log;
    getLogsbloom(): Uint8Array | string;
    getLogsbloom_asU8(): Uint8Array;
    getLogsbloom_asB64(): string;
    setLogsbloom(value: Uint8Array | string): Receipt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Receipt.AsObject;
    static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Receipt;
    static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
    export type AsObject = {
        txType: number,
        cumulativeGasUsed: number,
        contractAddress: string,
        txHashHex: string,
        gasUsed: number,
        effectiveGasPrice: number,
        blockNumber: number,
        transactionIndex: number,
        status: number,
        from: string,
        to: string,
        vmError: string,
        logsList: Array<Log.AsObject>,
        logsbloom: Uint8Array | string,
    }
}
