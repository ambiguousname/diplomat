import type { u8, i8, u16, i16, u32, i32, u64, i64, usize, isize, f32, f64, pointer, char } from "./diplomat-runtime.d.ts";



export class OpaqueMutexedString {
    

    get ffiValue(): pointer;


    static fromUsize(number: number): OpaqueMutexedString;

    change(number: number): void;

    borrow(): OpaqueMutexedString;

    static borrowOther(other: OpaqueMutexedString): OpaqueMutexedString;

    borrowSelfOrOther(other: OpaqueMutexedString): OpaqueMutexedString;

    getLenAndAdd(other: number): number;

    dummyStr(): String;

    wrapper(): Utf16Wrap;

    

}