// generated by diplomat-tool

import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class BorrowedFieldsReturning {
    bytes;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant objects will only
    // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    _intoFFI(aAppendArray = []) {
        return [
            diplomatRuntime.DiplomatBuf.str8(wasm, bytes) /* TODO: Freeing code */]
    }
    

    constructor(ptr, aEdges) {
        bytes = bytes(aEdges) // TODO: Slice c_to_js;
    }
    

}