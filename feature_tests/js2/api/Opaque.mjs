// generated by diplomat-tool

import { ImportedStruct } from "./ImportedStruct.mjs"
import { MyStruct } from "./MyStruct.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const Opaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Opaque_destroy(ptr);
});

export class Opaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Opaque_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_() {
        const result = wasm.Opaque_new();
    
        return new Opaque(result, []);
    }

    assertStruct(s) {
        wasm.Opaque_assert_struct(this.ffiValue, ...s._intoFfi(temp));
    
        this.free(); /* TODO: Does this work? */
        
    }

    static returnsUsize() {
        const result = wasm.Opaque_returns_usize();
    
        return result;
    }

    static returnsImported() {
        const result = wasm.Opaque_returns_imported();
    
        return ImportedStruct // TODO: Struct c_to_js;
    }

    static cmp() {
        const result = wasm.Opaque_cmp();
    
        return result;
    }

    

}