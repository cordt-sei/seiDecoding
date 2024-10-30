// package: seiprotocol.seichain.eth
// file: eth/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class AccessTuple extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AccessTuple;
    clearStorageKeysList(): void;
    getStorageKeysList(): Array<string>;
    setStorageKeysList(value: Array<string>): AccessTuple;
    addStorageKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTuple.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTuple): AccessTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTuple;
    static deserializeBinaryFromReader(message: AccessTuple, reader: jspb.BinaryReader): AccessTuple;
}

export namespace AccessTuple {
    export type AsObject = {
        address: string,
        storageKeysList: Array<string>,
    }
}

export class AssociateTx extends jspb.Message { 
    getV(): Uint8Array | string;
    getV_asU8(): Uint8Array;
    getV_asB64(): string;
    setV(value: Uint8Array | string): AssociateTx;
    getR(): Uint8Array | string;
    getR_asU8(): Uint8Array;
    getR_asB64(): string;
    setR(value: Uint8Array | string): AssociateTx;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): AssociateTx;
    getCustomMessage(): string;
    setCustomMessage(value: string): AssociateTx;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociateTx.AsObject;
    static toObject(includeInstance: boolean, msg: AssociateTx): AssociateTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociateTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociateTx;
    static deserializeBinaryFromReader(message: AssociateTx, reader: jspb.BinaryReader): AssociateTx;
}

export namespace AssociateTx {
    export type AsObject = {
        v: Uint8Array | string,
        r: Uint8Array | string,
        s: Uint8Array | string,
        customMessage: string,
    }
}

export class LegacyTx extends jspb.Message { 
    getNonce(): number;
    setNonce(value: number): LegacyTx;
    getGasPrice(): string;
    setGasPrice(value: string): LegacyTx;
    getGasLimit(): number;
    setGasLimit(value: number): LegacyTx;
    getTo(): string;
    setTo(value: string): LegacyTx;
    getValue(): string;
    setValue(value: string): LegacyTx;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): LegacyTx;
    getV(): Uint8Array | string;
    getV_asU8(): Uint8Array;
    getV_asB64(): string;
    setV(value: Uint8Array | string): LegacyTx;
    getR(): Uint8Array | string;
    getR_asU8(): Uint8Array;
    getR_asB64(): string;
    setR(value: Uint8Array | string): LegacyTx;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): LegacyTx;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegacyTx.AsObject;
    static toObject(includeInstance: boolean, msg: LegacyTx): LegacyTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegacyTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegacyTx;
    static deserializeBinaryFromReader(message: LegacyTx, reader: jspb.BinaryReader): LegacyTx;
}

export namespace LegacyTx {
    export type AsObject = {
        nonce: number,
        gasPrice: string,
        gasLimit: number,
        to: string,
        value: string,
        data: Uint8Array | string,
        v: Uint8Array | string,
        r: Uint8Array | string,
        s: Uint8Array | string,
    }
}

export class AccessListTx extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): AccessListTx;
    getNonce(): number;
    setNonce(value: number): AccessListTx;
    getGasPrice(): string;
    setGasPrice(value: string): AccessListTx;
    getGasLimit(): number;
    setGasLimit(value: number): AccessListTx;
    getTo(): string;
    setTo(value: string): AccessListTx;
    getValue(): string;
    setValue(value: string): AccessListTx;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): AccessListTx;
    clearAccessesList(): void;
    getAccessesList(): Array<AccessTuple>;
    setAccessesList(value: Array<AccessTuple>): AccessListTx;
    addAccesses(value?: AccessTuple, index?: number): AccessTuple;
    getV(): Uint8Array | string;
    getV_asU8(): Uint8Array;
    getV_asB64(): string;
    setV(value: Uint8Array | string): AccessListTx;
    getR(): Uint8Array | string;
    getR_asU8(): Uint8Array;
    getR_asB64(): string;
    setR(value: Uint8Array | string): AccessListTx;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): AccessListTx;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessListTx.AsObject;
    static toObject(includeInstance: boolean, msg: AccessListTx): AccessListTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessListTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessListTx;
    static deserializeBinaryFromReader(message: AccessListTx, reader: jspb.BinaryReader): AccessListTx;
}

export namespace AccessListTx {
    export type AsObject = {
        chainId: string,
        nonce: number,
        gasPrice: string,
        gasLimit: number,
        to: string,
        value: string,
        data: Uint8Array | string,
        accessesList: Array<AccessTuple.AsObject>,
        v: Uint8Array | string,
        r: Uint8Array | string,
        s: Uint8Array | string,
    }
}

export class DynamicFeeTx extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): DynamicFeeTx;
    getNonce(): number;
    setNonce(value: number): DynamicFeeTx;
    getGasTipCap(): string;
    setGasTipCap(value: string): DynamicFeeTx;
    getGasFeeCap(): string;
    setGasFeeCap(value: string): DynamicFeeTx;
    getGasLimit(): number;
    setGasLimit(value: number): DynamicFeeTx;
    getTo(): string;
    setTo(value: string): DynamicFeeTx;
    getValue(): string;
    setValue(value: string): DynamicFeeTx;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): DynamicFeeTx;
    clearAccessesList(): void;
    getAccessesList(): Array<AccessTuple>;
    setAccessesList(value: Array<AccessTuple>): DynamicFeeTx;
    addAccesses(value?: AccessTuple, index?: number): AccessTuple;
    getV(): Uint8Array | string;
    getV_asU8(): Uint8Array;
    getV_asB64(): string;
    setV(value: Uint8Array | string): DynamicFeeTx;
    getR(): Uint8Array | string;
    getR_asU8(): Uint8Array;
    getR_asB64(): string;
    setR(value: Uint8Array | string): DynamicFeeTx;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): DynamicFeeTx;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicFeeTx.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicFeeTx): DynamicFeeTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicFeeTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicFeeTx;
    static deserializeBinaryFromReader(message: DynamicFeeTx, reader: jspb.BinaryReader): DynamicFeeTx;
}

export namespace DynamicFeeTx {
    export type AsObject = {
        chainId: string,
        nonce: number,
        gasTipCap: string,
        gasFeeCap: string,
        gasLimit: number,
        to: string,
        value: string,
        data: Uint8Array | string,
        accessesList: Array<AccessTuple.AsObject>,
        v: Uint8Array | string,
        r: Uint8Array | string,
        s: Uint8Array | string,
    }
}

export class BlobTx extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): BlobTx;
    getNonce(): number;
    setNonce(value: number): BlobTx;
    getGasTipCap(): string;
    setGasTipCap(value: string): BlobTx;
    getGasFeeCap(): string;
    setGasFeeCap(value: string): BlobTx;
    getGasLimit(): number;
    setGasLimit(value: number): BlobTx;
    getTo(): string;
    setTo(value: string): BlobTx;
    getValue(): string;
    setValue(value: string): BlobTx;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): BlobTx;
    clearAccessesList(): void;
    getAccessesList(): Array<AccessTuple>;
    setAccessesList(value: Array<AccessTuple>): BlobTx;
    addAccesses(value?: AccessTuple, index?: number): AccessTuple;
    getBlobFeeCap(): string;
    setBlobFeeCap(value: string): BlobTx;
    clearBlobHashesList(): void;
    getBlobHashesList(): Array<Uint8Array | string>;
    getBlobHashesList_asU8(): Array<Uint8Array>;
    getBlobHashesList_asB64(): Array<string>;
    setBlobHashesList(value: Array<Uint8Array | string>): BlobTx;
    addBlobHashes(value: Uint8Array | string, index?: number): Uint8Array | string;

    hasSidecar(): boolean;
    clearSidecar(): void;
    getSidecar(): BlobTxSidecar | undefined;
    setSidecar(value?: BlobTxSidecar): BlobTx;
    getV(): Uint8Array | string;
    getV_asU8(): Uint8Array;
    getV_asB64(): string;
    setV(value: Uint8Array | string): BlobTx;
    getR(): Uint8Array | string;
    getR_asU8(): Uint8Array;
    getR_asB64(): string;
    setR(value: Uint8Array | string): BlobTx;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): BlobTx;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobTx.AsObject;
    static toObject(includeInstance: boolean, msg: BlobTx): BlobTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobTx;
    static deserializeBinaryFromReader(message: BlobTx, reader: jspb.BinaryReader): BlobTx;
}

export namespace BlobTx {
    export type AsObject = {
        chainId: string,
        nonce: number,
        gasTipCap: string,
        gasFeeCap: string,
        gasLimit: number,
        to: string,
        value: string,
        data: Uint8Array | string,
        accessesList: Array<AccessTuple.AsObject>,
        blobFeeCap: string,
        blobHashesList: Array<Uint8Array | string>,
        sidecar?: BlobTxSidecar.AsObject,
        v: Uint8Array | string,
        r: Uint8Array | string,
        s: Uint8Array | string,
    }
}

export class BlobTxSidecar extends jspb.Message { 
    clearBlobsList(): void;
    getBlobsList(): Array<Uint8Array | string>;
    getBlobsList_asU8(): Array<Uint8Array>;
    getBlobsList_asB64(): Array<string>;
    setBlobsList(value: Array<Uint8Array | string>): BlobTxSidecar;
    addBlobs(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearCommitmentsList(): void;
    getCommitmentsList(): Array<Uint8Array | string>;
    getCommitmentsList_asU8(): Array<Uint8Array>;
    getCommitmentsList_asB64(): Array<string>;
    setCommitmentsList(value: Array<Uint8Array | string>): BlobTxSidecar;
    addCommitments(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearProofsList(): void;
    getProofsList(): Array<Uint8Array | string>;
    getProofsList_asU8(): Array<Uint8Array>;
    getProofsList_asB64(): Array<string>;
    setProofsList(value: Array<Uint8Array | string>): BlobTxSidecar;
    addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobTxSidecar.AsObject;
    static toObject(includeInstance: boolean, msg: BlobTxSidecar): BlobTxSidecar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobTxSidecar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobTxSidecar;
    static deserializeBinaryFromReader(message: BlobTxSidecar, reader: jspb.BinaryReader): BlobTxSidecar;
}

export namespace BlobTxSidecar {
    export type AsObject = {
        blobsList: Array<Uint8Array | string>,
        commitmentsList: Array<Uint8Array | string>,
        proofsList: Array<Uint8Array | string>,
    }
}

export class ExtensionOptionsEthereumTx extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionOptionsEthereumTx.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtensionOptionsEthereumTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionOptionsEthereumTx;
    static deserializeBinaryFromReader(message: ExtensionOptionsEthereumTx, reader: jspb.BinaryReader): ExtensionOptionsEthereumTx;
}

export namespace ExtensionOptionsEthereumTx {
    export type AsObject = {
    }
}
