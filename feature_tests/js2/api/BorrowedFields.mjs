// generated by diplomat-tool

import { Bar } from "./Bar.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class BorrowedFields {
    a;
    b;
    c;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant objects will only
    // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    _intoFFI(aAppendArray = []) {
        return [
            diplomatRuntime.DiplomatBuf.str16(wasm, a) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, b) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, c) /* TODO: Freeing code */]
    }
    

    // Size of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size() {
        return 24;
    }
    
    // Alignment of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align() {
        return 4;
    }

    constructor(ptr, aEdges) {
        a = a(aEdges) // TODO: Slice c_to_js;
        b = b(aEdges) // TODO: Slice c_to_js;
        c = c(aEdges) // TODO: Slice c_to_js;
    }
    static fromBarAndStrings(bar, dstr16, utf8Str) {
        
        const dstr16Slice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16);
        const dstr16Arena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8Str);
        const utf8StrArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(BorrowedFields._size, BorrowedFields._align);
        
        // This lifetime edge depends on lifetimes 'x
        let xEdges = [bar, dstr16Slice, utf8StrSlice];
        const result = wasm.BorrowedFields_from_bar_and_strings(diplomat_recieve_buffer, bar.ffiValue, dstr16Slice.ptr, dstr16Slice.size, utf8StrSlice.ptr, utf8StrSlice.size);
    
        const finalOut = new BorrowedFields(result, xEdges);
        
        
        dstr16Slice.garbageCollect();
        
        utf8StrSlice.garbageCollect();
        
        wasm.diplomat_free(diplomat_recieve_buffer, BorrowedFields._size, BorrowedFields._align);
        
    
        return finalOut;
    }

    

}