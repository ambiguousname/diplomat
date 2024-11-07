// generated by diplomat-tool
import { CyclicStructB } from "./CyclicStructB.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class CyclicStructA {

    #a;
    get a()  {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }
    constructor(struct_obj) {
        if (typeof struct_obj !== "object") {
            throw new Error("CyclicStructA's constructor takes an object of CyclicStructA's fields.");
        }

        if ("a" in struct_obj) {
            this.#a = struct_obj.a;
        } else {
            throw new Error("Missing required field a.");
        }

    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [...this.#a._intoFFI(functionCleanupArena, {})]
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap
    ) {
        this.#a._writeToArrayBuffer(arrayBuffer, offset + 0, functionCleanupArena, {});
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    static _fromFFI(internalConstructor, ptr) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("CyclicStructA._fromFFI is not meant to be called externally. Please use the default constructor.");
        }
        var structObj = {};
        const aDeref = ptr;
        structObj.a = CyclicStructB._fromFFI(diplomatRuntime.internalConstructor, aDeref);

        return new CyclicStructA(structObj);
    }

    static getB() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 1, 1, false);
        
        const result = wasm.CyclicStructA_get_b(diplomatReceive.buffer);
    
        try {
            return CyclicStructB._fromFFI(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}