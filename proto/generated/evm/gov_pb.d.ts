// package: seiprotocol.seichain.evm
// file: evm/gov.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";

export class AddERCNativePointerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddERCNativePointerProposal;
    getDescription(): string;
    setDescription(value: string): AddERCNativePointerProposal;
    getToken(): string;
    setToken(value: string): AddERCNativePointerProposal;
    getPointer(): string;
    setPointer(value: string): AddERCNativePointerProposal;
    getVersion(): number;
    setVersion(value: number): AddERCNativePointerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddERCNativePointerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddERCNativePointerProposal): AddERCNativePointerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddERCNativePointerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddERCNativePointerProposal;
    static deserializeBinaryFromReader(message: AddERCNativePointerProposal, reader: jspb.BinaryReader): AddERCNativePointerProposal;
}

export namespace AddERCNativePointerProposal {
    export type AsObject = {
        title: string,
        description: string,
        token: string,
        pointer: string,
        version: number,
    }
}

export class AddERCCW20PointerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddERCCW20PointerProposal;
    getDescription(): string;
    setDescription(value: string): AddERCCW20PointerProposal;
    getPointee(): string;
    setPointee(value: string): AddERCCW20PointerProposal;
    getPointer(): string;
    setPointer(value: string): AddERCCW20PointerProposal;
    getVersion(): number;
    setVersion(value: number): AddERCCW20PointerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddERCCW20PointerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddERCCW20PointerProposal): AddERCCW20PointerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddERCCW20PointerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddERCCW20PointerProposal;
    static deserializeBinaryFromReader(message: AddERCCW20PointerProposal, reader: jspb.BinaryReader): AddERCCW20PointerProposal;
}

export namespace AddERCCW20PointerProposal {
    export type AsObject = {
        title: string,
        description: string,
        pointee: string,
        pointer: string,
        version: number,
    }
}

export class AddERCCW721PointerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddERCCW721PointerProposal;
    getDescription(): string;
    setDescription(value: string): AddERCCW721PointerProposal;
    getPointee(): string;
    setPointee(value: string): AddERCCW721PointerProposal;
    getPointer(): string;
    setPointer(value: string): AddERCCW721PointerProposal;
    getVersion(): number;
    setVersion(value: number): AddERCCW721PointerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddERCCW721PointerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddERCCW721PointerProposal): AddERCCW721PointerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddERCCW721PointerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddERCCW721PointerProposal;
    static deserializeBinaryFromReader(message: AddERCCW721PointerProposal, reader: jspb.BinaryReader): AddERCCW721PointerProposal;
}

export namespace AddERCCW721PointerProposal {
    export type AsObject = {
        title: string,
        description: string,
        pointee: string,
        pointer: string,
        version: number,
    }
}

export class AddCWERC20PointerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddCWERC20PointerProposal;
    getDescription(): string;
    setDescription(value: string): AddCWERC20PointerProposal;
    getPointee(): string;
    setPointee(value: string): AddCWERC20PointerProposal;
    getPointer(): string;
    setPointer(value: string): AddCWERC20PointerProposal;
    getVersion(): number;
    setVersion(value: number): AddCWERC20PointerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCWERC20PointerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddCWERC20PointerProposal): AddCWERC20PointerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCWERC20PointerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCWERC20PointerProposal;
    static deserializeBinaryFromReader(message: AddCWERC20PointerProposal, reader: jspb.BinaryReader): AddCWERC20PointerProposal;
}

export namespace AddCWERC20PointerProposal {
    export type AsObject = {
        title: string,
        description: string,
        pointee: string,
        pointer: string,
        version: number,
    }
}

export class AddCWERC721PointerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddCWERC721PointerProposal;
    getDescription(): string;
    setDescription(value: string): AddCWERC721PointerProposal;
    getPointee(): string;
    setPointee(value: string): AddCWERC721PointerProposal;
    getPointer(): string;
    setPointer(value: string): AddCWERC721PointerProposal;
    getVersion(): number;
    setVersion(value: number): AddCWERC721PointerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCWERC721PointerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddCWERC721PointerProposal): AddCWERC721PointerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCWERC721PointerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCWERC721PointerProposal;
    static deserializeBinaryFromReader(message: AddCWERC721PointerProposal, reader: jspb.BinaryReader): AddCWERC721PointerProposal;
}

export namespace AddCWERC721PointerProposal {
    export type AsObject = {
        title: string,
        description: string,
        pointee: string,
        pointer: string,
        version: number,
    }
}

export class AddERCNativePointerProposalV2 extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddERCNativePointerProposalV2;
    getDescription(): string;
    setDescription(value: string): AddERCNativePointerProposalV2;
    getToken(): string;
    setToken(value: string): AddERCNativePointerProposalV2;
    getName(): string;
    setName(value: string): AddERCNativePointerProposalV2;
    getSymbol(): string;
    setSymbol(value: string): AddERCNativePointerProposalV2;
    getDecimals(): number;
    setDecimals(value: number): AddERCNativePointerProposalV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddERCNativePointerProposalV2.AsObject;
    static toObject(includeInstance: boolean, msg: AddERCNativePointerProposalV2): AddERCNativePointerProposalV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddERCNativePointerProposalV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddERCNativePointerProposalV2;
    static deserializeBinaryFromReader(message: AddERCNativePointerProposalV2, reader: jspb.BinaryReader): AddERCNativePointerProposalV2;
}

export namespace AddERCNativePointerProposalV2 {
    export type AsObject = {
        title: string,
        description: string,
        token: string,
        name: string,
        symbol: string,
        decimals: number,
    }
}
