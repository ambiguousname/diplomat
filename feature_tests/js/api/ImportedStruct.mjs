// generated by diplomat-tool
import { UnimportedEnum } from "./UnimportedEnum.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class ImportedStruct {

    #foo;
    get foo()  {
        return this.#foo;
    }
    set foo(value) {
        this.#foo = value;
    }

    #count;
    get count()  {
        return this.#count;
    }
    set count(value) {
        this.#count = value;
    }
    constructor() {
        if (arguments.length > 0 && arguments[0] === diplomatRuntime.internalConstructor) {
            this.#fromFFI(arguments.slice(1));
        } else {
            
            this.#foo = foo;
            
            this.#count = count;
            
        }}

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        slice_cleanup_callbacks,
        appendArrayMap
    ) {
        return [this.#foo.ffiValue, this.#count]
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    #fromFFI(ptr) {
        const fooDeref = diplomatRuntime.enumDiscriminant(wasm, ptr);
        this.#foo = UnimportedEnum[Array.from(UnimportedEnum.values.keys())[fooDeref]];
        const countDeref = (new Uint8Array(wasm.memory.buffer, ptr + 4, 1))[0];
        this.#count = countDeref;
    }
}