import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";



export class Opaque {
    

    get ffiValue(): pointer;


    static new_(): Opaque;

    assertStruct(s: MyStruct): void;

    static returnsUsize(): number;

    static returnsImported(): ImportedStruct;

    static cmp(): number;

    

}