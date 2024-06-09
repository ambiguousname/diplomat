// generated by diplomat-tool

import { MyIterator } from "./MyIterator.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const MyIterable_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.namespace_MyIterable_destroy(ptr);
});

export class MyIterable {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        MyIterable_box_destroy_registry.register(this, this.#ptr);
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


    static new_(x) {
        
        const xSlice = diplomatRuntime.DiplomatBuf.slice(wasm, x, "u8");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(MyIterable._size, MyIterable._align);
        const result = wasm.namespace_MyIterable_new(diplomat_recieve_buffer, xSlice.ptr, xSlice.size);
    
        const finalOut = new MyIterable(diplomat_recieve_buffer, []);
        
        
        xSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, MyIterable._size, MyIterable._align);
        
    
        return finalOut;
    }

    [Symbol.iterator]() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(MyIterator._size, MyIterator._align);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.namespace_MyIterable_iter(diplomat_recieve_buffer, this.ffiValue);
    
        const finalOut = new MyIterator(diplomat_recieve_buffer, [], aEdges);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, MyIterator._size, MyIterator._align);
        
    
        return finalOut;
    }

    

}