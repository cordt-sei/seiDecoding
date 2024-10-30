// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../cosmos/base/query/v1beta1/pagination_pb";
import * as tokenfactory_authorityMetadata_pb from "../tokenfactory/authorityMetadata_pb";
import * as tokenfactory_params_pb from "../tokenfactory/params_pb";

export class QueryParamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
    export type AsObject = {
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): tokenfactory_params_pb.Params | undefined;
    setParams(value?: tokenfactory_params_pb.Params): QueryParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
    export type AsObject = {
        params?: tokenfactory_params_pb.Params.AsObject,
    }
}

export class QueryDenomAuthorityMetadataRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryDenomAuthorityMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomAuthorityMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomAuthorityMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomAuthorityMetadataRequest;
    static deserializeBinaryFromReader(message: QueryDenomAuthorityMetadataRequest, reader: jspb.BinaryReader): QueryDenomAuthorityMetadataRequest;
}

export namespace QueryDenomAuthorityMetadataRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryDenomAuthorityMetadataResponse extends jspb.Message { 

    hasAuthorityMetadata(): boolean;
    clearAuthorityMetadata(): void;
    getAuthorityMetadata(): tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata | undefined;
    setAuthorityMetadata(value?: tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata): QueryDenomAuthorityMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomAuthorityMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomAuthorityMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomAuthorityMetadataResponse;
    static deserializeBinaryFromReader(message: QueryDenomAuthorityMetadataResponse, reader: jspb.BinaryReader): QueryDenomAuthorityMetadataResponse;
}

export namespace QueryDenomAuthorityMetadataResponse {
    export type AsObject = {
        authorityMetadata?: tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata.AsObject,
    }
}

export class QueryDenomsFromCreatorRequest extends jspb.Message { 
    getCreator(): string;
    setCreator(value: string): QueryDenomsFromCreatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomsFromCreatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomsFromCreatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomsFromCreatorRequest;
    static deserializeBinaryFromReader(message: QueryDenomsFromCreatorRequest, reader: jspb.BinaryReader): QueryDenomsFromCreatorRequest;
}

export namespace QueryDenomsFromCreatorRequest {
    export type AsObject = {
        creator: string,
    }
}

export class QueryDenomsFromCreatorResponse extends jspb.Message { 
    clearDenomsList(): void;
    getDenomsList(): Array<string>;
    setDenomsList(value: Array<string>): QueryDenomsFromCreatorResponse;
    addDenoms(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomsFromCreatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomsFromCreatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomsFromCreatorResponse;
    static deserializeBinaryFromReader(message: QueryDenomsFromCreatorResponse, reader: jspb.BinaryReader): QueryDenomsFromCreatorResponse;
}

export namespace QueryDenomsFromCreatorResponse {
    export type AsObject = {
        denomsList: Array<string>,
    }
}

export class QueryDenomMetadataRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryDenomMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataRequest): QueryDenomMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataRequest;
    static deserializeBinaryFromReader(message: QueryDenomMetadataRequest, reader: jspb.BinaryReader): QueryDenomMetadataRequest;
}

export namespace QueryDenomMetadataRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryDenomMetadataResponse extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): QueryDenomMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataResponse): QueryDenomMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataResponse;
    static deserializeBinaryFromReader(message: QueryDenomMetadataResponse, reader: jspb.BinaryReader): QueryDenomMetadataResponse;
}

export namespace QueryDenomMetadataResponse {
    export type AsObject = {
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
    }
}

export class QueryDenomAllowListRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryDenomAllowListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomAllowListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomAllowListRequest): QueryDenomAllowListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomAllowListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomAllowListRequest;
    static deserializeBinaryFromReader(message: QueryDenomAllowListRequest, reader: jspb.BinaryReader): QueryDenomAllowListRequest;
}

export namespace QueryDenomAllowListRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryDenomAllowListResponse extends jspb.Message { 

    hasAllowList(): boolean;
    clearAllowList(): void;
    getAllowList(): cosmos_bank_v1beta1_bank_pb.AllowList | undefined;
    setAllowList(value?: cosmos_bank_v1beta1_bank_pb.AllowList): QueryDenomAllowListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomAllowListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomAllowListResponse): QueryDenomAllowListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomAllowListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomAllowListResponse;
    static deserializeBinaryFromReader(message: QueryDenomAllowListResponse, reader: jspb.BinaryReader): QueryDenomAllowListResponse;
}

export namespace QueryDenomAllowListResponse {
    export type AsObject = {
        allowList?: cosmos_bank_v1beta1_bank_pb.AllowList.AsObject,
    }
}
