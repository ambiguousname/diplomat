// generated by diplomat-tool

part of 'lib.g.dart';

final class OptionOpaque implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  OptionOpaque._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_OptionOpaque_destroy));

  static OptionOpaque? new_(int i) {
    final result = _OptionOpaque_new(i);
    return result.address == 0 ? null : OptionOpaque._fromFfi(result, []);
  }

  static OptionOpaque? newNone() {
    final result = _OptionOpaque_new_none();
    return result.address == 0 ? null : OptionOpaque._fromFfi(result, []);
  }

  static OptionStruct? returns() {
    final result = _OptionOpaque_returns();
    if (!result.isOk) {
      return null;
    }
    return OptionStruct._fromFfi(result.union.ok);
  }

  int? optionIsize() {
    final result = _OptionOpaque_option_isize(_ffi);
    if (!result.isOk) {
      return null;
    }
    return result.union.ok;
  }

  int? optionUsize() {
    final result = _OptionOpaque_option_usize(_ffi);
    if (!result.isOk) {
      return null;
    }
    return result.union.ok;
  }

  int? optionI32() {
    final result = _OptionOpaque_option_i32(_ffi);
    if (!result.isOk) {
      return null;
    }
    return result.union.ok;
  }

  int? optionU32() {
    final result = _OptionOpaque_option_u32(_ffi);
    if (!result.isOk) {
      return null;
    }
    return result.union.ok;
  }

  static OptionStruct newStruct() {
    final result = _OptionOpaque_new_struct();
    return OptionStruct._fromFfi(result);
  }

  static OptionStruct newStructNones() {
    final result = _OptionOpaque_new_struct_nones();
    return OptionStruct._fromFfi(result);
  }

  void assertInteger(int i) {
    _OptionOpaque_assert_integer(_ffi, i);
  }

  static bool optionOpaqueArgument(OptionOpaque? arg) {
    final result = _OptionOpaque_option_opaque_argument(arg?._ffi ?? ffi.Pointer.fromAddress(0));
    return result;
  }

  static int? acceptsOptionU8(int? arg) {
    final result = _OptionOpaque_accepts_option_u8(arg != null ? _ResultUint8Void.ok(arg) : _ResultUint8Void.err());
    if (!result.isOk) {
      return null;
    }
    return result.union.ok;
  }

  static OptionEnum? acceptsOptionEnum(OptionEnum? arg) {
    final result = _OptionOpaque_accepts_option_enum(arg != null ? _ResultInt32Void.ok(arg.index) : _ResultInt32Void.err());
    if (!result.isOk) {
      return null;
    }
    return OptionEnum.values[result.union.ok];
  }

  static OptionInputStruct? acceptsOptionInputStruct(OptionInputStruct? arg) {
    final temp = _FinalizedArena();
    final result = _OptionOpaque_accepts_option_input_struct(arg != null ? _ResultOptionInputStructFfiVoid.ok(arg._toFfi(temp.arena)) : _ResultOptionInputStructFfiVoid.err());
    if (!result.isOk) {
      return null;
    }
    return OptionInputStruct._fromFfi(result.union.ok);
  }

  static OptionInputStruct returnsOptionInputStruct() {
    final result = _OptionOpaque_returns_option_input_struct();
    return OptionInputStruct._fromFfi(result);
  }
}

@meta.ResourceIdentifier('OptionOpaque_destroy')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'OptionOpaque_destroy')
// ignore: non_constant_identifier_names
external void _OptionOpaque_destroy(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('OptionOpaque_new')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Int32)>(isLeaf: true, symbol: 'OptionOpaque_new')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _OptionOpaque_new(int i);

@meta.ResourceIdentifier('OptionOpaque_new_none')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function()>(isLeaf: true, symbol: 'OptionOpaque_new_none')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _OptionOpaque_new_none();

@meta.ResourceIdentifier('OptionOpaque_returns')
@ffi.Native<_ResultOptionStructFfiVoid Function()>(isLeaf: true, symbol: 'OptionOpaque_returns')
// ignore: non_constant_identifier_names
external _ResultOptionStructFfiVoid _OptionOpaque_returns();

@meta.ResourceIdentifier('OptionOpaque_option_isize')
@ffi.Native<_ResultIntPtrVoid Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'OptionOpaque_option_isize')
// ignore: non_constant_identifier_names
external _ResultIntPtrVoid _OptionOpaque_option_isize(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('OptionOpaque_option_usize')
@ffi.Native<_ResultSizeVoid Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'OptionOpaque_option_usize')
// ignore: non_constant_identifier_names
external _ResultSizeVoid _OptionOpaque_option_usize(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('OptionOpaque_option_i32')
@ffi.Native<_ResultInt32Void Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'OptionOpaque_option_i32')
// ignore: non_constant_identifier_names
external _ResultInt32Void _OptionOpaque_option_i32(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('OptionOpaque_option_u32')
@ffi.Native<_ResultUint32Void Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'OptionOpaque_option_u32')
// ignore: non_constant_identifier_names
external _ResultUint32Void _OptionOpaque_option_u32(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('OptionOpaque_new_struct')
@ffi.Native<_OptionStructFfi Function()>(isLeaf: true, symbol: 'OptionOpaque_new_struct')
// ignore: non_constant_identifier_names
external _OptionStructFfi _OptionOpaque_new_struct();

@meta.ResourceIdentifier('OptionOpaque_new_struct_nones')
@ffi.Native<_OptionStructFfi Function()>(isLeaf: true, symbol: 'OptionOpaque_new_struct_nones')
// ignore: non_constant_identifier_names
external _OptionStructFfi _OptionOpaque_new_struct_nones();

@meta.ResourceIdentifier('OptionOpaque_assert_integer')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Int32)>(isLeaf: true, symbol: 'OptionOpaque_assert_integer')
// ignore: non_constant_identifier_names
external void _OptionOpaque_assert_integer(ffi.Pointer<ffi.Opaque> self, int i);

@meta.ResourceIdentifier('OptionOpaque_option_opaque_argument')
@ffi.Native<ffi.Bool Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'OptionOpaque_option_opaque_argument')
// ignore: non_constant_identifier_names
external bool _OptionOpaque_option_opaque_argument(ffi.Pointer<ffi.Opaque> arg);

@meta.ResourceIdentifier('OptionOpaque_accepts_option_u8')
@ffi.Native<_ResultUint8Void Function(_ResultUint8Void)>(isLeaf: true, symbol: 'OptionOpaque_accepts_option_u8')
// ignore: non_constant_identifier_names
external _ResultUint8Void _OptionOpaque_accepts_option_u8(_ResultUint8Void arg);

@meta.ResourceIdentifier('OptionOpaque_accepts_option_enum')
@ffi.Native<_ResultInt32Void Function(_ResultInt32Void)>(isLeaf: true, symbol: 'OptionOpaque_accepts_option_enum')
// ignore: non_constant_identifier_names
external _ResultInt32Void _OptionOpaque_accepts_option_enum(_ResultInt32Void arg);

@meta.ResourceIdentifier('OptionOpaque_accepts_option_input_struct')
@ffi.Native<_ResultOptionInputStructFfiVoid Function(_ResultOptionInputStructFfiVoid)>(isLeaf: true, symbol: 'OptionOpaque_accepts_option_input_struct')
// ignore: non_constant_identifier_names
external _ResultOptionInputStructFfiVoid _OptionOpaque_accepts_option_input_struct(_ResultOptionInputStructFfiVoid arg);

@meta.ResourceIdentifier('OptionOpaque_returns_option_input_struct')
@ffi.Native<_OptionInputStructFfi Function()>(isLeaf: true, symbol: 'OptionOpaque_returns_option_input_struct')
// ignore: non_constant_identifier_names
external _OptionInputStructFfi _OptionOpaque_returns_option_input_struct();
