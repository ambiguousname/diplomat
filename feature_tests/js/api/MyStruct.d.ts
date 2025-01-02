// generated by diplomat-tool
import type { MyEnum } from "./MyEnum"
import type { MyZst } from "./MyZst"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

type MyStruct_obj = {
    a: number;
    b: boolean;
    c: number;
    d: bigint;
    e: number;
    f: codepoint;
    g: MyEnum;
};



export class MyStruct {
	

    get a() : number;
    set a(value: number); 

    get b() : boolean;
    set b(value: boolean); 

    get c() : number;
    set c(value: number); 

    get d() : bigint;
    set d(value: bigint); 

    get e() : number;
    set e(value: number); 

    get f() : codepoint;
    set f(value: codepoint); 

    get g() : MyEnum;
    set g(value: MyEnum); 

    /** Create `MyStruct` from an object that contains all of `MyStruct`s fields.
    * Optional fields do not need to be included in the provided object.
    */
    static FromFields(structObj : MyStruct_obj) : MyStruct;
    


    #defaultConstructor(): MyStruct;

    intoA(): number;

    static returnsZstResult(): void;

    static failsZstResult(): void;

    constructor();
}