// generated by diplomat-tool
import type { UnimportedEnum } from "./UnimportedEnum"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

type ImportedStruct_Obj = {
    foo: UnimportedEnum;
    count: number;
};

export class ImportedStruct {

    get foo() : UnimportedEnum;
    set foo(value: UnimportedEnum); 

    get count() : number;
    set count(value: number); 
    constructor(struct_obj : ImportedStruct_Obj);
}