


export class NestedBorrowedFields {
    #ptr
    fields;
    bounds;
    bounds2;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant objects will only
    // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    //
    // This method does not handle lifetime relationships: if `'foo: 'bar`, make sure fooAppendArray contains everything barAppendArray does.
    #intoFFI(xAppendArray = [], yAppendArray = [], zAppendArray = []) {
        return [
            /*TODO: gen_js_to_c_for_type for Struct*/, 
            /*TODO: gen_js_to_c_for_type for Struct*/, 
            /*TODO: gen_js_to_c_for_type for Struct*/]
    }
    

    constructor(ptr, xEdges, yEdges, zEdges) {
        this.#ptr = ptr;
        fields = BorrowedFields // TODO: Struct c_to_js,
        bounds = BorrowedFieldsWithBounds // TODO: Struct c_to_js,
        bounds2 = BorrowedFieldsWithBounds // TODO: Struct c_to_js;
    }
    static fromBarAndFooAndStrings(bar, foo, dstr16X, dstr16Z, utf8StrY, utf8StrZ) {
        
        const dstr16XSlice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16X);
        const dstr16XArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const dstr16ZSlice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16Z);
        const dstr16ZArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrYSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8StrY);
        const utf8StrYArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrZSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8StrZ);
        const utf8StrZArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        // This lifetime edge depends on lifetimes 'x, 'y
        let xEdges = [bar, dstr16XSlice, utf8StrYSlice];
        // This lifetime edge depends on lifetimes 'y
        let yEdges = [bar, utf8StrYSlice];
        // This lifetime edge depends on lifetimes 'z
        let zEdges = [foo, dstr16ZSlice, utf8StrZSlice];const result = wasm.NestedBorrowedFields_from_bar_and_foo_and_strings(bar.ffiValue, foo.ffiValue, dstr16XSlice.ptr, dstr16XSlice.size, dstr16ZSlice.ptr, dstr16ZSlice.size, utf8StrYSlice.ptr, utf8StrYSlice.size, utf8StrZSlice.ptr, utf8StrZSlice.size);
    
        dstr16XSlice.garbageCollect();
        
        dstr16ZSlice.garbageCollect();
        
        utf8StrYSlice.garbageCollect();
        
        utf8StrZSlice.garbageCollect();
        
        return NestedBorrowedFields // TODO: Struct c_to_js;
    }

    

}