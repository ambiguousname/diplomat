// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"


export class Foo {
	
	#aEdge;
	
	
	static new(x) {
        const result = wasm.Foo_new();
        return new Foo(result, [], aEdges);
    }
	
	getBar() {
        const result = wasm.Foo_get_bar();
        return new Bar(result, [], bEdges, aEdges);
    }
	
	static newStatic(x) {
        const result = wasm.Foo_new_static();
        return new Foo(result, [], aEdges);
    }
	
	asReturning() {
        const result = wasm.Foo_as_returning();
        return BorrowedFieldsReturning // TODO;
    }
	
	static extractFromFields(fields) {
        const result = wasm.Foo_extract_from_fields();
        return new Foo(result, [], aEdges);
    }
	
	static extractFromBounds(boundsanotherString,) {
        const result = wasm.Foo_extract_from_bounds();
        return new Foo(result, [], aEdges);
    }
	
}