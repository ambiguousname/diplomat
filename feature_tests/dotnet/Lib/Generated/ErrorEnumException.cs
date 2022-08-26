// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures;

#nullable enable

public partial class ErrorEnumException : Exception
{
    private ErrorEnum _inner;

    public ErrorEnumException(ErrorEnum inner) : base("ErrorEnum error occurred")
    {
        _inner = inner;
    }

    public ErrorEnum Inner
    {
        get
        {
            return _inner;
        }
    }
}