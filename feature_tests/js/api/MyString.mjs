// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const MyString_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.MyString_destroy(ptr);
});

export class MyString {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            MyString_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static new_(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, v)).splat()];
        const result = wasm.MyString_new(...vSlice);
    
        try {
            return new MyString(result, []);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    static newUnsafe(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, v)).splat()];
        const result = wasm.MyString_new_unsafe(...vSlice);
    
        try {
            return new MyString(result, []);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    static newOwned(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, v)).splat()];
        const result = wasm.MyString_new_owned(...vSlice);
    
        try {
            return new MyString(result, []);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    static newFromFirst(v) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const vSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.strs(wasm, v, "string8")).splat()];
        const result = wasm.MyString_new_from_first(...vSlice);
    
        try {
            return new MyString(result, []);
        }
        
        finally {
            functionCleanupArena.free();
        }
    }

    set str(newStr) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const newStrSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, newStr)).splat()];
        wasm.MyString_set_str(this.ffiValue, ...newStrSlice);
    
        try {}
        
        finally {
            functionCleanupArena.free();
        }
    }

    get str() {
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.MyString_get_str(this.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }

    static stringTransform(foo) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const fooSlice = [...functionCleanupArena.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, foo)).splat()];
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.MyString_string_transform(...fooSlice, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            functionCleanupArena.free();
        
            write.free();
        }
    }
}