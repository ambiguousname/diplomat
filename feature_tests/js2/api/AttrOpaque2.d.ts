// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"


const AttrOpaque2_box_destroy_registry = new FinalizationRegistry((ptr) => {
	wasm.namespace_AttrOpaque2_destroy(ptr);
});
export class AttrOpaque2 {
	

}