// generated by diplomat-tool

import { MyEnum } from "./MyEnum.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class MyStruct {
    #a;
    get a()  {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }
    #b;
    get b()  {
        return this.#b;
    }
    set b(value) {
        this.#b = value;
    }
    #c;
    get c()  {
        return this.#c;
    }
    set c(value) {
        this.#c = value;
    }
    #d;
    get d()  {
        return this.#d;
    }
    set d(value) {
        this.#d = value;
    }
    #e;
    get e()  {
        return this.#e;
    }
    set e(value) {
        this.#e = value;
    }
    #f;
    get f()  {
        return this.#f;
    }
    set f(value) {
        this.#f = value;
    }
    #g;
    get g()  {
        return this.#g;
    }
    set g(value) {
        this.#g = value;
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI() {
        return [
            a, 
            b, 
            c, 
            d, 
            e, 
            f, 
            g.ffiValue]
    }
    

    // Size of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size() {
        return 28;
    }
    
    // Alignment of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align() {
        return 8;
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr) {
        const aDeref = (new Uint8Array(wasm.memory.buffer, ptr, 1))[0];
        this.#a = aDeref;
        const bDeref = (new Uint8Array(wasm.memory.buffer, ptr + 1, 1))[0]== 0;
        this.#b = bDeref;
        const cDeref = (new Uint8Array(wasm.memory.buffer, ptr + 2, 1))[0];
        this.#c = cDeref;
        const dDeref = (new BigUint64Array(wasm.memory.buffer, ptr + 8, 1))[0];
        this.#d = dDeref;
        const eDeref = (new Int32Array(wasm.memory.buffer, ptr + 16, 1))[0];
        this.#e = eDeref;
        const fDeref = String.fromfromCharCode((new Uint32Array(wasm.memory.buffer, ptr + 20, 1))[0]);
        this.#f = fDeref;
        const gDeref = diplomatRuntime.enumDiscriminant(wasm, ptr + 24);
        this.#g = (() => {for (let i of MyEnum.values) { if(i[1] === gDeref) return i[0]; } return null;})();;
    }
    static new_() {
        
        const diplomat_recieve_buffer = wasm.diplomat_alloc(MyStruct._size, MyStruct._align);
        const result = wasm.MyStruct_new(diplomat_recieve_buffer);
    
        const finalOut = new MyStruct(result);
        
        
        wasm.diplomat_free(diplomat_recieve_buffer, MyStruct._size, MyStruct._align);
        
    
        return finalOut;
    }

    intoA() {
        const result = wasm.MyStruct_into_a(...this._intoFFI());
    
        const finalOut = result;
        
        
        this.free(); /* TODO: Does this work? */
        
    
        return finalOut;
    }

    

}