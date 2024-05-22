// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"



export class One {
	

	static transitivity(hold:Onenohold:One,): One;

	static cycle(hold:Twonohold:One,): One;

	static manyDependents(a:Oneb:One,c:Two,d:Two,nohold:Two,): One;

	static returnOutlivesParam(hold:Twonohold:One,): One;

	static diamondTop(top:Oneleft:One,right:One,bottom:One,): One;

	static diamondLeft(top:Oneleft:One,right:One,bottom:One,): One;

	static diamondRight(top:Oneleft:One,right:One,bottom:One,): One;

	static diamondBottom(top:Oneleft:One,right:One,bottom:One,): One;

	static diamondAndNestedTypes(a:Oneb:One,c:One,d:One,nohold:One,): One;

	static implicitBounds(explicitHold:OneimplicitHold:One,nohold:One,): One;

	static implicitBoundsDeep(explicit:Oneimplicit1:One,implicit2:One,nohold:One,): One;

}