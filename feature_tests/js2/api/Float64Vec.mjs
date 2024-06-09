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

    // Size of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size() {
        return 4;
    }
    
    // Alignment of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align() {
        return 4;
    }


    static newBool(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "bool");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_bool(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newI16(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "i16");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_i16(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newU16(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "u16");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_u16(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newIsize(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "isize");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_isize(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newUsize(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "usize");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_usize(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newF64BeBytes(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "u8");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_f64_be_bytes(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        vSlice.free();
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    static newFromOwned(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "f64");
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(Float64Vec._size, Float64Vec._align);
        const result = wasm.Float64Vec_new_from_owned(diplomat_recieve_buffer, vSlice.ptr, vSlice.size);
    
        const finalOut = new Float64Vec(diplomat_recieve_buffer, []);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, Float64Vec._size, Float64Vec._align);
        
    
        return finalOut;
    }

    get asBoxedSlice() {
        const result = wasm.Float64Vec_as_boxed_slice(this.ffiValue);
    
        const finalOut = result // TODO: Slice c_to_js;
        
        
    
        return finalOut;
    }

    get asSlice() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Float64Vec_as_slice(this.ffiValue);
    
        const finalOut = result(aEdges) // TODO: Slice c_to_js;
        
        
    
        return finalOut;
    }

    fillSlice(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.slice(wasm, v, "f64");
        wasm.Float64Vec_fill_slice(this.ffiValue, vSlice.ptr, vSlice.size);
    
        
        
        vSlice.free();
        
    
    }

    setValue(newSlice) {
        
        const newSliceSlice = diplomatRuntime.DiplomatBuf.slice(wasm, newSlice, "f64");
        wasm.Float64Vec_set_value(this.ffiValue, newSliceSlice.ptr, newSliceSlice.size);
    
        
        
        newSliceSlice.free();
        
    
    }

    toString() {
        wasm.Float64Vec_to_string(this.ffiValue);
    
        return writeable;
        
        
    
        return finalOut;
    }

    borrow() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Float64Vec_borrow(this.ffiValue);
    
        const finalOut = result(aEdges) // TODO: Slice c_to_js;
        
        
    
        return finalOut;
    }

    get(i) {
        const result = wasm.Float64Vec_get(this.ffiValue, i);
    
        if (!result.isOk) {
            return null;
        }
        const finalOut = result.union.ok;
        
        
    
        return finalOut;
    }

    

}