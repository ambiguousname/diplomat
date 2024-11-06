// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** Testing JS-specific layout/padding behavior
*/
export class ScalarPairWithPadding {

    #first;
    get first()  {
        return this.#first;
    }
    set first(value) {
        this.#first = value;
    }

    #second;
    get second()  {
        return this.#second;
    }
    set second(value) {
        this.#second = value;
    }
    constructor(struct_obj) {
        if ("first" in struct_obj) {
            this.#first = struct_obj.first;
        } else {
            throw new Error("Missing required type first.");
        }

        if ("second" in struct_obj) {
            this.#second = struct_obj.second;
        } else {
            throw new Error("Missing required type second.");
        }

    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    // JS structs need to be generated with or without padding depending on whether they are being passed as aggregates or splatted out into fields.
    // Most of the time this is known beforehand: large structs (>2 scalar fields) always get padding, and structs passed directly in parameters omit padding
    // if they are small. However small structs within large structs also get padding, and we signal that by setting forcePadding.
    _intoFFI(
        functionCleanupArena,
        appendArrayMap,
        forcePadding
    ) {
        return [this.#first, ...diplomatRuntime.maybePaddingFields(forcePadding, 3 /* x i8 */), this.#second]
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap,
        forcePadding
    ) {
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 0, this.#first, Uint8Array);
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 4, this.#second, Uint32Array);
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    #fromFFI(ptr) {
        const firstDeref = (new Uint8Array(wasm.memory.buffer, ptr, 1))[0];
        this.#first = firstDeref;
        const secondDeref = (new Uint32Array(wasm.memory.buffer, ptr + 4, 1))[0];
        this.#second = secondDeref;
    }

    assertValue() {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        wasm.ScalarPairWithPadding_assert_value(...this._intoFFI());
    
        try {}
        
        finally {
            functionCleanupArena.free();
        }
    }
}