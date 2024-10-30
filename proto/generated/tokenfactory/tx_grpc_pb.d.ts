// package: seiprotocol.seichain.tokenfactory
// file: tokenfactory/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tokenfactory_tx_pb from "../tokenfactory/tx_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../cosmos/bank/v1beta1/bank_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createDenom: IMsgService_ICreateDenom;
    updateDenom: IMsgService_IUpdateDenom;
    mint: IMsgService_IMint;
    burn: IMsgService_IBurn;
    changeAdmin: IMsgService_IChangeAdmin;
    setDenomMetadata: IMsgService_ISetDenomMetadata;
}

interface IMsgService_ICreateDenom extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgCreateDenom, tokenfactory_tx_pb.MsgCreateDenomResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/CreateDenom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgCreateDenom>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgCreateDenom>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgCreateDenomResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgCreateDenomResponse>;
}
interface IMsgService_IUpdateDenom extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgUpdateDenom, tokenfactory_tx_pb.MsgUpdateDenomResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/UpdateDenom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgUpdateDenom>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgUpdateDenom>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgUpdateDenomResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgUpdateDenomResponse>;
}
interface IMsgService_IMint extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgMint, tokenfactory_tx_pb.MsgMintResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/Mint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgMint>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgMint>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgMintResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgMintResponse>;
}
interface IMsgService_IBurn extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgBurn, tokenfactory_tx_pb.MsgBurnResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/Burn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgBurn>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgBurn>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgBurnResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgBurnResponse>;
}
interface IMsgService_IChangeAdmin extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgChangeAdmin, tokenfactory_tx_pb.MsgChangeAdminResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/ChangeAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgChangeAdmin>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgChangeAdmin>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgChangeAdminResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgChangeAdminResponse>;
}
interface IMsgService_ISetDenomMetadata extends grpc.MethodDefinition<tokenfactory_tx_pb.MsgSetDenomMetadata, tokenfactory_tx_pb.MsgSetDenomMetadataResponse> {
    path: "/seiprotocol.seichain.tokenfactory.Msg/SetDenomMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tokenfactory_tx_pb.MsgSetDenomMetadata>;
    requestDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgSetDenomMetadata>;
    responseSerialize: grpc.serialize<tokenfactory_tx_pb.MsgSetDenomMetadataResponse>;
    responseDeserialize: grpc.deserialize<tokenfactory_tx_pb.MsgSetDenomMetadataResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    createDenom: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgCreateDenom, tokenfactory_tx_pb.MsgCreateDenomResponse>;
    updateDenom: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgUpdateDenom, tokenfactory_tx_pb.MsgUpdateDenomResponse>;
    mint: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgMint, tokenfactory_tx_pb.MsgMintResponse>;
    burn: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgBurn, tokenfactory_tx_pb.MsgBurnResponse>;
    changeAdmin: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgChangeAdmin, tokenfactory_tx_pb.MsgChangeAdminResponse>;
    setDenomMetadata: grpc.handleUnaryCall<tokenfactory_tx_pb.MsgSetDenomMetadata, tokenfactory_tx_pb.MsgSetDenomMetadataResponse>;
}

export interface IMsgClient {
    createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    mint(request: tokenfactory_tx_pb.MsgMint, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    mint(request: tokenfactory_tx_pb.MsgMint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    mint(request: tokenfactory_tx_pb.MsgMint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    burn(request: tokenfactory_tx_pb.MsgBurn, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    burn(request: tokenfactory_tx_pb.MsgBurn, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    burn(request: tokenfactory_tx_pb.MsgBurn, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    public createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    public createDenom(request: tokenfactory_tx_pb.MsgCreateDenom, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgCreateDenomResponse) => void): grpc.ClientUnaryCall;
    public updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    public updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    public updateDenom(request: tokenfactory_tx_pb.MsgUpdateDenom, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgUpdateDenomResponse) => void): grpc.ClientUnaryCall;
    public mint(request: tokenfactory_tx_pb.MsgMint, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public mint(request: tokenfactory_tx_pb.MsgMint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public mint(request: tokenfactory_tx_pb.MsgMint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public burn(request: tokenfactory_tx_pb.MsgBurn, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public burn(request: tokenfactory_tx_pb.MsgBurn, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public burn(request: tokenfactory_tx_pb.MsgBurn, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    public changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    public changeAdmin(request: tokenfactory_tx_pb.MsgChangeAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgChangeAdminResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: tokenfactory_tx_pb.MsgSetDenomMetadata, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tokenfactory_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
}
