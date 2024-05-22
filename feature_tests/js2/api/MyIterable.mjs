// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const MyIterable_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.namespace_MyIterable_destroy(ptr);
});

export class MyIterable {
	// Internal ptr reference:
	#ptr = null;

	// Lifetimes are only to keep dependencies alive.
	#selfEdge = [];
	
	
	constructor(ptr, selfEdge) {
		
		this.#ptr = ptr;
		this.#selfEdge = selfEdge;
		if (this.#selfEdge.length === 0) {
			MyIterable_box_destroy_registry.register(this, this.#ptr);
		}
	}

	static new(x) {
        const result = wasm.namespace_MyIterable_new();
        return new MyIterable(result, []);
    }

	iter() {
        const result = wasm.namespace_MyIterable_iter();
        return new MyIterator(result, [], aEdges);
    }

}