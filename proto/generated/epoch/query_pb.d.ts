// package: seiprotocol.seichain.epoch
// file: epoch/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../cosmos/base/query/v1beta1/pagination_pb";
import * as epoch_params_pb from "../epoch/params_pb";
import * as epoch_epoch_pb from "../epoch/epoch_pb";

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
    getParams(): epoch_params_pb.Params | undefined;
    setParams(value?: epoch_params_pb.Params): QueryParamsResponse;

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
        params?: epoch_params_pb.Params.AsObject,
    }
}

export class QueryEpochRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEpochRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEpochRequest): QueryEpochRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEpochRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEpochRequest;
    static deserializeBinaryFromReader(message: QueryEpochRequest, reader: jspb.BinaryReader): QueryEpochRequest;
}

export namespace QueryEpochRequest {
    export type AsObject = {
    }
}

export class QueryEpochResponse extends jspb.Message { 

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): epoch_epoch_pb.Epoch | undefined;
    setEpoch(value?: epoch_epoch_pb.Epoch): QueryEpochResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEpochResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEpochResponse): QueryEpochResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEpochResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEpochResponse;
    static deserializeBinaryFromReader(message: QueryEpochResponse, reader: jspb.BinaryReader): QueryEpochResponse;
}

export namespace QueryEpochResponse {
    export type AsObject = {
        epoch?: epoch_epoch_pb.Epoch.AsObject,
    }
}
