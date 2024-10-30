// package: seiprotocol.seichain.mint
// file: mint/v1beta1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as mint_v1beta1_mint_pb from "../../mint/v1beta1/mint_pb";

export class GenesisState extends jspb.Message { 

    hasMinter(): boolean;
    clearMinter(): void;
    getMinter(): mint_v1beta1_mint_pb.Minter | undefined;
    setMinter(value?: mint_v1beta1_mint_pb.Minter): GenesisState;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): mint_v1beta1_mint_pb.Params | undefined;
    setParams(value?: mint_v1beta1_mint_pb.Params): GenesisState;

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
        minter?: mint_v1beta1_mint_pb.Minter.AsObject,
        params?: mint_v1beta1_mint_pb.Params.AsObject,
    }
}
