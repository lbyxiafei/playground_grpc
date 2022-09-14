// package: GrpcBranch
// file: branch.proto

var branch_pb = require("./branch_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GrpcBranch = (function () {
  function GrpcBranch() {}
  GrpcBranch.serviceName = "GrpcBranch.GrpcBranch";
  return GrpcBranch;
}());

GrpcBranch.GetBranch = {
  methodName: "GetBranch",
  service: GrpcBranch,
  requestStream: false,
  responseStream: false,
  requestType: branch_pb.BranchRequest,
  responseType: branch_pb.BranchReply
};

exports.GrpcBranch = GrpcBranch;

function GrpcBranchClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GrpcBranchClient.prototype.getBranch = function getBranch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcBranch.GetBranch, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GrpcBranchClient = GrpcBranchClient;

