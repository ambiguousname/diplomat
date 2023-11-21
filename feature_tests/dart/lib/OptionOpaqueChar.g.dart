// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

final class OptionOpaqueChar implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  OptionOpaqueChar._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer = ffi.NativeFinalizer(_capi('OptionOpaqueChar_destroy'));

  void assertChar(int ch) {
    _OptionOpaqueChar_assert_char(_underlying, ch);
  }

  // ignore: non_constant_identifier_names
  static final _OptionOpaqueChar_assert_char =
    _capi<ffi.NativeFunction<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>>('OptionOpaqueChar_assert_char')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);
}
