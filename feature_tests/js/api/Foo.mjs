// generated by diplomat-tool
import { Bar } from "./Bar.mjs"
import { BorrowedFields } from "./BorrowedFields.mjs"
import { BorrowedFieldsReturning } from "./BorrowedFieldsReturning.mjs"
import { BorrowedFieldsWithBounds } from "./BorrowedFieldsWithBounds.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const Foo_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Foo_destroy(ptr);
});

export class Foo {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    #aEdge = [];
    
    constructor(ptr, selfEdge, aEdge) {
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            Foo_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static new_(x) {
        
        const xSlice = diplomatRuntime.DiplomatBuf.str8(wasm, x);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [xSlice];
        const result = wasm.Foo_new(xSlice.ptr, xSlice.size);
    
        try {
            return new Foo(result, [], aEdges);
        }
        
        finally {
            xSlice.garbageCollect();
        }
    }

    get bar() {
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        
        // This lifetime edge depends on lifetimes 'a, 'b
        let bEdges = [this];
        const result = wasm.Foo_get_bar(this.ffiValue);
    
        try {
            return new Bar(result, [], bEdges, aEdges);
        }
        
        finally {}
    }

    asReturning() {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 8, 4, false);
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [this];
        const result = wasm.Foo_as_returning(diplomatReceive.buffer, this.ffiValue);
    
        try {
            return new BorrowedFieldsReturning(diplomatRuntime.internalConstructor, diplomatReceive.buffer, aEdges);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static extractFromFields(fields) {
        
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        // This lifetime edge depends on lifetimes 'a
        let aEdges = [...fields._fieldsForLifetimeA];
        const result = wasm.Foo_extract_from_fields(...fields._intoFFI(functionCleanupArena, {aAppendArray: [aEdges],}));
    
        try {
            return new Foo(result, [], aEdges);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    static extractFromBounds(bounds, anotherString) {
        
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const anotherStringSlice = diplomatRuntime.DiplomatBuf.str8(wasm, anotherString);
        
        // This lifetime edge depends on lifetimes 'a, 'y, 'z
        let aEdges = [...bounds._fieldsForLifetimeB, ...bounds._fieldsForLifetimeC, anotherStringSlice];
        const result = wasm.Foo_extract_from_bounds(...bounds._intoFFI(functionCleanupArena, {bAppendArray: [aEdges],cAppendArray: [aEdges],}), anotherStringSlice.ptr, anotherStringSlice.size);
    
        try {
            return new Foo(result, [], aEdges);
        }
        
        finally {
            functionCleanupArena.free();
        
            anotherStringSlice.garbageCollect();
        }
    }
}