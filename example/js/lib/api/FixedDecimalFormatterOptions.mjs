// generated by diplomat-tool
import { FixedDecimalGroupingStrategy } from "./FixedDecimalGroupingStrategy.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class FixedDecimalFormatterOptions {

    #groupingStrategy;
    get groupingStrategy()  {
        return this.#groupingStrategy;
    }
    set groupingStrategy(value) {
        this.#groupingStrategy = value;
    }

    #someOtherConfig;
    get someOtherConfig()  {
        return this.#someOtherConfig;
    }
    set someOtherConfig(value) {
        this.#someOtherConfig = value;
    }
    constructor(struct_obj) {
        if (typeof struct_obj !== "object") {
            throw new Error("FixedDecimalFormatterOptions's constructor takes an object of FixedDecimalFormatterOptions's fields.");
        }

        if ("groupingStrategy" in struct_obj) {
            this.#groupingStrategy = struct_obj.groupingStrategy;
        } else {
            throw new Error("Missing required field groupingStrategy.");
        }

        if ("someOtherConfig" in struct_obj) {
            this.#someOtherConfig = struct_obj.someOtherConfig;
        } else {
            throw new Error("Missing required field someOtherConfig.");
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
        return [this.#groupingStrategy.ffiValue, this.#someOtherConfig, ...diplomatRuntime.maybePaddingFields(forcePadding, 3 /* x i8 */)]
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap,
        forcePadding
    ) {
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 0, this.#groupingStrategy.ffiValue, Int32Array);
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 4, this.#someOtherConfig, Uint8Array);
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    static _fromFFI(internalConstructor, ptr) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("FixedDecimalFormatterOptions._fromFFI is not meant to be called externally. Please use the default constructor.");
        }
        var structObj = {};
        const groupingStrategyDeref = diplomatRuntime.enumDiscriminant(wasm, ptr);
        structObj.groupingStrategy = new FixedDecimalGroupingStrategy(diplomatRuntime.internalConstructor, groupingStrategyDeref);
        const someOtherConfigDeref = (new Uint8Array(wasm.memory.buffer, ptr + 4, 1))[0] === 1;
        structObj.someOtherConfig = someOtherConfigDeref;

        return new FixedDecimalFormatterOptions(structObj, internalConstructor);
    }

    static default_() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 8, 4, false);
        
        const result = wasm.icu4x_FixedDecimalFormatterOptions_default_mv1(diplomatReceive.buffer);
    
        try {
            return FixedDecimalFormatterOptions._fromFFI(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}