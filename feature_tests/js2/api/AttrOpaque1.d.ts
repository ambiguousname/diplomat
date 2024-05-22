// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"


const AttrOpaque1_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.namespace_AttrOpaque1_destroy(ptr);
});
export class AttrOpaque1 {
	

	static new(): AttrOpaque1;

	method(): number;

	abirenamed(): number;

	methodDisabledcpp(): void;

	useUnnamespaced(un:Unnamespaced): void;

	useNamespaced(n:AttrEnum): void;

}