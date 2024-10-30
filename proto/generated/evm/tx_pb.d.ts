// package: seiprotocol.seichain.evm
// file: evm/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../cosmos/base/v1beta1/coin_pb";
import * as evm_enums_pb from "../evm/enums_pb";
import * as evm_receipt_pb from "../evm/receipt_pb";

export class MsgEVMTransaction extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): MsgEVMTransaction;
    getDerived(): Uint8Array | string;
    getDerived_asU8(): Uint8Array;
    getDerived_asB64(): string;
    setDerived(value: Uint8Array | string): MsgEVMTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgEVMTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: MsgEVMTransaction): MsgEVMTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgEVMTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgEVMTransaction;
    static deserializeBinaryFromReader(message: MsgEVMTransaction, reader: jspb.BinaryReader): MsgEVMTransaction;
}

export namespace MsgEVMTransaction {
    export type AsObject = {
        data?: google_protobuf_any_pb.Any.AsObject,
        derived: Uint8Array | string,
    }
}

export class MsgEVMTransactionResponse extends jspb.Message { 
    getGasUsed(): number;
    setGasUsed(value: number): MsgEVMTransactionResponse;
    getVmError(): string;
    setVmError(value: string): MsgEVMTransactionResponse;
    getReturnData(): Uint8Array | string;
    getReturnData_asU8(): Uint8Array;
    getReturnData_asB64(): string;
    setReturnData(value: Uint8Array | string): MsgEVMTransactionResponse;
    getHash(): string;
    setHash(value: string): MsgEVMTransactionResponse;
    clearLogsList(): void;
    getLogsList(): Array<evm_receipt_pb.Log>;
    setLogsList(value: Array<evm_receipt_pb.Log>): MsgEVMTransactionResponse;
    addLogs(value?: evm_receipt_pb.Log, index?: number): evm_receipt_pb.Log;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgEVMTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgEVMTransactionResponse): MsgEVMTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgEVMTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgEVMTransactionResponse;
    static deserializeBinaryFromReader(message: MsgEVMTransactionResponse, reader: jspb.BinaryReader): MsgEVMTransactionResponse;
}

export namespace MsgEVMTransactionResponse {
    export type AsObject = {
        gasUsed: number,
        vmError: string,
        returnData: Uint8Array | string,
        hash: string,
        logsList: Array<evm_receipt_pb.Log.AsObject>,
    }
}

export class MsgInternalEVMCall extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgInternalEVMCall;
    getValue(): string;
    setValue(value: string): MsgInternalEVMCall;
    getTo(): string;
    setTo(value: string): MsgInternalEVMCall;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgInternalEVMCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInternalEVMCall.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInternalEVMCall): MsgInternalEVMCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInternalEVMCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInternalEVMCall;
    static deserializeBinaryFromReader(message: MsgInternalEVMCall, reader: jspb.BinaryReader): MsgInternalEVMCall;
}

export namespace MsgInternalEVMCall {
    export type AsObject = {
        sender: string,
        value: string,
        to: string,
        data: Uint8Array | string,
    }
}

export class MsgInternalEVMCallResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInternalEVMCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInternalEVMCallResponse): MsgInternalEVMCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInternalEVMCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInternalEVMCallResponse;
    static deserializeBinaryFromReader(message: MsgInternalEVMCallResponse, reader: jspb.BinaryReader): MsgInternalEVMCallResponse;
}

export namespace MsgInternalEVMCallResponse {
    export type AsObject = {
    }
}

export class MsgInternalEVMDelegateCall extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgInternalEVMDelegateCall;
    getCodehash(): Uint8Array | string;
    getCodehash_asU8(): Uint8Array;
    getCodehash_asB64(): string;
    setCodehash(value: Uint8Array | string): MsgInternalEVMDelegateCall;
    getTo(): string;
    setTo(value: string): MsgInternalEVMDelegateCall;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgInternalEVMDelegateCall;
    getFromcontract(): string;
    setFromcontract(value: string): MsgInternalEVMDelegateCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInternalEVMDelegateCall.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInternalEVMDelegateCall): MsgInternalEVMDelegateCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInternalEVMDelegateCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInternalEVMDelegateCall;
    static deserializeBinaryFromReader(message: MsgInternalEVMDelegateCall, reader: jspb.BinaryReader): MsgInternalEVMDelegateCall;
}

export namespace MsgInternalEVMDelegateCall {
    export type AsObject = {
        sender: string,
        codehash: Uint8Array | string,
        to: string,
        data: Uint8Array | string,
        fromcontract: string,
    }
}

export class MsgInternalEVMDelegateCallResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInternalEVMDelegateCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInternalEVMDelegateCallResponse): MsgInternalEVMDelegateCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInternalEVMDelegateCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInternalEVMDelegateCallResponse;
    static deserializeBinaryFromReader(message: MsgInternalEVMDelegateCallResponse, reader: jspb.BinaryReader): MsgInternalEVMDelegateCallResponse;
}

export namespace MsgInternalEVMDelegateCallResponse {
    export type AsObject = {
    }
}

export class MsgSend extends jspb.Message { 
    getFromAddress(): string;
    setFromAddress(value: string): MsgSend;
    getToAddress(): string;
    setToAddress(value: string): MsgSend;
    clearAmountList(): void;
    getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgSend;
    addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSend.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSend): MsgSend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSend;
    static deserializeBinaryFromReader(message: MsgSend, reader: jspb.BinaryReader): MsgSend;
}

export namespace MsgSend {
    export type AsObject = {
        fromAddress: string,
        toAddress: string,
        amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class MsgSendResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSendResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSendResponse): MsgSendResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSendResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSendResponse;
    static deserializeBinaryFromReader(message: MsgSendResponse, reader: jspb.BinaryReader): MsgSendResponse;
}

export namespace MsgSendResponse {
    export type AsObject = {
    }
}

export class MsgRegisterPointer extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgRegisterPointer;
    getPointerType(): evm_enums_pb.PointerType;
    setPointerType(value: evm_enums_pb.PointerType): MsgRegisterPointer;
    getErcAddress(): string;
    setErcAddress(value: string): MsgRegisterPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRegisterPointer.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRegisterPointer): MsgRegisterPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRegisterPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRegisterPointer;
    static deserializeBinaryFromReader(message: MsgRegisterPointer, reader: jspb.BinaryReader): MsgRegisterPointer;
}

export namespace MsgRegisterPointer {
    export type AsObject = {
        sender: string,
        pointerType: evm_enums_pb.PointerType,
        ercAddress: string,
    }
}

export class MsgRegisterPointerResponse extends jspb.Message { 
    getPointerAddress(): string;
    setPointerAddress(value: string): MsgRegisterPointerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRegisterPointerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRegisterPointerResponse): MsgRegisterPointerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRegisterPointerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRegisterPointerResponse;
    static deserializeBinaryFromReader(message: MsgRegisterPointerResponse, reader: jspb.BinaryReader): MsgRegisterPointerResponse;
}

export namespace MsgRegisterPointerResponse {
    export type AsObject = {
        pointerAddress: string,
    }
}

export class MsgAssociateContractAddress extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgAssociateContractAddress;
    getAddress(): string;
    setAddress(value: string): MsgAssociateContractAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssociateContractAddress.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssociateContractAddress): MsgAssociateContractAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssociateContractAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssociateContractAddress;
    static deserializeBinaryFromReader(message: MsgAssociateContractAddress, reader: jspb.BinaryReader): MsgAssociateContractAddress;
}

export namespace MsgAssociateContractAddress {
    export type AsObject = {
        sender: string,
        address: string,
    }
}

export class MsgAssociateContractAddressResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssociateContractAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssociateContractAddressResponse): MsgAssociateContractAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssociateContractAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssociateContractAddressResponse;
    static deserializeBinaryFromReader(message: MsgAssociateContractAddressResponse, reader: jspb.BinaryReader): MsgAssociateContractAddressResponse;
}

export namespace MsgAssociateContractAddressResponse {
    export type AsObject = {
    }
}

export class MsgAssociate extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgAssociate;
    getCustomMessage(): string;
    setCustomMessage(value: string): MsgAssociate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssociate.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssociate): MsgAssociate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssociate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssociate;
    static deserializeBinaryFromReader(message: MsgAssociate, reader: jspb.BinaryReader): MsgAssociate;
}

export namespace MsgAssociate {
    export type AsObject = {
        sender: string,
        customMessage: string,
    }
}

export class MsgAssociateResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssociateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssociateResponse): MsgAssociateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssociateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssociateResponse;
    static deserializeBinaryFromReader(message: MsgAssociateResponse, reader: jspb.BinaryReader): MsgAssociateResponse;
}

export namespace MsgAssociateResponse {
    export type AsObject = {
    }
}
