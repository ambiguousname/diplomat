// generated by diplomat-tool

import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const Utf16Wrap_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Utf16Wrap_destroy(ptr);
});

export class Utf16Wrap {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Utf16Wrap_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    borrowCont() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(8, 4);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Utf16Wrap_borrow_cont(diplomat_recieve_buffer, this.ffiValue);
    
        try {
    
        return diplomat_recieve_buffer(aEdges) // TODO: Slice c_to_js;
        } finally {
        
        wasm.diplomat_free(diplomat_recieve_buffer, 8, 4);
        
        }
    }

    owned() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(8, 4);
        const result = wasm.Utf16Wrap_owned(diplomat_recieve_buffer, this.ffiValue);
    
        try {
    
        return diplomat_recieve_buffer // TODO: Slice c_to_js;
        } finally {
        
        wasm.diplomat_free(diplomat_recieve_buffer, 8, 4);
        
        }
    }

    

}