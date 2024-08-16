// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class BorrowedFieldsReturning {

    #bytes;
    get bytes()  {
        return this.#bytes;
    }
    set bytes(value) {
        this.#bytes = value;
    }
    constructor() {
        if (arguments.length > 0 && arguments[0] === diplomatRuntime.internalConstructor) {
            this.#fromFFI(Array.prototype.slice.call(arguments, 1));
        } else {
            
            this.#bytes = bytes;
        }
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant information will be
    // set up here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [...(appendArrayMap["aAppendArray"].length > 0 ? diplomatRuntime.CleanupArena.createWith(appendArrayMap["aAppendArray"]) : functionCleanupArena).alloc(diplomatRuntime.DiplomatBuf.str8(wasm, this.#bytes)).splat()]
    }

    #fromFFI(ptr, aEdges) {
        const bytesDeref = ptr;
        this.#bytes = new diplomatRuntime.DiplomatSliceStr(wasm, bytesDeref,  "string8", aEdges);
    }

    // Return all fields corresponding to lifetime `'a` 
    // without handling lifetime dependencies (this is the job of the caller)
    // This is all fields that may be borrowed from if borrowing `'a`,
    // assuming that there are no `'other: a`. bounds. In case of such bounds,
    // the caller should take care to also call _fieldsForLifetimeOther
    get _fieldsForLifetimeA() { 
        return [bytes];
    };
}