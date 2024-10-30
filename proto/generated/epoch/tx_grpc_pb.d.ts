// package: seiprotocol.seichain.epoch
// file: epoch/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as epoch_tx_pb from "../epoch/tx_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}


export const MsgService: IMsgService;

export interface IMsgServer {
}

export interface IMsgClient {
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
}
