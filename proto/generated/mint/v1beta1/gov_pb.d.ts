// package: seiprotocol.seichain.mint
// file: mint/v1beta1/gov.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as mint_v1beta1_mint_pb from "../../mint/v1beta1/mint_pb";

export class UpdateMinterProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UpdateMinterProposal;
    getDescription(): string;
    setDescription(value: string): UpdateMinterProposal;

    hasMinter(): boolean;
    clearMinter(): void;
    getMinter(): mint_v1beta1_mint_pb.Minter | undefined;
    setMinter(value?: mint_v1beta1_mint_pb.Minter): UpdateMinterProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMinterProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMinterProposal): UpdateMinterProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMinterProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMinterProposal;
    static deserializeBinaryFromReader(message: UpdateMinterProposal, reader: jspb.BinaryReader): UpdateMinterProposal;
}

export namespace UpdateMinterProposal {
    export type AsObject = {
        title: string,
        description: string,
        minter?: mint_v1beta1_mint_pb.Minter.AsObject,
    }
}
