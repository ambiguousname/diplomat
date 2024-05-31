



const Foo_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Foo_destroy(ptr);
});

export class Foo {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    #aEdge = [];
    
    
    constructor(ptr, selfEdge, aEdge) {
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Foo_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_(x) {
        
        const xSlice = diplomatRuntime.DiplomatBuf.str8(wasm, x);
        const xArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [xSlice];const result = wasm.Foo_new(xSlice.ptr, xSlice.size);
    
        xSlice.garbageCollect();
        
        return new Foo(result, [], aEdges);
    }

    get bar() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        // This lifetime edge depends on lifetimes 'a, 'b
        let bEdges = [this];const result = wasm.Foo_get_bar(this.ffiValue);
    
        return new Bar(result, [], bEdges, aEdges);
    }

    static newStatic(x) {
        
        const xSlice = diplomatRuntime.DiplomatBuf.str8(wasm, x);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [];const result = wasm.Foo_new_static(xSlice.ptr, xSlice.size);
    
        xSlice.free();
        
        return new Foo(result, [], aEdges);
    }

    asReturning() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.Foo_as_returning(this.ffiValue);
    
        return BorrowedFieldsReturning // TODO: Struct c_to_js;
    }

    static extractFromFields(fields) {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [...fields._fieldsForLifetimeA];const result = wasm.Foo_extract_from_fields(/*TODO: gen_js_to_c_for_type for Struct*/);
    
        this.free(); /* TODO: Does this work? */
        
        return new Foo(result, [], aEdges);
    }

    static extractFromBounds(bounds, anotherString) {
        
        const anotherStringSlice = diplomatRuntime.DiplomatBuf.str8(wasm, anotherString);
        const anotherStringArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        // This lifetime edge depends on lifetimes 'a, 'y, 'z
        let aEdges = [...bounds._fieldsForLifetimeB, ...bounds._fieldsForLifetimeC, anotherStringSlice];const result = wasm.Foo_extract_from_bounds(/*TODO: gen_js_to_c_for_type for Struct*/, anotherStringSlice.ptr, anotherStringSlice.size);
    
        this.free(); /* TODO: Does this work? */
        
        anotherStringSlice.garbageCollect();
        
        return new Foo(result, [], aEdges);
    }

    

}