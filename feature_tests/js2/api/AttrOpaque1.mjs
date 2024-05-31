



const AttrOpaque1_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.namespace_AttrOpaque1_destroy(ptr);
});

export class AttrOpaque1 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        AttrOpaque1_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_() {
        const result = wasm.namespace_AttrOpaque1_new();
    
        return new AttrOpaque1(result, []);
    }

    get method() {
        const result = wasm.namespace_AttrOpaque1_method(this.ffiValue);
    
        return result;
    }

    get abirenamed() {
        const result = wasm.renamed_on_abi_only(this.ffiValue);
    
        return result;
    }

    methodDisabledcpp() {
        wasm.namespace_AttrOpaque1_method_disabledcpp(this.ffiValue);
    
    }

    useUnnamespaced(un) {
        wasm.namespace_AttrOpaque1_use_unnamespaced(this.ffiValue, un.ffiValue);
    
    }

    useNamespaced(n) {
        wasm.namespace_AttrOpaque1_use_namespaced(this.ffiValue, n.ffiValue);
    
    }

    

}