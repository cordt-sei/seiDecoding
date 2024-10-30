// package: seiprotocol.seichain.mint
// file: mint/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as mint_v1beta1_mint_pb from "../../mint/v1beta1/mint_pb";

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
    getParams(): mint_v1beta1_mint_pb.Params | undefined;
    setParams(value?: mint_v1beta1_mint_pb.Params): QueryParamsResponse;

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
        params?: mint_v1beta1_mint_pb.Params.AsObject,
    }
}

export class QueryMinterRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMinterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMinterRequest): QueryMinterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMinterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMinterRequest;
    static deserializeBinaryFromReader(message: QueryMinterRequest, reader: jspb.BinaryReader): QueryMinterRequest;
}

export namespace QueryMinterRequest {
    export type AsObject = {
    }
}

export class QueryMinterResponse extends jspb.Message { 
    getStartDate(): string;
    setStartDate(value: string): QueryMinterResponse;
    getEndDate(): string;
    setEndDate(value: string): QueryMinterResponse;
    getDenom(): string;
    setDenom(value: string): QueryMinterResponse;
    getTotalMintAmount(): number;
    setTotalMintAmount(value: number): QueryMinterResponse;
    getRemainingMintAmount(): number;
    setRemainingMintAmount(value: number): QueryMinterResponse;
    getLastMintAmount(): number;
    setLastMintAmount(value: number): QueryMinterResponse;
    getLastMintDate(): string;
    setLastMintDate(value: string): QueryMinterResponse;
    getLastMintHeight(): number;
    setLastMintHeight(value: number): QueryMinterResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMinterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMinterResponse): QueryMinterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMinterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMinterResponse;
    static deserializeBinaryFromReader(message: QueryMinterResponse, reader: jspb.BinaryReader): QueryMinterResponse;
}

export namespace QueryMinterResponse {
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
