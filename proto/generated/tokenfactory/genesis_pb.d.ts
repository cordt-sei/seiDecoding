// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as tokenfactory_authorityMetadata_pb from "../tokenfactory/authorityMetadata_pb";
import * as tokenfactory_params_pb from "../tokenfactory/params_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): tokenfactory_params_pb.Params | undefined;
    setParams(value?: tokenfactory_params_pb.Params): GenesisState;
    clearFactoryDenomsList(): void;
    getFactoryDenomsList(): Array<GenesisDenom>;
    setFactoryDenomsList(value: Array<GenesisDenom>): GenesisState;
    addFactoryDenoms(value?: GenesisDenom, index?: number): GenesisDenom;

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
        params?: tokenfactory_params_pb.Params.AsObject,
        factoryDenomsList: Array<GenesisDenom.AsObject>,
    }
}

export class GenesisDenom extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): GenesisDenom;

    hasAuthorityMetadata(): boolean;
    clearAuthorityMetadata(): void;
    getAuthorityMetadata(): tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata | undefined;
    setAuthorityMetadata(value?: tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata): GenesisDenom;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisDenom.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisDenom): GenesisDenom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisDenom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisDenom;
    static deserializeBinaryFromReader(message: GenesisDenom, reader: jspb.BinaryReader): GenesisDenom;
}

export namespace GenesisDenom {
    export type AsObject = {
        denom: string,
        authorityMetadata?: tokenfactory_authorityMetadata_pb.DenomAuthorityMetadata.AsObject,
    }
}
