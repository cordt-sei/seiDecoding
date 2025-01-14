// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/authorityMetadata.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";

export class DenomAuthorityMetadata extends jspb.Message { 
    getAdmin(): string;
    setAdmin(value: string): DenomAuthorityMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomAuthorityMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DenomAuthorityMetadata): DenomAuthorityMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomAuthorityMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomAuthorityMetadata;
    static deserializeBinaryFromReader(message: DenomAuthorityMetadata, reader: jspb.BinaryReader): DenomAuthorityMetadata;
}

export namespace DenomAuthorityMetadata {
    export type AsObject = {
        admin: string,
    }
}
