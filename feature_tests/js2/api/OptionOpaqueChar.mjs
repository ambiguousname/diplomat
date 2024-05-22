// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const OptionOpaqueChar_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.OptionOpaqueChar_destroy(ptr);
});

export class OptionOpaqueChar {
	// Internal ptr reference:
	#ptr = null;

	// Lifetimes are only to keep dependencies alive.
	#selfEdge = [];
	
	
	constructor(ptr, selfEdge) {
		
		this.#ptr = ptr;
		this.#selfEdge = selfEdge;
		if (this.#selfEdge.length === 0) {
			OptionOpaqueChar_box_destroy_registry.register(this, this.#ptr);
		}
	}

	assertChar(ch) {
        
        wasm.OptionOpaqueChar_assert_char();
        
    }

}