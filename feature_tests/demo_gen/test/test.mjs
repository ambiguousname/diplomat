import test from "ava";
import { MyStringDemo, CyclicStructADemo, CyclicStructCDemo, RenderInfo } from "diplomat-wasm-demo-gen-feature-tests";

test("My String", (t) => {
	t.is(MyStringDemo.stringTransform("a"), "");
})

test("Cyclic Parameters", (t) => {
	t.is(RenderInfo.termini["CyclicStructA.cyclicOut"].parameters[0].name, "Self:A:Field");
	t.is(RenderInfo.termini["CyclicStructC.cyclicOut"].parameters[0].name, "Self:A:A:Field");
	t.is(CyclicStructADemo.cyclicOut(10), "10");
	t.is(CyclicStructCDemo.cyclicOut(15), "15");
});