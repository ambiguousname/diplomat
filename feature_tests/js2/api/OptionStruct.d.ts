// generated by diplomat-tool

import type { OptionOpaque } from "./OptionOpaque"
import type { OptionOpaqueChar } from "./OptionOpaqueChar"
import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";


export class OptionStruct {
    #a;
    get a() : OptionOpaque | undefined;
    
    #b;
    get b() : OptionOpaqueChar | undefined;
    
    #c;
    get c() : number;
    
    #d;
    get d() : OptionOpaque | undefined;
    


    // Size of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size(): usize;
    
    // Alignment of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align(): usize;

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr: pointer);
    

}