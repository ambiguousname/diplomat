// generated by diplomat-tool
import { DataProvider } from "./DataProvider.mjs"
import { FixedDecimal } from "./FixedDecimal.mjs"
import { FixedDecimalFormatterOptions } from "./FixedDecimalFormatterOptions.mjs"
import { Locale } from "./Locale.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An  Fixed Decimal Format object, capable of formatting a [`FixedDecimal`] as a string.
*
*See the [Rust documentation for `FixedDecimalFormatter`](https://docs.rs/icu/latest/icu/decimal/struct.FixedDecimalFormatter.html) for more information.
*/
const FixedDecimalFormatter_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_FixedDecimalFormatter_destroy_mv1(ptr);
});

export class FixedDecimalFormatter {
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
            FixedDecimalFormatter_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static tryNew(locale, provider, options) {
        let functionCleanupArena = new diplomatRuntime.CleanupArena();
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_FixedDecimalFormatter_try_new_mv1(diplomatReceive.buffer, locale.ffiValue, provider.ffiValue, ...options._intoFFI(functionCleanupArena, {}));
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return new FixedDecimalFormatter(diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            functionCleanupArena.free();
        
            diplomatReceive.free();
        }
    }

    formatWrite(value) {
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.icu4x_FixedDecimalFormatter_format_write_mv1(this.ffiValue, value.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }
}