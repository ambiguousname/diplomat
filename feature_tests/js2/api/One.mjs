// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const One_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.One_destroy(ptr);
});

export class One {
	// Internal ptr reference:
	#ptr = null;

	// Lifetimes are only to keep dependencies alive.
	#selfEdge = [];
	
	#aEdge = [];
	
	
	constructor(ptr, selfEdge, aEdge) {
		
		
		this.#aEdge = aEdge;
		
		this.#ptr = ptr;
		this.#selfEdge = selfEdge;
		if (this.#selfEdge.length === 0) {
			One_box_destroy_registry.register(this, this.#ptr);
		}
	}

	static transitivity(hold, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c, 'd, 'e
        let aEdges = [];const result = wasm.One_transitivity();
        return new One(result, [], aEdges);
    }

	static cycle(hold, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c
        let aEdges = [];const result = wasm.One_cycle();
        return new One(result, [], aEdges);
    }

	static manyDependents(a, b, c, d, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c, 'd
        let aEdges = [];const result = wasm.One_many_dependents();
        return new One(result, [], aEdges);
    }

	static returnOutlivesParam(hold, nohold) {
        
        // This lifetime edge depends on lifetimes 'long
        let longEdges = [];const result = wasm.One_return_outlives_param();
        return new One(result, [], longEdges);
    }

	static diamondTop(top, left, right, bottom) {
        
        // This lifetime edge depends on lifetimes 'top, 'left, 'right, 'bottom
        let topEdges = [];const result = wasm.One_diamond_top();
        return new One(result, [], topEdges);
    }

	static diamondLeft(top, left, right, bottom) {
        
        // This lifetime edge depends on lifetimes 'left, 'bottom
        let leftEdges = [];const result = wasm.One_diamond_left();
        return new One(result, [], leftEdges);
    }

	static diamondRight(top, left, right, bottom) {
        
        // This lifetime edge depends on lifetimes 'right, 'bottom
        let rightEdges = [];const result = wasm.One_diamond_right();
        return new One(result, [], rightEdges);
    }

	static diamondBottom(top, left, right, bottom) {
        
        // This lifetime edge depends on lifetimes 'bottom
        let bottomEdges = [];const result = wasm.One_diamond_bottom();
        return new One(result, [], bottomEdges);
    }

	static diamondAndNestedTypes(a, b, c, d, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c, 'd
        let aEdges = [];const result = wasm.One_diamond_and_nested_types();
        return new One(result, [], aEdges);
    }

	static implicitBounds(explicitHold, implicitHold, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c, 'd, 'x
        let aEdges = [];const result = wasm.One_implicit_bounds();
        return new One(result, [], aEdges);
    }

	static implicitBoundsDeep(explicit, implicit1, implicit2, nohold) {
        
        // This lifetime edge depends on lifetimes 'a, 'b, 'c, 'd
        let aEdges = [];const result = wasm.One_implicit_bounds_deep();
        return new One(result, [], aEdges);
    }

}