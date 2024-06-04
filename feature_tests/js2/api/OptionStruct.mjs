// generated by diplomat-tool


import { OptionOpaque } from "./OptionOpaque.mjs"

import { OptionOpaqueChar } from "./OptionOpaqueChar.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class OptionStruct {
    #ptr
    get a()  {
        return this.#a;
    }
    #a;
    get b()  {
        return this.#b;
    }
    #b;
    get c()  {
        return this.#c;
    }
    #c;
    get d()  {
        return this.#d;
    }
    #d;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI() {
        return [
            a.ffiValue ?? 0, 
            b.ffiValue ?? 0, 
            c, 
            d.ffiValue ?? 0]
    }
    

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr) {
        this.#ptr = ptr;
        a = ((a === 0) ? undefined : new OptionOpaque(a, []));
        b = ((b === 0) ? undefined : new OptionOpaqueChar(b, []));
        c = c;
        d = ((d === 0) ? undefined : new OptionOpaque(d, []));
    }
    

}