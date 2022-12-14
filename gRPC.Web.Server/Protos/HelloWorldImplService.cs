using Grpc.Core;

namespace gRPC.Web.Server.Protos
{
    public class HelloWorldImplService : Greeter.GreeterBase
    {
        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            var res = new HelloReply
            {
                Message = "Hello," + request.Name + "!"
            };
            return Task.FromResult(res);
        }
    }
}
