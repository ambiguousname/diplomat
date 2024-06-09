// generated by diplomat-tool

import type { RefListParameter } from "./RefListParameter"
import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";



export class RefList {
    

    get ffiValue(): pointer;

    // Size of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size(): usize;
    
    // Alignment of our opaque type in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align(): usize;


    static node(data: RefListParameter): RefList;

    

}