// package: seiprotocol.seichain.epoch
// file: epoch/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as epoch_params_pb from "../epoch/params_pb";
import * as epoch_epoch_pb from "../epoch/epoch_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): epoch_params_pb.Params | undefined;
    setParams(value?: epoch_params_pb.Params): GenesisState;

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): epoch_epoch_pb.Epoch | undefined;
    setEpoch(value?: epoch_epoch_pb.Epoch): GenesisState;

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
        params?: epoch_params_pb.Params.AsObject,
        epoch?: epoch_epoch_pb.Epoch.AsObject,
    }
}
