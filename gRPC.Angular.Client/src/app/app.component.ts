import { Component } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import { Request as RpcRequest, Response as RpcResponse } from './generated/stream_pb';
import { StreamService } from './generated/stream_pb_service';

import { HelloRequest, HelloReply } from './generated/helloworld_pb';
import { Greeter, GreeterClient } from './generated/helloworld_pb_service';

import { BranchRequest, BranchReply, FilterModels, BranchTypes, BranchLoadType } from './generated/branch_pb';
import { GrpcBranch } from './generated/branch_pb_service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gRPC.Angular.Client';

  grpcClient!: Request;

  messages: string[] = [];

  testBranch() {
    console.log("test branch");
    var enc = new TextEncoder();

    const request = new BranchRequest();
    request.setId(enc.encode("test"));
    request.setQuery(new FilterModels());
    request.setType(BranchTypes.CAPACITY_ORDER);
    request.setReferenceVersion(1);
    request.setLoadType(BranchLoadType.NEW);


    this.grpcClient = grpc.invoke(GrpcBranch.GetBranch, {
      request: request,
      // host: `http://localhost:5265/branch`,
      host: `https://localhost:7001`,
      //host: `https://localhost:7001`,
      metadata: new grpc.Metadata({
        Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21zYXp1cmVjbG91ZC5vbm1pY3Jvc29mdC5jb20vcGxhbm5lcndvcmtiZW5jaCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE2NjMyNjExMDQsIm5iZiI6MTY2MzI2MTEwNCwiZXhwIjoxNjYzMzQ3ODA0LCJhaW8iOiJFMlpnWU9BdzFyeW1kdUw4cTAwLzVqejQvejIxRmdBPSIsImFwcGlkIjoiYmM0YTJhNGUtZmJlYi00YWYyLTllYzUtMjRmMDNiMjg2YWZjIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsIm9pZCI6ImQ1YTAyYTMwLWQxMDUtNDdhMC04OTM2LWUyOGRkNWRiOWY1NyIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSeUYxdTI1ZEhnRkxxckFnNTVxN1VLZ2FBQUEuIiwic3ViIjoiZDVhMDJhMzAtZDEwNS00N2EwLTg5MzYtZTI4ZGQ1ZGI5ZjU3IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidXRpIjoieTNGcE1BamhWVWVFdWUxNl9hQ09BQSIsInZlciI6IjEuMCJ9.Os7MurIPf8rDNxKHvT0kaV0-vCeaI-9lUFmaj0CcwhieYsynksEmH1nbq7Nz-nPR3rdaPjvUVfyBwsP1F0Q95IRV2OiKSU32UJX-nDgumKrTxa9dNPfa4xzWQmJlczBCs4FFKs7M7NZ0oDNRD4wRaMlc1SC7n1KkfTg_1f_g65T72M8OXwpWLb6JOd7uNVAxoWXHygLpKA__-FZ8YTVwU6phEACTqeQwMVHIqrrnu2dFzQfET71B6Vunjr1NxAr3-gYOimP7z-sXF4rHOgLzU0-JzIaVVPxnNXmfgxD7dd_nIAfwyCbe0Z3s9Mz4_UFHG5mh71o3Pinpd1lfLkAwPw'}`,
      }),
      onMessage: (message: BranchReply) => {
        const data = message.toObject();
        this.messages.push("branch received!");
        console.dir(data);
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log('gRPC web request finished wihtout any error');
        } else {
          console.log('an error occured\n', 'code:', code, '\n', 'msg:', msg, '\n', 'trailers:', trailers);
        }
      },
    });
  }

  toUTF8Array(str:string) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
            utf8.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

  testBranch2() {
    const request = new BranchRequest();

    this.grpcClient = grpc.invoke(GrpcBranch.GetBranch, {
      request: request,
      // host: `http://localhost:5265/branch`,
      host: `https://localhost:7001`,
      //host: `https://localhost:7001`,
      metadata: new grpc.Metadata({
        Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21zYXp1cmVjbG91ZC5vbm1pY3Jvc29mdC5jb20vcGxhbm5lcndvcmtiZW5jaCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE2NjMyNjExMDQsIm5iZiI6MTY2MzI2MTEwNCwiZXhwIjoxNjYzMzQ3ODA0LCJhaW8iOiJFMlpnWU9BdzFyeW1kdUw4cTAwLzVqejQvejIxRmdBPSIsImFwcGlkIjoiYmM0YTJhNGUtZmJlYi00YWYyLTllYzUtMjRmMDNiMjg2YWZjIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsIm9pZCI6ImQ1YTAyYTMwLWQxMDUtNDdhMC04OTM2LWUyOGRkNWRiOWY1NyIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSeUYxdTI1ZEhnRkxxckFnNTVxN1VLZ2FBQUEuIiwic3ViIjoiZDVhMDJhMzAtZDEwNS00N2EwLTg5MzYtZTI4ZGQ1ZGI5ZjU3IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidXRpIjoieTNGcE1BamhWVWVFdWUxNl9hQ09BQSIsInZlciI6IjEuMCJ9.Os7MurIPf8rDNxKHvT0kaV0-vCeaI-9lUFmaj0CcwhieYsynksEmH1nbq7Nz-nPR3rdaPjvUVfyBwsP1F0Q95IRV2OiKSU32UJX-nDgumKrTxa9dNPfa4xzWQmJlczBCs4FFKs7M7NZ0oDNRD4wRaMlc1SC7n1KkfTg_1f_g65T72M8OXwpWLb6JOd7uNVAxoWXHygLpKA__-FZ8YTVwU6phEACTqeQwMVHIqrrnu2dFzQfET71B6Vunjr1NxAr3-gYOimP7z-sXF4rHOgLzU0-JzIaVVPxnNXmfgxD7dd_nIAfwyCbe0Z3s9Mz4_UFHG5mh71o3Pinpd1lfLkAwPw'}`,
      }),
      onMessage: (message: BranchReply) => {
        const data = message.toObject();
        this.messages.push("branch received!");
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log('gRPC web request finished wihtout any error');
        } else {
          console.log('an error occured\n', 'code:', code, '\n', 'msg:', msg, '\n', 'trailers:', trailers);
        }
      },
    });
  }

  testBranch3() {
    console.log("test branch");
    const request = new BranchRequest();

    this.grpcClient = grpc.invoke(GrpcBranch.GetBranch, {
      request: request,
      // host: `http://localhost:5265/branch`,
      host: `https://localhost:7001`,
      //host: `https://localhost:7001`,
      metadata: new grpc.Metadata({
        Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21zYXp1cmVjbG91ZC5vbm1pY3Jvc29mdC5jb20vcGxhbm5lcndvcmtiZW5jaCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE2NjMyNjExMDQsIm5iZiI6MTY2MzI2MTEwNCwiZXhwIjoxNjYzMzQ3ODA0LCJhaW8iOiJFMlpnWU9BdzFyeW1kdUw4cTAwLzVqejQvejIxRmdBPSIsImFwcGlkIjoiYmM0YTJhNGUtZmJlYi00YWYyLTllYzUtMjRmMDNiMjg2YWZjIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsIm9pZCI6ImQ1YTAyYTMwLWQxMDUtNDdhMC04OTM2LWUyOGRkNWRiOWY1NyIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSeUYxdTI1ZEhnRkxxckFnNTVxN1VLZ2FBQUEuIiwic3ViIjoiZDVhMDJhMzAtZDEwNS00N2EwLTg5MzYtZTI4ZGQ1ZGI5ZjU3IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidXRpIjoieTNGcE1BamhWVWVFdWUxNl9hQ09BQSIsInZlciI6IjEuMCJ9.Os7MurIPf8rDNxKHvT0kaV0-vCeaI-9lUFmaj0CcwhieYsynksEmH1nbq7Nz-nPR3rdaPjvUVfyBwsP1F0Q95IRV2OiKSU32UJX-nDgumKrTxa9dNPfa4xzWQmJlczBCs4FFKs7M7NZ0oDNRD4wRaMlc1SC7n1KkfTg_1f_g65T72M8OXwpWLb6JOd7uNVAxoWXHygLpKA__-FZ8YTVwU6phEACTqeQwMVHIqrrnu2dFzQfET71B6Vunjr1NxAr3-gYOimP7z-sXF4rHOgLzU0-JzIaVVPxnNXmfgxD7dd_nIAfwyCbe0Z3s9Mz4_UFHG5mh71o3Pinpd1lfLkAwPw'}`,
      }),
      onMessage: (message: BranchReply) => {
        const data = message.toObject();
        this.messages.push("branch received!");
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log('gRPC web request finished wihtout any error');
        } else {
          console.log('an error occured\n', 'code:', code, '\n', 'msg:', msg, '\n', 'trailers:', trailers);
        }
      },
    });
  }

  sayHello() {
    const request = new HelloRequest();
    request.setName('Tortoise');

    this.grpcClient = grpc.invoke(Greeter.SayHello, {
      request: request,
      //host: `http://localhost:5265/grpc/grpc-web-service`,
      // host: `http://localhost:6666`,
      host: `http://localhost:9999`,
      // host: `http://localhost:50051`,
      onMessage: (message: HelloReply) => {
        const data = message.toObject();
        this.messages.push(data.message);
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log('gRPC web request finished wihtout any error');
        } else {
          console.log('an error occured\n', 'code:', code, '\n', 'msg:', msg, '\n', 'trailers:', trailers);
        }
      },
    });
  }

  startStream() {
    const request = new RpcRequest();
    request.setId(1);

    this.grpcClient = grpc.invoke(StreamService.FetchResponse, {
      request: request,
      host: `https://localhost:50051/grpc/grpc-web-service`,
      onMessage: (message: RpcResponse) => {
        // This section works when server writes something to stream.

        const data = message.toObject();
        this.messages.push(data.result);
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        // This section works when server close connection.

        if (code == grpc.Code.OK) {
          console.log('request finished wihtout any error');
        } else {
          console.log('an error occured', code, msg, trailers);
        }

      },
    });
  }

  stopStream() {
    this.grpcClient.close();
  }

  clear(){
    this.messages = [];
  }
}
