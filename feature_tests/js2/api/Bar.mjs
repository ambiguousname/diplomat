// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const Bar_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Bar_destroy(ptr);
});

export class Bar {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    #selfEdge = [];
    
    #bEdge = [];
    
    #aEdge = [];
    
    
    constructor(ptr, selfEdge, bEdge, aEdge) {
        
        
        this.#bEdge = bEdge;
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        if (this.#selfEdge.length === 0) {
            Bar_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }


    get foo() {
        // This lifetime edge depends on lifetimes 'b, 'a
        let bEdges = [this];
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];const result = wasm.Bar_foo(this.ffiValue);
    
    
        return new Foo(result, bEdges, aEdges);
        
    }

    

}