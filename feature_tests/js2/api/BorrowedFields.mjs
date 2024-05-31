


export class BorrowedFields {
    #ptr
    a;
    b;
    c;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant objects will only
    // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    #intoFFI(aAppendArray = []) {
        return [
            diplomatRuntime.DiplomatBuf.str16(wasm, a) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, b) /* TODO: Freeing code */, 
            diplomatRuntime.DiplomatBuf.str8(wasm, c) /* TODO: Freeing code */]
    }
    

    constructor(ptr, aEdges) {
        this.#ptr = ptr;
        a = a(aEdges) // TODO: Slice c_to_js,
        b = b(aEdges) // TODO: Slice c_to_js,
        c = c(aEdges) // TODO: Slice c_to_js;
    }
    static fromBarAndStrings(bar, dstr16, utf8Str) {
        
        const dstr16Slice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16);
        const dstr16Arena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        const utf8StrSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8Str);
        const utf8StrArena = new diplomatRuntime.DiplomatFinalizedArena();
        
        
        // This lifetime edge depends on lifetimes 'x
        let xEdges = [bar, dstr16Slice, utf8StrSlice];const result = wasm.BorrowedFields_from_bar_and_strings(bar.ffiValue, dstr16Slice.ptr, dstr16Slice.size, utf8StrSlice.ptr, utf8StrSlice.size);
    
        dstr16Slice.garbageCollect();
        
        utf8StrSlice.garbageCollect();
        
        return BorrowedFields // TODO: Struct c_to_js;
    }

    

}