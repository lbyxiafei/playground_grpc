using gRPC.Web.Server.Protos;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddGrpc();

var app = builder.Build();
app.UseGrpcWeb();

app.MapGet("/", () => "Hello World!");

app.MapGrpcService<HelloWorldImplService>().EnableGrpcWeb();

app.Run();
