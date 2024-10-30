// package: seiprotocol.seichain.evm
// file: evm/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as evm_enums_pb from "../evm/enums_pb";

export class QuerySeiAddressByEVMAddressRequest extends jspb.Message { 
    getEvmAddress(): string;
    setEvmAddress(value: string): QuerySeiAddressByEVMAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySeiAddressByEVMAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySeiAddressByEVMAddressRequest): QuerySeiAddressByEVMAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySeiAddressByEVMAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySeiAddressByEVMAddressRequest;
    static deserializeBinaryFromReader(message: QuerySeiAddressByEVMAddressRequest, reader: jspb.BinaryReader): QuerySeiAddressByEVMAddressRequest;
}

export namespace QuerySeiAddressByEVMAddressRequest {
    export type AsObject = {
        evmAddress: string,
    }
}

export class QuerySeiAddressByEVMAddressResponse extends jspb.Message { 
    getSeiAddress(): string;
    setSeiAddress(value: string): QuerySeiAddressByEVMAddressResponse;
    getAssociated(): boolean;
    setAssociated(value: boolean): QuerySeiAddressByEVMAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySeiAddressByEVMAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySeiAddressByEVMAddressResponse): QuerySeiAddressByEVMAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySeiAddressByEVMAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySeiAddressByEVMAddressResponse;
    static deserializeBinaryFromReader(message: QuerySeiAddressByEVMAddressResponse, reader: jspb.BinaryReader): QuerySeiAddressByEVMAddressResponse;
}

export namespace QuerySeiAddressByEVMAddressResponse {
    export type AsObject = {
        seiAddress: string,
        associated: boolean,
    }
}

export class QueryEVMAddressBySeiAddressRequest extends jspb.Message { 
    getSeiAddress(): string;
    setSeiAddress(value: string): QueryEVMAddressBySeiAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEVMAddressBySeiAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEVMAddressBySeiAddressRequest): QueryEVMAddressBySeiAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEVMAddressBySeiAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEVMAddressBySeiAddressRequest;
    static deserializeBinaryFromReader(message: QueryEVMAddressBySeiAddressRequest, reader: jspb.BinaryReader): QueryEVMAddressBySeiAddressRequest;
}

export namespace QueryEVMAddressBySeiAddressRequest {
    export type AsObject = {
        seiAddress: string,
    }
}

export class QueryEVMAddressBySeiAddressResponse extends jspb.Message { 
    getEvmAddress(): string;
    setEvmAddress(value: string): QueryEVMAddressBySeiAddressResponse;
    getAssociated(): boolean;
    setAssociated(value: boolean): QueryEVMAddressBySeiAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEVMAddressBySeiAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEVMAddressBySeiAddressResponse): QueryEVMAddressBySeiAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEVMAddressBySeiAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEVMAddressBySeiAddressResponse;
    static deserializeBinaryFromReader(message: QueryEVMAddressBySeiAddressResponse, reader: jspb.BinaryReader): QueryEVMAddressBySeiAddressResponse;
}

export namespace QueryEVMAddressBySeiAddressResponse {
    export type AsObject = {
        evmAddress: string,
        associated: boolean,
    }
}

export class QueryStaticCallRequest extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): QueryStaticCallRequest;
    getTo(): string;
    setTo(value: string): QueryStaticCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStaticCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStaticCallRequest): QueryStaticCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStaticCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStaticCallRequest;
    static deserializeBinaryFromReader(message: QueryStaticCallRequest, reader: jspb.BinaryReader): QueryStaticCallRequest;
}

export namespace QueryStaticCallRequest {
    export type AsObject = {
        data: Uint8Array | string,
        to: string,
    }
}

export class QueryStaticCallResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): QueryStaticCallResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStaticCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStaticCallResponse): QueryStaticCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStaticCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStaticCallResponse;
    static deserializeBinaryFromReader(message: QueryStaticCallResponse, reader: jspb.BinaryReader): QueryStaticCallResponse;
}

export namespace QueryStaticCallResponse {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class QueryPointerRequest extends jspb.Message { 
    getPointerType(): evm_enums_pb.PointerType;
    setPointerType(value: evm_enums_pb.PointerType): QueryPointerRequest;
    getPointee(): string;
    setPointee(value: string): QueryPointerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointerRequest): QueryPointerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointerRequest;
    static deserializeBinaryFromReader(message: QueryPointerRequest, reader: jspb.BinaryReader): QueryPointerRequest;
}

export namespace QueryPointerRequest {
    export type AsObject = {
        pointerType: evm_enums_pb.PointerType,
        pointee: string,
    }
}

export class QueryPointerResponse extends jspb.Message { 
    getPointer(): string;
    setPointer(value: string): QueryPointerResponse;
    getVersion(): number;
    setVersion(value: number): QueryPointerResponse;
    getExists(): boolean;
    setExists(value: boolean): QueryPointerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointerResponse): QueryPointerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointerResponse;
    static deserializeBinaryFromReader(message: QueryPointerResponse, reader: jspb.BinaryReader): QueryPointerResponse;
}

export namespace QueryPointerResponse {
    export type AsObject = {
        pointer: string,
        version: number,
        exists: boolean,
    }
}

export class QueryPointerVersionRequest extends jspb.Message { 
    getPointerType(): evm_enums_pb.PointerType;
    setPointerType(value: evm_enums_pb.PointerType): QueryPointerVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointerVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointerVersionRequest): QueryPointerVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointerVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointerVersionRequest;
    static deserializeBinaryFromReader(message: QueryPointerVersionRequest, reader: jspb.BinaryReader): QueryPointerVersionRequest;
}

export namespace QueryPointerVersionRequest {
    export type AsObject = {
        pointerType: evm_enums_pb.PointerType,
    }
}

export class QueryPointerVersionResponse extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): QueryPointerVersionResponse;
    getCwCodeId(): number;
    setCwCodeId(value: number): QueryPointerVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointerVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointerVersionResponse): QueryPointerVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointerVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointerVersionResponse;
    static deserializeBinaryFromReader(message: QueryPointerVersionResponse, reader: jspb.BinaryReader): QueryPointerVersionResponse;
}

export namespace QueryPointerVersionResponse {
    export type AsObject = {
        version: number,
        cwCodeId: number,
    }
}

export class QueryPointeeRequest extends jspb.Message { 
    getPointerType(): evm_enums_pb.PointerType;
    setPointerType(value: evm_enums_pb.PointerType): QueryPointeeRequest;
    getPointer(): string;
    setPointer(value: string): QueryPointeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointeeRequest): QueryPointeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointeeRequest;
    static deserializeBinaryFromReader(message: QueryPointeeRequest, reader: jspb.BinaryReader): QueryPointeeRequest;
}

export namespace QueryPointeeRequest {
    export type AsObject = {
        pointerType: evm_enums_pb.PointerType,
        pointer: string,
    }
}

export class QueryPointeeResponse extends jspb.Message { 
    getPointee(): string;
    setPointee(value: string): QueryPointeeResponse;
    getVersion(): number;
    setVersion(value: number): QueryPointeeResponse;
    getExists(): boolean;
    setExists(value: boolean): QueryPointeeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryPointeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryPointeeResponse): QueryPointeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryPointeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryPointeeResponse;
    static deserializeBinaryFromReader(message: QueryPointeeResponse, reader: jspb.BinaryReader): QueryPointeeResponse;
}

export namespace QueryPointeeResponse {
    export type AsObject = {
        pointee: string,
        version: number,
        exists: boolean,
    }
}
