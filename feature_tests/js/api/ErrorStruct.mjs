// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class ErrorStruct {

    #i;
    get i()  {
        return this.#i;
    }
    set i(value) {
        this.#i = value;
    }

    #j;
    get j()  {
        return this.#j;
    }
    set j(value) {
        this.#j = value;
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        slice_cleanup_callbacks,
        appendArrayMap
    ) {
        return [this.#i, this.#j]
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    _fromFFI(ptr) {
        const iDeref = (new Int32Array(wasm.memory.buffer, ptr, 1))[0];
        this.#i = iDeref;
        const jDeref = (new Int32Array(wasm.memory.buffer, ptr + 4, 1))[0];
        this.#j = jDeref;

        return this;
    }
}