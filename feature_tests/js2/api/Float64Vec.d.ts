import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";



export class Float64Vec {
    

    get ffiValue(): pointer;


    static newBool(v: Array<bool>): Float64Vec;

    static newI16(v: Array<number>): Float64Vec;

    static newU16(v: Array<number>): Float64Vec;

    static newIsize(v: Array<number>): Float64Vec;

    static newUsize(v: Array<number>): Float64Vec;

    static newF64BeBytes(v: Uint8Array): Float64Vec;

    static newFromOwned(v: Array<number>): Float64Vec;

    get asBoxedSlice(): Array<number>;

    get asSlice(): Array<number>;

    fillSlice(v: Array<number>): void;

    setValue(newSlice: Array<number>): void;

    toString(): String;

    borrow(): Array<number>;

    get(i: number): number | undefined;

    

}