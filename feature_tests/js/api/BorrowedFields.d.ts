// generated by diplomat-tool
import type { Bar } from "./Bar"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

type BorrowedFields_Obj = {
    a: string;
    b: string;
    c: string;
};

export class BorrowedFields {

    get a() : string;
    set a(value: string); 

    get b() : string;
    set b(value: string); 

    get c() : string;
    set c(value: string); 
    constructor(struct_obj : BorrowedFields_Obj);

    static fromBarAndStrings(bar: Bar, dstr16: string, utf8Str: string): BorrowedFields;
}