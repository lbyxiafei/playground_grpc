# Env
```conda activate grpc```

# Proto

> Add *.proto under src/app/protos 
> `cd` into the protos dir

## HelloWorld

```protoc --plugin=protoc-gen-ts="C:\Users\binyanli\Desktop\gRPC\gRPC.Angular.Client\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:../generated" --ts_out="service=grpc-web:../generated" helloworld.proto```

## Branch

```protoc --plugin=protoc-gen-ts="C:\Users\binyanli\Desktop\gRPC\gRPC.Angular.Client\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:../generated" --ts_out="service=grpc-web:../generated" branch.proto```

# Envoy
## Windows
> Install

```docker pull envoyproxy/envoy-windows-dev:41ad5bcf3ac29cbbacf4aabf9ab5c0d8f27591d6```
```docker run --rm envoyproxy/envoy-windows-dev:41ad5bcf3ac29cbbacf4aabf9ab5c0d8f27591d6 --version```

> Run

> Check at http://localhost:10000/

```docker run --rm -it -p '9901:9901' -p '10000:10000' 'envoyproxy/envoy-windows-dev:41ad5bcf3ac29cbbacf4aabf9ab5c0d8f27591d6'```

> Run with reconfig

```yaml envoy-override.yaml
admin:
  address:
    socket_address:
      address: 127.0.0.1
      port_value: 9902
```

```docker run --rm -it -p '9902:9901' -p '10000:10000' 'envoyproxy/envoy-windows-dev:41ad5bcf3ac29cbbacf4aabf9ab5c0d8f27591d6' --config-yaml "$(Get-Content -Raw envoy-override.yaml)"```

> Run with config yaml

```docker run --rm -it -p '9901:9901' -p '10000:10000' 'envoyproxy/envoy-windows-dev:41ad5bcf3ac29cbbacf4aabf9ab5c0d8f27591d6' --config-yaml "$(Get-Content -Raw envoy-grpc.yaml)"```

# Reference
- [A complete guidance](https://itnext.io/a-complete-guide-to-grpc-web-with-angular-and-net-c4ae2500bd24)












# GRPCAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
