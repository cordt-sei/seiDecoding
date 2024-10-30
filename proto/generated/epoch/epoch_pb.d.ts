// package: seiprotocol.seichain.epoch
// file: epoch/epoch.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Epoch extends jspb.Message { 

    hasGenesisTime(): boolean;
    clearGenesisTime(): void;
    getGenesisTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGenesisTime(value?: google_protobuf_timestamp_pb.Timestamp): Epoch;

    hasEpochDuration(): boolean;
    clearEpochDuration(): void;
    getEpochDuration(): google_protobuf_duration_pb.Duration | undefined;
    setEpochDuration(value?: google_protobuf_duration_pb.Duration): Epoch;
    getCurrentEpoch(): number;
    setCurrentEpoch(value: number): Epoch;

    hasCurrentEpochStartTime(): boolean;
    clearCurrentEpochStartTime(): void;
    getCurrentEpochStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCurrentEpochStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Epoch;
    getCurrentEpochHeight(): number;
    setCurrentEpochHeight(value: number): Epoch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Epoch.AsObject;
    static toObject(includeInstance: boolean, msg: Epoch): Epoch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Epoch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Epoch;
    static deserializeBinaryFromReader(message: Epoch, reader: jspb.BinaryReader): Epoch;
}

export namespace Epoch {
    export type AsObject = {
        genesisTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        epochDuration?: google_protobuf_duration_pb.Duration.AsObject,
        currentEpoch: number,
        currentEpochStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        currentEpochHeight: number,
    }
}
