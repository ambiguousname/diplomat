// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

enum MyEnum {
  a,

  b,

  c,

  d,

  e,

  f;

  int get _underlying {
    switch (this) {
      case a:
        return -2;
      case b:
        return -1;
      case c:
        return 0;
      case d:
        return 1;
      case e:
        return 2;
      case f:
        return 3;
    }
  }

  int intoValue() {
    final result = _MyEnum_into_value(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _MyEnum_into_value =
    _capi<ffi.NativeFunction<ffi.Int8 Function(ffi.Int32)>>('MyEnum_into_value')
      .asFunction<int Function(int)>(isLeaf: true);
}
