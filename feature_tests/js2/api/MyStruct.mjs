


export class MyStruct {
    #ptr
    a;
    b;
    c;
    d;
    e;
    f;
    g;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    #intoFFI() {
        return [
            a, 
            b, 
            c, 
            d, 
            e, 
            f, 
            g.ffiValue]
    }
    

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr) {
        this.#ptr = ptr;
        a = a,
        b = b,
        c = c,
        d = d,
        e = e,
        f = f,
        g = (() => {for (let i of MyEnum.values) { if(i[1] === g) return i[0]; } return null;})();;
    }
    static new_() {
        const result = wasm.MyStruct_new();
    
        return MyStruct // TODO: Struct c_to_js;
    }

    intoA() {
        const result = wasm.MyStruct_into_a(...this.#intoFFI());
    
        this.free(); /* TODO: Does this work? */
        
        return result;
    }

    

}