// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const Utf16Wrap_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.Utf16Wrap_destroy(ptr);
});

export class Utf16Wrap {
	// Internal ptr reference:
	#ptr = null;

	// Lifetimes are only to keep dependencies alive.
	#selfEdge = [];
	
	
	constructor(ptr, selfEdge) {
		
		this.#ptr = ptr;
		this.#selfEdge = selfEdge;
		if (this.#selfEdge.length === 0) {
			Utf16Wrap_box_destroy_registry.register(this, this.#ptr);
		}
	}

	borrowCont() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Utf16Wrap_borrow_cont();
        return result(aEdges) // TODO: Slice c_to_js;
    }

	owned() {
        
        const result = wasm.Utf16Wrap_owned();
        return result // TODO: Slice c_to_js;
    }

}