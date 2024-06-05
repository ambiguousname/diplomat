// generated by diplomat-tool

import { ErrorEnum } from "./ErrorEnum.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const ResultOpaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ResultOpaque_destroy(ptr);
});

export class ResultOpaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        ResultOpaque_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_(i) {
        const result = wasm.ResultOpaque_new(i);
    
        if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]];
        }
        const finalOut = new ResultOpaque(result.union.ok, []);
        
        
    
        return finalOut;
    }

    static newFailingFoo() {
        const result = wasm.ResultOpaque_new_failing_foo();
    
        if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]];
        }
        const finalOut = new ResultOpaque(result.union.ok, []);
        
        
    
        return finalOut;
    }

    static newFailingBar() {
        const result = wasm.ResultOpaque_new_failing_bar();
    
        if (!result.isOk) {
            throw ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.error]];
        }
        const finalOut = new ResultOpaque(result.union.ok, []);
        
        
    
        return finalOut;
    }

    static newFailingUnit() {
        const result = wasm.ResultOpaque_new_failing_unit();
    
        if (!result.isOk) {
            return null;
        }
        const finalOut = new ResultOpaque(result.union.ok, []);
        
        
    
        return finalOut;
    }

    static newFailingStruct(i) {
        const result = wasm.ResultOpaque_new_failing_struct(i);
    
        if (!result.isOk) {
            throw new ErrorStruct(result.union.error);
        }
        const finalOut = new ResultOpaque(result.union.ok, []);
        
        
    
        return finalOut;
    }

    static newInErr(i) {
        const result = wasm.ResultOpaque_new_in_err(i);
    
        if (!result.isOk) {
            throw new ResultOpaque(result.union.error, []);
        }
    
        
        
    
        return finalOut;
    }

    static newInt(i) {
        const result = wasm.ResultOpaque_new_int(i);
    
        if (!result.isOk) {
            return null;
        }
        const finalOut = result.union.ok;
        
        
    
        return finalOut;
    }

    static newInEnumErr(i) {
        const result = wasm.ResultOpaque_new_in_enum_err(i);
    
        if (!result.isOk) {
            throw new ResultOpaque(result.union.error, []);
        }
        const finalOut = ErrorEnum[Array.from(ErrorEnum.values.keys())[result.union.ok]];
        
        
    
        return finalOut;
    }

    assertInteger(i) {
        wasm.ResultOpaque_assert_integer(this.ffiValue, i);
    
        
        
    
        return finalOut;
    }

    

}