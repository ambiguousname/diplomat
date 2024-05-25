// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const OpaqueMutexedString_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.OpaqueMutexedString_destroy(ptr);
});

export class OpaqueMutexedString {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        if (this.#selfEdge.length === 0) {
            OpaqueMutexedString_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }


    static fromUsize(number) {const result = wasm.OpaqueMutexedString_from_usize(number);
    
    
        return new OpaqueMutexedString(result, []);
        
    }

    change(number) {wasm.OpaqueMutexedString_change(this.ffiValue, number);
    
    
    }

    borrow() {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.OpaqueMutexedString_borrow(this.ffiValue);
    
    
        return new OpaqueMutexedString(result, aEdges);
        
    }

    static borrowOther(other) {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [other];const result = wasm.OpaqueMutexedString_borrow_other(other.ffiValue);
    
    
        return new OpaqueMutexedString(result, aEdges);
        
    }

    borrowSelfOrOther(other) {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this, other];const result = wasm.OpaqueMutexedString_borrow_self_or_other(this.ffiValue, other.ffiValue);
    
    
        return new OpaqueMutexedString(result, aEdges);
        
    }

    getLenAndAdd(other) {const result = wasm.OpaqueMutexedString_get_len_and_add(this.ffiValue, other);
    
    
        return result;
        
    }

    dummyStr() {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.OpaqueMutexedString_dummy_str(this.ffiValue);
    
    
        return result(aEdges) // TODO: Slice c_to_js;
        
    }

    wrapper() {const result = wasm.OpaqueMutexedString_wrapper(this.ffiValue);
    
    
        return new Utf16Wrap(result, []);
        
    }

    

}