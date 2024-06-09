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

    // Size of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size() {
        return 4;
    }
    
    // Alignment of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align() {
        return 4;
    }


    static new_() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Opaque._size, Opaque._align);
        const result = wasm.Opaque_new(diplomat_recieve_buffer);
    
        const finalOut = new Opaque(diplomat_recieve_buffer, []);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, Opaque._size, Opaque._align);
        
    
        return finalOut;
    }

    assertStruct(s) {
        wasm.Opaque_assert_struct(this.ffiValue, ...s._intoFfi(temp));
    
        
        
        this.free(); /* TODO: Does this work? */
        
    
    }

    static returnsUsize() {
        const result = wasm.Opaque_returns_usize();
    
        const finalOut = result;
        
        
    
        return finalOut;
    }

    static returnsImported() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(ImportedStruct._size, ImportedStruct._align);
        const result = wasm.Opaque_returns_imported(diplomat_recieve_buffer);
    
        const finalOut = new ImportedStruct(diplomat_recieve_buffer);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, ImportedStruct._size, ImportedStruct._align);
        
    
        return finalOut;
    }

    static cmp() {
        const result = wasm.Opaque_cmp();
    
        const finalOut = result;
        
        
    
        return finalOut;
    }

    

}