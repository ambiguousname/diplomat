

// Base enumerator definition
export class ContiguousEnum {
    #value = undefined;

    static values = new Map([
        ["C", 0],
        ["D", 1],
        ["E", 2],
        ["F", 3]
    ]);
    constructor(value) {
        if (value instanceof ContiguousEnum) {
            this.#value = value.value;
            return;
        }

        if (ContiguousEnum.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a ContiguousEnum and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return ContiguousEnum.values.get(this.#value);
    }

    static C = new ContiguousEnum("C");

    static D = new ContiguousEnum("D");

    static E = new ContiguousEnum("E");

    static F = new ContiguousEnum("F");


    

}