// package: GrpcBranch
// file: branch.proto

import * as jspb from "google-protobuf";

export class BranchRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getType(): BranchTypesMap[keyof BranchTypesMap];
  setType(value: BranchTypesMap[keyof BranchTypesMap]): void;

  getReferenceVersion(): number;
  setReferenceVersion(value: number): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): FilterModels | undefined;
  setQuery(value?: FilterModels): void;

  getLoadType(): BranchLoadTypeMap[keyof BranchLoadTypeMap];
  setLoadType(value: BranchLoadTypeMap[keyof BranchLoadTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BranchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BranchRequest): BranchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BranchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BranchRequest;
  static deserializeBinaryFromReader(message: BranchRequest, reader: jspb.BinaryReader): BranchRequest;
}

export namespace BranchRequest {
  export type AsObject = {
    id: Uint8Array | string,
    type: BranchTypesMap[keyof BranchTypesMap],
    referenceVersion: number,
    query?: FilterModels.AsObject,
    loadType: BranchLoadTypeMap[keyof BranchLoadTypeMap],
  }
}

export class BranchReply extends jspb.Message {
  clearColumnsList(): void;
  getColumnsList(): Array<ColumnMetadata>;
  setColumnsList(value: Array<ColumnMetadata>): void;
  addColumns(value?: ColumnMetadata, index?: number): ColumnMetadata;

  clearRowsList(): void;
  getRowsList(): Array<Row>;
  setRowsList(value: Array<Row>): void;
  addRows(value?: Row, index?: number): Row;

  getMappingMap(): jspb.Map<number, string>;
  clearMappingMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BranchReply.AsObject;
  static toObject(includeInstance: boolean, msg: BranchReply): BranchReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BranchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BranchReply;
  static deserializeBinaryFromReader(message: BranchReply, reader: jspb.BinaryReader): BranchReply;
}

export namespace BranchReply {
  export type AsObject = {
    columnsList: Array<ColumnMetadata.AsObject>,
    rowsList: Array<Row.AsObject>,
    mappingMap: Array<[number, string]>,
  }
}

export class Row extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class FilterModels extends jspb.Message {
  getFilterModelMap(): jspb.Map<string, FilterEntry>;
  clearFilterModelMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterModels.AsObject;
  static toObject(includeInstance: boolean, msg: FilterModels): FilterModels.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterModels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterModels;
  static deserializeBinaryFromReader(message: FilterModels, reader: jspb.BinaryReader): FilterModels;
}

export namespace FilterModels {
  export type AsObject = {
    filterModelMap: Array<[string, FilterEntry.AsObject]>,
  }
}

export class FilterEntry extends jspb.Message {
  getFilterType(): FilterTypeMap[keyof FilterTypeMap];
  setFilterType(value: FilterTypeMap[keyof FilterTypeMap]): void;

  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  getType(): FilterOperationMap[keyof FilterOperationMap];
  setType(value: FilterOperationMap[keyof FilterOperationMap]): void;

  getFilter(): string;
  setFilter(value: string): void;

  getFilterTo(): string;
  setFilterTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterEntry.AsObject;
  static toObject(includeInstance: boolean, msg: FilterEntry): FilterEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterEntry;
  static deserializeBinaryFromReader(message: FilterEntry, reader: jspb.BinaryReader): FilterEntry;
}

export namespace FilterEntry {
  export type AsObject = {
    filterType: FilterTypeMap[keyof FilterTypeMap],
    valuesList: Array<string>,
    type: FilterOperationMap[keyof FilterOperationMap],
    filter: string,
    filterTo: string,
  }
}

export class ColumnMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIspk(): boolean;
  setIspk(value: boolean): void;

  getType(): ColumnTypeMap[keyof ColumnTypeMap];
  setType(value: ColumnTypeMap[keyof ColumnTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnMetadata): ColumnMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnMetadata;
  static deserializeBinaryFromReader(message: ColumnMetadata, reader: jspb.BinaryReader): ColumnMetadata;
}

export namespace ColumnMetadata {
  export type AsObject = {
    name: string,
    ispk: boolean,
    type: ColumnTypeMap[keyof ColumnTypeMap],
  }
}

export interface FilterTypeMap {
  TEXT: 0;
  NUMBER: 1;
  DATE: 2;
  SET: 3;
}

export const FilterType: FilterTypeMap;

export interface FilterOperationMap {
  CONTAINS: 0;
  GREATERTHAN: 1;
  LESSTHAN: 2;
  EQUALS: 3;
  LESSTHANOREQUAL: 4;
  GREATERTHANOREQUAL: 5;
  INRANGE: 6;
}

export const FilterOperation: FilterOperationMap;

export interface BranchTypesMap {
  CAPACITY_ORDER: 0;
}

export const BranchTypes: BranchTypesMap;

export interface BranchLoadTypeMap {
  NEW: 0;
  CACHE: 1;
  RELOAD: 2;
}

export const BranchLoadType: BranchLoadTypeMap;

export interface ColumnTypeMap {
  STRING: 0;
  DATETYPE: 1;
  INT: 2;
  DOUBLE: 3;
}

export const ColumnType: ColumnTypeMap;

