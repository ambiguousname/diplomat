



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


    static new_(x) {
        
        const xSlice = diplomatRuntime.DiplomatBuf.slice(wasm, x, "u8");
        const result = wasm.namespace_MyIterable_new(xSlice.ptr, xSlice.size);
    
        xSlice.free();
        
        return new MyIterable(result, []);
    }

    [Symbol.iterator]() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.namespace_MyIterable_iter(this.ffiValue);
    
        return new MyIterator(result, [], aEdges);
    }

    

}