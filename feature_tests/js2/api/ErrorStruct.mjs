


export class ErrorStruct {
    #ptr
    i;
    j;

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    #intoFFI() {
        return [
            i, 
            j]
    }
    

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    constructor(ptr) {
        this.#ptr = ptr;
        i = i,
        j = j;
    }
    

}