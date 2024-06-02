// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class BorrowedFieldsWithBounds {
    #ptr
    fieldA;
    fieldB;
    fieldC;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant objects will only
    // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    //
    // This method does not handle lifetime relationships: if `'foo: 'bar`, make sure fooAppendArray contains everything barAppendArray does.
    _intoFFI(aAppendArray = [], bAppendArray = [], cAppendArray = []) {
        return [
            diplomatRuntime.DiplomatBuf.str16(wasm, fieldA) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, fieldB) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, fieldC) /* TODO: Freeing code */]
    }
    

    constructor(ptr, aEdges, bEdges, cEdges) {
        this.#ptr = ptr;
        fieldA = fieldA(aEdges) // TODO: Slice c_to_js;
        fieldB = fieldB(bEdges) // TODO: Slice c_to_js;
        fieldC = fieldC(cEdges) // TODO: Slice c_to_js;
    }
    static fromFooAndStrings(foo, dstr16X, utf8StrZ) {
        
        const dstr16XSlice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16X);
        const dstr16XArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrZSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8StrZ);
        const utf8StrZArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        // This lifetime edge depends on lifetimes 'x, 'y, 'z
        let xEdges = [foo, dstr16XSlice, utf8StrZSlice];
        
        // This lifetime edge depends on lifetimes 'y, 'z
        let yEdges = [foo, utf8StrZSlice];
        
        // This lifetime edge depends on lifetimes 'z
        let zEdges = [utf8StrZSlice];
        const result = wasm.BorrowedFieldsWithBounds_from_foo_and_strings(foo.ffiValue, dstr16XSlice.ptr, dstr16XSlice.size, utf8StrZSlice.ptr, utf8StrZSlice.size);
    
        dstr16XSlice.garbageCollect();
        
        utf8StrZSlice.garbageCollect();
        
        return BorrowedFieldsWithBounds // TODO: Struct c_to_js;
    }

    

}