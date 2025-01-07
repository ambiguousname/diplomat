// generated by diplomat-tool
import { RenamedMyIterator } from "./RenamedMyIterator.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const RenamedMyIterable_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.namespace_MyIterable_destroy(ptr);
});



export class RenamedMyIterable {
	
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    #internalConstructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("RenamedMyIterable is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            RenamedMyIterable_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    #defaultConstructor(x) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const xSlice = functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.slice(wasm, x, "u8"));
        
        const result = wasm.namespace_MyIterable_new(...xSlice.splat());
    
        try {
            return new RenamedMyIterable(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    [Symbol.iterator]() {
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        
        const result = wasm.namespace_MyIterable_iter(this.ffiValue);
    
        try {
            return new RenamedMyIterator(diplomatRuntime.internalConstructor, result, [], aEdges);
        }
        
        finally {}
    }

    constructor(exposeConstructor, ...args) {
        if (exposeConstructor === diplomatRuntime.exposeConstructor) {
            return this.#internalConstructor(...args);
        } else if (exposeConstructor === diplomatRuntime.internalConstructor) {
            return this.#internalConstructor(...arguments);
        } else {
            return this.#defaultConstructor(...arguments);
        }
    }
}