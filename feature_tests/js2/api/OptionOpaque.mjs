// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const OptionOpaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.OptionOpaque_destroy(ptr);
});

export class OptionOpaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        if (this.#selfEdge.length === 0) {
            OptionOpaque_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_(i) {
    const result = wasm.OptionOpaque_new(i);
    return (result === 0) ? undefined : new OptionOpaque(result, []);;
    }

    static newNone() {
    const result = wasm.OptionOpaque_new_none();
    return (result === 0) ? undefined : new OptionOpaque(result, []);;
    }

    static returns() {
    const result = wasm.OptionOpaque_returns();
    if (!result.isOk) {
            return null
        }
         return OptionStruct // TODO: Struct c_to_js;
    }

    static newStruct() {
    const result = wasm.OptionOpaque_new_struct();
    return OptionStruct // TODO: Struct c_to_js;
    }

    static newStructNones() {
    const result = wasm.OptionOpaque_new_struct_nones();
    return OptionStruct // TODO: Struct c_to_js;
    }

    assertInteger(i) {
    wasm.OptionOpaque_assert_integer(this.ffiValue, i);
    
    }

    static optionOpaqueArgument(arg) {
    const result = wasm.OptionOpaque_option_opaque_argument(arg.ffiValue ?? 0);
    return result;
    }

    

}