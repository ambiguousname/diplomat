// generated by diplomat-tool

part of 'lib.g.dart';

enum DefaultEnum {
  a,

  b;

  factory DefaultEnum() {
    final result = _DefaultEnum_new();
    return DefaultEnum.values[result];
  }
}

@meta.RecordUse()
@ffi.Native<ffi.Int32 Function()>(isLeaf: true, symbol: 'DefaultEnum_new')
// ignore: non_constant_identifier_names
external int _DefaultEnum_new();