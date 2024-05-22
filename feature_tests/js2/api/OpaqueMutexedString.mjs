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

	static fromUsize(number) {
        const result = wasm.OpaqueMutexedString_from_usize();
        return new OpaqueMutexedString(result, []);
    }

	change(number) {
        wasm.OpaqueMutexedString_change();
        
    }

	borrow() {
        const result = wasm.OpaqueMutexedString_borrow();
        return new OpaqueMutexedString(result, aEdges);
    }

	static borrowOther(other) {
        const result = wasm.OpaqueMutexedString_borrow_other();
        return new OpaqueMutexedString(result, aEdges);
    }

	borrowSelfOrOther(other) {
        const result = wasm.OpaqueMutexedString_borrow_self_or_other();
        return new OpaqueMutexedString(result, aEdges);
    }

	getLenAndAdd(other) {
        const result = wasm.OpaqueMutexedString_get_len_and_add();
        return result;
    }

	dummyStr() {
        const result = wasm.OpaqueMutexedString_dummy_str();
        return result(aEdges) // TODO;
    }

	wrapper() {
        const result = wasm.OpaqueMutexedString_wrapper();
        return new Utf16Wrap(result, []);
    }

}