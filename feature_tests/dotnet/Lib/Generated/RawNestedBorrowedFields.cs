// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct NestedBorrowedFields
{
    private const string NativeLib = "diplomat_feature_tests";

    public BorrowedFields fields;

    public BorrowedFieldsWithBounds bounds;

    public BorrowedFieldsWithBounds bounds2;

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "NestedBorrowedFields_from_bar_and_foo_and_strings", ExactSpelling = true)]
    public static unsafe extern NestedBorrowedFields FromBarAndFooAndStrings(Bar* bar, Foo* foo, ushort* dstr16X, nuint dstr16XSz, ushort* dstr16Z, nuint dstr16ZSz, ushort* utf8StrY, nuint utf8StrYSz, ushort* utf8StrZ, nuint utf8StrZSz);
}
