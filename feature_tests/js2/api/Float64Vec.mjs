// generated by diplomat-tool

import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";




const Float64Vec_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Float64Vec_destroy(ptr);
});

export class Float64Vec {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Float64Vec_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static newBool(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "bool");
        const result = wasm.Float64Vec_new_bool(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newI16(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "i16");
        const result = wasm.Float64Vec_new_i16(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newU16(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "u16");
        const result = wasm.Float64Vec_new_u16(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newIsize(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "isize");
        const result = wasm.Float64Vec_new_isize(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newUsize(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "usize");
        const result = wasm.Float64Vec_new_usize(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newF64BeBytes(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "u8");
        const result = wasm.Float64Vec_new_f64_be_bytes(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
            vSlice.free();
        
        }
    }

    static newFromOwned(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "f64");
        const result = wasm.Float64Vec_new_from_owned(vSlice.ptr, vSlice.size);
    
        try {
    
            return Float64Vec._fromFFI(result, []);
        } finally {
        
        }
    }

    get asBoxedSlice() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(8, 4);
        const result = wasm.Float64Vec_as_boxed_slice(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            return diplomat_receive_buffer // TODO: Slice c_to_js;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 8, 4);
        
        }
    }

    get asSlice() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(8, 4);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Float64Vec_as_slice(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            return diplomat_receive_buffer(aEdges) // TODO: Slice c_to_js;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 8, 4);
        
        }
    }

    fillSlice(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "f64");
        wasm.Float64Vec_fill_slice(this.ffiValue, vSlice.ptr, vSlice.size);
    
        try {
    
        } finally {
        
            vSlice.free();
        
        }
    }

    setValue(newSlice) {
        
        const newSliceSlice = diplomatRuntime.DiplomatBuf.slice(wasm, newSlice, "f64");
        wasm.Float64Vec_set_value(this.ffiValue, newSliceSlice.ptr, newSliceSlice.size);
    
        try {
    
        } finally {
        
            newSliceSlice.free();
        
        }
    }

    toString() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.Float64Vec_to_string(this.ffiValue);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    borrow() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(8, 4);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Float64Vec_borrow(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            return diplomat_receive_buffer(aEdges) // TODO: Slice c_to_js;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 8, 4);
        
        }
    }

    get(i) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(9, 8);
        const result = wasm.Float64Vec_get(diplomat_receive_buffer, this.ffiValue, i);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 8)) {
                throw diplomatRuntime.FFIError(null);
            }
            return (new Float64Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0];
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 9, 8);
        
        }
    }

    

}