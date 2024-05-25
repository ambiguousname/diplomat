// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



const ResultOpaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ResultOpaque_destroy(ptr);
});

export class ResultOpaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        if (this.#selfEdge.length === 0) {
            ResultOpaque_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_(i) {
    const result = wasm.ResultOpaque_new(i);
    if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]]
        }
         return new ResultOpaque(result.union.ok, []);
    }

    static newFailingFoo() {
    const result = wasm.ResultOpaque_new_failing_foo();
    if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]]
        }
         return new ResultOpaque(result.union.ok, []);
    }

    static newFailingBar() {
    const result = wasm.ResultOpaque_new_failing_bar();
    if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]]
        }
         return new ResultOpaque(result.union.ok, []);
    }

    static newFailingUnit() {
    const result = wasm.ResultOpaque_new_failing_unit();
    if (!result.isOk) {
            return null
        }
         return new ResultOpaque(result.union.ok, []);
    }

    static newFailingStruct(i) {
    const result = wasm.ResultOpaque_new_failing_struct(i);
    if (!result.isOk) {
            throw ErrorStruct // TODO: Struct c_to_js
        }
         return new ResultOpaque(result.union.ok, []);
    }

    static newInErr(i) {
    const result = wasm.ResultOpaque_new_in_err(i);
    if (!result.isOk) {
            throw new ResultOpaque(result.union.error, [])
        }
    
    }

    static newInt(i) {
    const result = wasm.ResultOpaque_new_int(i);
    if (!result.isOk) {
            return null
        }
         return result.union.ok;
    }

    static newInEnumErr(i) {
    const result = wasm.ResultOpaque_new_in_enum_err(i);
    if (!result.isOk) {
            throw new ResultOpaque(result.union.error, [])
        }
         return ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.ok]];
    }

    assertInteger(i) {
    wasm.ResultOpaque_assert_integer(this.ffiValue, i);
    
    }

    

}