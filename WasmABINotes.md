# Notes on the new WASM C ABI
## By ambiguousname

Using https://github.com/WebAssembly/tool-conventions/blob/main/BasicCABI.md and my own experimentation as a reference.

### Structs

Structs are allocated and constructed same as before. However, instead of passing in a comma separated list of the members:

```js
intoA() {
	let functionCleanupArena = new diplomatRuntime.CleanupArena();
	
	const result = wasm.MyStruct_into_a(...this._intoFFI());

	try {
		return result;
	}
	
	finally {
		functionCleanupArena.free();
	}
}
```

We instead pass in a pointer to the struct (per https://github.com/WebAssembly/tool-conventions/blob/main/BasicCABI.md#function-arguments-and-return-values):

```js
intoA() {
	let functionCleanupArena = new diplomatRuntime.CleanupArena();

	const diplomatReceive = wasm.diplomat_alloc(32, 8);

	let a = new Uint8Array(wasm.memory.buffer, diplomatReceive, 1);
	a[0] = this.#a;
	
	const result = wasm.MyStruct_into_a(diplomatReceive);

	try {
		return result;
	}
	
	finally {
		wasm.diplomat_free(...);
		functionCleanupArena.free();
	}
}
```

