// generated by diplomat-tool
import type { RenamedOpaqueIterator } from "./RenamedOpaqueIterator"
import type { pointer, codepoint, DiplomatSliceStr, DiplomatSliceStrings, DiplomatSlicePrimitive } from "./diplomat-runtime.d.ts";

export class RenamedOpaqueIterable {
    

    get ffiValue(): pointer;

    [Symbol.iterator](): RenamedOpaqueIterator;
}