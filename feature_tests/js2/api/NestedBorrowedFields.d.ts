import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";


export class NestedBorrowedFields {
    #ptr: pointer;
    fields: BorrowedFields;
    bounds: BorrowedFieldsWithBounds;
    bounds2: BorrowedFieldsWithBounds;


    constructor(ptr: pointer, xEdges: Array[object], yEdges: Array[object], zEdges: Array[object]): NestedBorrowedFields;
    static fromBarAndFooAndStrings(bar: Bar, foo: Foo, dstr16X: String, dstr16Z: String, utf8StrY: String, utf8StrZ: String): NestedBorrowedFields;

    

}