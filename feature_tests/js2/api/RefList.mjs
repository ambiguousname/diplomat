// generated by diplomat-tool


import { RefListParameter } from "./RefListParameter.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const RefList_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.RefList_destroy(ptr);
});

export class RefList {
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
        RefList_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static node(data) {
        
        // This lifetime edge depends on lifetimes 'b
        let bEdges = [data];
        const result = wasm.RefList_node(data.ffiValue);
    
        return new RefList(result, [], bEdges);
    }

    

}