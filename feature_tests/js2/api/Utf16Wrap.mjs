



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
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.Utf16Wrap_borrow_cont(this.ffiValue);
    
        return result(aEdges) // TODO: Slice c_to_js;
    }

    owned() {
        const result = wasm.Utf16Wrap_owned(this.ffiValue);
    
        return result // TODO: Slice c_to_js;
    }

    

}