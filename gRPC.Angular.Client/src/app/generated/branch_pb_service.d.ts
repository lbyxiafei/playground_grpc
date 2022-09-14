// package: GrpcBranch
// file: branch.proto

import * as branch_pb from "./branch_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GrpcBranchGetBranch = {
  readonly methodName: string;
  readonly service: typeof GrpcBranch;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof branch_pb.BranchRequest;
  readonly responseType: typeof branch_pb.BranchReply;
};

export class GrpcBranch {
  static readonly serviceName: string;
  static readonly GetBranch: GrpcBranchGetBranch;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GrpcBranchClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBranch(
    requestMessage: branch_pb.BranchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: branch_pb.BranchReply|null) => void
  ): UnaryResponse;
  getBranch(
    requestMessage: branch_pb.BranchRequest,
    callback: (error: ServiceError|null, responseMessage: branch_pb.BranchReply|null) => void
  ): UnaryResponse;
}

