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
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new(i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomat_receive_buffer]];
            }
            return new ResultOpaque(diplomat_receive_buffer, []);
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newFailingFoo() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_failing_foo();
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomat_receive_buffer]];
            }
            return new ResultOpaque(diplomat_receive_buffer, []);
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newFailingBar() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_failing_bar();
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomat_receive_buffer]];
            }
            return new ResultOpaque(diplomat_receive_buffer, []);
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newFailingUnit() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_failing_unit();
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                return null;
            }
            return new ResultOpaque(diplomat_receive_buffer, []);
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newFailingStruct(i) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_failing_struct(i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw new ErrorStruct(diplomat_receive_buffer);
            }
            return new ResultOpaque(diplomat_receive_buffer, []);
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newInErr(i) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_in_err(i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw new ResultOpaque(diplomat_receive_buffer, []);
            }
    
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newInt(i) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_int(i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                return null;
            }
            return diplomat_receive_buffer;
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    static newInEnumErr(i) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.ResultOpaque_new_in_enum_err(i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4), resultByte) {
                throw new ResultOpaque(diplomat_receive_buffer, []);
            }
            return ErrorEnum[Array.from(ErrorEnum.values.keys())[diplomat_receive_buffer]];
        } finally {
        
            wasm.diplomat_free(5, 4);
        
        }
    }

    assertInteger(i) {
        wasm.ResultOpaque_assert_integer(this.ffiValue, i);
    
        try {
    
        } finally {
        
        }
    }

    

}