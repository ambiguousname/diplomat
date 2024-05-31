
// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"




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