class Id {
    private readonly _value: number;

    constructor(value: any) {
        const handledValue = parseInt(value)
        if(isNaN(handledValue)) throw new Error("Invalid id value type")
        this._value = handledValue;
    }

    get(): number {
        return this._value
    }
}

export default Id