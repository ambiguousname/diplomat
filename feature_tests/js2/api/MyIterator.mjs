



const MyIterator_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.namespace_MyIterator_destroy(ptr);
});

export class MyIterator {
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
        MyIterator_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    #iteratorNext() {
        const result = wasm.namespace_MyIterator_next(this.ffiValue);
    
        if (!result.isOk) {
            return null
        }
         return result.union.ok;
    }

    
    
    #value = null;
    #done = false;
    get value() {
    	return this.#value;
    }
    
    get done() {
    	return this.#done;
    }
    
    next() {
    	const out = this.#iteratorNext();
    
    	this.#value = out;
    	this.#done = out === null;
    
    	return out;
    }

}