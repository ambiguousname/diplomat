import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";


export class MyStruct {
    #ptr: pointer;
    a: number;
    b: boolean;
    c: number;
    d: number;
    e: number;
    f: char;
    g: MyEnum;


    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr: pointer): MyStruct;
    static new_(): MyStruct;

    intoA(): number;

    

}