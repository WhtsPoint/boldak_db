class Username {
    private readonly _value: string

    constructor(value: any) {
        if(!(typeof value === "string") || value.length === 0) throw new Error("Invalid username format")
        this._value = value
    }

    get(): string {
        return this._value
    }
}

export default Username