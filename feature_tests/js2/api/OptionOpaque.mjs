// generated by diplomat-tool

import { OptionStruct } from "./OptionStruct.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const OptionOpaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.OptionOpaque_destroy(ptr);
});

export class OptionOpaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        OptionOpaque_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_(i) {
        const result = wasm.OptionOpaque_new(i);
    
        const finalOut = ((result === 0) ? undefined : new OptionOpaque(result, []));
        
        
    
        return finalOut;
    }

    static newNone() {
        const result = wasm.OptionOpaque_new_none();
    
        const finalOut = ((result === 0) ? undefined : new OptionOpaque(result, []));
        
        
    
        return finalOut;
    }

    static returns() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(OptionStruct._size, OptionStruct._align);
        const result = wasm.OptionOpaque_returns(diplomat_recieve_buffer);
    
        if (!result.isOk) {
            return null;
        }
        const finalOut = new OptionStruct(result.union.ok);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, OptionStruct._size, OptionStruct._align);
        
    
        return finalOut;
    }

    static newStruct() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(OptionStruct._size, OptionStruct._align);
        const result = wasm.OptionOpaque_new_struct(diplomat_recieve_buffer);
    
        const finalOut = new OptionStruct(result);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, OptionStruct._size, OptionStruct._align);
        
    
        return finalOut;
    }

    static newStructNones() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(OptionStruct._size, OptionStruct._align);
        const result = wasm.OptionOpaque_new_struct_nones(diplomat_recieve_buffer);
    
        const finalOut = new OptionStruct(result);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, OptionStruct._size, OptionStruct._align);
        
    
        return finalOut;
    }

    assertInteger(i) {
        wasm.OptionOpaque_assert_integer(this.ffiValue, i);
    
        
        
    
        return finalOut;
    }

    static optionOpaqueArgument(arg) {
        const result = wasm.OptionOpaque_option_opaque_argument(arg.ffiValue ?? 0);
    
        const finalOut = result;
        
        
    
        return finalOut;
    }

    

}