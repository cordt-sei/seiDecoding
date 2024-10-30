// package: seiprotocol.seichain.evm
// file: evm/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as evm_params_pb from "../evm/params_pb";

export class AddressAssociation extends jspb.Message { 
    getSeiAddress(): string;
    setSeiAddress(value: string): AddressAssociation;
    getEthAddress(): string;
    setEthAddress(value: string): AddressAssociation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressAssociation.AsObject;
    static toObject(includeInstance: boolean, msg: AddressAssociation): AddressAssociation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressAssociation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressAssociation;
    static deserializeBinaryFromReader(message: AddressAssociation, reader: jspb.BinaryReader): AddressAssociation;
}

export namespace AddressAssociation {
    export type AsObject = {
        seiAddress: string,
        ethAddress: string,
    }
}

export class Code extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Code;
    getCode(): Uint8Array | string;
    getCode_asU8(): Uint8Array;
    getCode_asB64(): string;
    setCode(value: Uint8Array | string): Code;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Code.AsObject;
    static toObject(includeInstance: boolean, msg: Code): Code.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Code, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Code;
    static deserializeBinaryFromReader(message: Code, reader: jspb.BinaryReader): Code;
}

export namespace Code {
    export type AsObject = {
        address: string,
        code: Uint8Array | string,
    }
}

export class ContractState extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ContractState;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ContractState;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): ContractState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractState.AsObject;
    static toObject(includeInstance: boolean, msg: ContractState): ContractState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractState;
    static deserializeBinaryFromReader(message: ContractState, reader: jspb.BinaryReader): ContractState;
}

export namespace ContractState {
    export type AsObject = {
        address: string,
        key: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export class Nonce extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Nonce;
    getNonce(): number;
    setNonce(value: number): Nonce;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nonce.AsObject;
    static toObject(includeInstance: boolean, msg: Nonce): Nonce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nonce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nonce;
    static deserializeBinaryFromReader(message: Nonce, reader: jspb.BinaryReader): Nonce;
}

export namespace Nonce {
    export type AsObject = {
        address: string,
        nonce: number,
    }
}

export class Serialized extends jspb.Message { 
    getPrefix(): Uint8Array | string;
    getPrefix_asU8(): Uint8Array;
    getPrefix_asB64(): string;
    setPrefix(value: Uint8Array | string): Serialized;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Serialized;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Serialized;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Serialized.AsObject;
    static toObject(includeInstance: boolean, msg: Serialized): Serialized.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Serialized, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Serialized;
    static deserializeBinaryFromReader(message: Serialized, reader: jspb.BinaryReader): Serialized;
}

export namespace Serialized {
    export type AsObject = {
        prefix: Uint8Array | string,
        key: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): evm_params_pb.Params | undefined;
    setParams(value?: evm_params_pb.Params): GenesisState;
    clearAddressAssociationsList(): void;
    getAddressAssociationsList(): Array<AddressAssociation>;
    setAddressAssociationsList(value: Array<AddressAssociation>): GenesisState;
    addAddressAssociations(value?: AddressAssociation, index?: number): AddressAssociation;
    clearCodesList(): void;
    getCodesList(): Array<Code>;
    setCodesList(value: Array<Code>): GenesisState;
    addCodes(value?: Code, index?: number): Code;
    clearStatesList(): void;
    getStatesList(): Array<ContractState>;
    setStatesList(value: Array<ContractState>): GenesisState;
    addStates(value?: ContractState, index?: number): ContractState;
    clearNoncesList(): void;
    getNoncesList(): Array<Nonce>;
    setNoncesList(value: Array<Nonce>): GenesisState;
    addNonces(value?: Nonce, index?: number): Nonce;
    clearSerializedList(): void;
    getSerializedList(): Array<Serialized>;
    setSerializedList(value: Array<Serialized>): GenesisState;
    addSerialized(value?: Serialized, index?: number): Serialized;

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
        params?: evm_params_pb.Params.AsObject,
        addressAssociationsList: Array<AddressAssociation.AsObject>,
        codesList: Array<Code.AsObject>,
        statesList: Array<ContractState.AsObject>,
        noncesList: Array<Nonce.AsObject>,
        serializedList: Array<Serialized.AsObject>,
    }
}
