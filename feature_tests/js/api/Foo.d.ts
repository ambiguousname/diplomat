// generated by diplomat-tool
import type { Bar } from "./Bar"
import type { BorrowedFields } from "./BorrowedFields"
import type { BorrowedFieldsReturning } from "./BorrowedFieldsReturning"
import type { BorrowedFieldsWithBounds } from "./BorrowedFieldsWithBounds"
import type { BorrowedFieldsWithBounds_Obj } from "./BorrowedFieldsWithBounds"
import type { BorrowedFields_Obj } from "./BorrowedFields"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

export class Foo {
    

    get ffiValue(): pointer;

    static new_(x: string): Foo;

    get bar(): Bar;

    asReturning(): BorrowedFieldsReturning;

    static extractFromFields(fields: BorrowedFields | BorrowedFields_Obj): Foo;

    static extractFromBounds(bounds: BorrowedFieldsWithBounds | BorrowedFieldsWithBounds_Obj, anotherString: string): Foo;
}