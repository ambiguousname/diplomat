// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const MyOpaqueEnum_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.MyOpaqueEnum_destroy(ptr);
});

export class MyOpaqueEnum {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("MyOpaqueEnum is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            MyOpaqueEnum_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static new_() {
        const result = wasm.MyOpaqueEnum_new();
    
        try {
            return new MyOpaqueEnum(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    toString() {
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.MyOpaqueEnum_to_string(this.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }
}