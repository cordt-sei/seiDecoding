// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../cosmos/bank/v1beta1/bank_pb";

export class MsgCreateDenom extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgCreateDenom;
    getSubdenom(): string;
    setSubdenom(value: string): MsgCreateDenom;

    hasAllowList(): boolean;
    clearAllowList(): void;
    getAllowList(): cosmos_bank_v1beta1_bank_pb.AllowList | undefined;
    setAllowList(value?: cosmos_bank_v1beta1_bank_pb.AllowList): MsgCreateDenom;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCreateDenom.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCreateDenom): MsgCreateDenom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCreateDenom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCreateDenom;
    static deserializeBinaryFromReader(message: MsgCreateDenom, reader: jspb.BinaryReader): MsgCreateDenom;
}

export namespace MsgCreateDenom {
    export type AsObject = {
        sender: string,
        subdenom: string,
        allowList?: cosmos_bank_v1beta1_bank_pb.AllowList.AsObject,
    }
}

export class MsgCreateDenomResponse extends jspb.Message { 
    getNewTokenDenom(): string;
    setNewTokenDenom(value: string): MsgCreateDenomResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCreateDenomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCreateDenomResponse): MsgCreateDenomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCreateDenomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCreateDenomResponse;
    static deserializeBinaryFromReader(message: MsgCreateDenomResponse, reader: jspb.BinaryReader): MsgCreateDenomResponse;
}

export namespace MsgCreateDenomResponse {
    export type AsObject = {
        newTokenDenom: string,
    }
}

export class MsgMint extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgMint;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgMint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMint.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMint): MsgMint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMint;
    static deserializeBinaryFromReader(message: MsgMint, reader: jspb.BinaryReader): MsgMint;
}

export namespace MsgMint {
    export type AsObject = {
        sender: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    }
}

export class MsgMintResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMintResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMintResponse): MsgMintResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMintResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMintResponse;
    static deserializeBinaryFromReader(message: MsgMintResponse, reader: jspb.BinaryReader): MsgMintResponse;
}

export namespace MsgMintResponse {
    export type AsObject = {
    }
}

export class MsgBurn extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgBurn;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgBurn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBurn.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBurn): MsgBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBurn;
    static deserializeBinaryFromReader(message: MsgBurn, reader: jspb.BinaryReader): MsgBurn;
}

export namespace MsgBurn {
    export type AsObject = {
        sender: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    }
}

export class MsgBurnResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBurnResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBurnResponse): MsgBurnResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBurnResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBurnResponse;
    static deserializeBinaryFromReader(message: MsgBurnResponse, reader: jspb.BinaryReader): MsgBurnResponse;
}

export namespace MsgBurnResponse {
    export type AsObject = {
    }
}

export class MsgChangeAdmin extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgChangeAdmin;
    getDenom(): string;
    setDenom(value: string): MsgChangeAdmin;
    getNewAdmin(): string;
    setNewAdmin(value: string): MsgChangeAdmin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgChangeAdmin.AsObject;
    static toObject(includeInstance: boolean, msg: MsgChangeAdmin): MsgChangeAdmin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgChangeAdmin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgChangeAdmin;
    static deserializeBinaryFromReader(message: MsgChangeAdmin, reader: jspb.BinaryReader): MsgChangeAdmin;
}

export namespace MsgChangeAdmin {
    export type AsObject = {
        sender: string,
        denom: string,
        newAdmin: string,
    }
}

export class MsgChangeAdminResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgChangeAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgChangeAdminResponse): MsgChangeAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgChangeAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgChangeAdminResponse;
    static deserializeBinaryFromReader(message: MsgChangeAdminResponse, reader: jspb.BinaryReader): MsgChangeAdminResponse;
}

export namespace MsgChangeAdminResponse {
    export type AsObject = {
    }
}

export class MsgSetDenomMetadata extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgSetDenomMetadata;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): MsgSetDenomMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadata): MsgSetDenomMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadata;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadata, reader: jspb.BinaryReader): MsgSetDenomMetadata;
}

export namespace MsgSetDenomMetadata {
    export type AsObject = {
        sender: string,
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
    }
}

export class MsgSetDenomMetadataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadataResponse;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadataResponse, reader: jspb.BinaryReader): MsgSetDenomMetadataResponse;
}

export namespace MsgSetDenomMetadataResponse {
    export type AsObject = {
    }
}

export class MsgUpdateDenom extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgUpdateDenom;
    getDenom(): string;
    setDenom(value: string): MsgUpdateDenom;

    hasAllowList(): boolean;
    clearAllowList(): void;
    getAllowList(): cosmos_bank_v1beta1_bank_pb.AllowList | undefined;
    setAllowList(value?: cosmos_bank_v1beta1_bank_pb.AllowList): MsgUpdateDenom;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateDenom.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateDenom): MsgUpdateDenom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateDenom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateDenom;
    static deserializeBinaryFromReader(message: MsgUpdateDenom, reader: jspb.BinaryReader): MsgUpdateDenom;
}

export namespace MsgUpdateDenom {
    export type AsObject = {
        sender: string,
        denom: string,
        allowList?: cosmos_bank_v1beta1_bank_pb.AllowList.AsObject,
    }
}

export class MsgUpdateDenomResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateDenomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateDenomResponse): MsgUpdateDenomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateDenomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateDenomResponse;
    static deserializeBinaryFromReader(message: MsgUpdateDenomResponse, reader: jspb.BinaryReader): MsgUpdateDenomResponse;
}

export namespace MsgUpdateDenomResponse {
    export type AsObject = {
    }
}
