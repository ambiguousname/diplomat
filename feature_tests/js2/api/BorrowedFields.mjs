// generated by diplomat-tool

import { Bar } from "./Bar.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class BorrowedFields {
    #a;
    get a()  {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }
    #b;
    get b()  {
        return this.#b;
    }
    set b(value) {
        this.#b = value;
    }
    #c;
    get c()  {
        return this.#c;
    }
    set c(value) {
        this.#c = value;
    }

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
    

    constructor(ptr, aEdges) {
        const aDeref = /* TODO: gen_c_to_js_deref */null;
        this.#a = aDeref(aEdges) // TODO: Slice c_to_js;
        const bDeref = /* TODO: gen_c_to_js_deref */null;
        this.#b = bDeref(aEdges) // TODO: Slice c_to_js;
        const cDeref = /* TODO: gen_c_to_js_deref */null;
        this.#c = cDeref(aEdges) // TODO: Slice c_to_js;
    }
    static fromBarAndStrings(bar, dstr16, utf8Str) {
        
        const dstr16Slice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16);
        const dstr16Arena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8Str);
        const utf8StrArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(24, 4);
        
        // This lifetime edge depends on lifetimes 'x
        let xEdges = [bar, dstr16Slice, utf8StrSlice];
        const result = wasm.BorrowedFields_from_bar_and_strings(diplomat_recieve_buffer, bar.ffiValue, dstr16Slice.ptr, dstr16Slice.size, utf8StrSlice.ptr, utf8StrSlice.size);
    
        const finalOut = new BorrowedFields(diplomat_recieve_buffer, xEdges);
        
        
        dstr16Slice.garbageCollect();
        
        utf8StrSlice.garbageCollect();
        
        wasm.diplomat_free(diplomat_recieve_buffer, 24, 4);
        
    
        return finalOut;
    }

    

}