// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct AttrOpaque2
{
    private const string NativeLib = "diplomat_feature_tests";

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_AttrOpaque2_destroy", ExactSpelling = true)]
    public static unsafe extern void Destroy(AttrOpaque2* self);
}