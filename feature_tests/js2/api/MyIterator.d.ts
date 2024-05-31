
// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"




export class MyIterator {
    

    get ffiValue(): pointer;


    #iteratorNext(): number | undefined;

    
    get value(): number;
    
    get done(): bool;
    
    next() : number;

}