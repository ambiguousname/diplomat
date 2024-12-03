// generated by diplomat-tool
import type { CyclicStructA } from "./CyclicStructA"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

type CyclicStructC_Obj = {
    a: CyclicStructA;
};

export class CyclicStructC {

    get a() : CyclicStructA;
    set a(value: CyclicStructA); 
    constructor(structObj : CyclicStructC_Obj);

    static takesNestedParameters(c: CyclicStructC): CyclicStructC;

    cyclicOut(): string;
}