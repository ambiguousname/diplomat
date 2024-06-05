// generated by diplomat-tool

import type { Bar } from "./Bar"
import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";


export class BorrowedFields {
    a: String;
    b: String;
    c: String;


    // Size of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _size(): usize;
    
    // Alignment of our struct in bytes for diplomat_alloc.
    // See https://doc.rust-lang.org/reference/type-layout.html for further reference.
    static get _align(): usize;

    constructor(ptr: pointer, aEdges: Array[object]);
    static fromBarAndStrings(bar: Bar, dstr16: String, utf8Str: String): BorrowedFields;

    

}