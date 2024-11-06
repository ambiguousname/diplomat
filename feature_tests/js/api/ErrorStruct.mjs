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
    constructor(struct_obj) {
        if ("i" in struct_obj) {
            this.#i = struct_obj.i;
        } else {
            throw new Error("Missing required type i.");
        }

        if ("j" in struct_obj) {
            this.#j = struct_obj.j;
        } else {
            throw new Error("Missing required type j.");
        }

    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [this.#i, this.#j]
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap
    ) {
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 0, this.#i, Int32Array);
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 4, this.#j, Int32Array);
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    #fromFFI(ptr) {
        const iDeref = (new Int32Array(wasm.memory.buffer, ptr, 1))[0];
        this.#i = iDeref;
        const jDeref = (new Int32Array(wasm.memory.buffer, ptr + 4, 1))[0];
        this.#j = jDeref;
    }
}