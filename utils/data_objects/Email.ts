class Email {
    private readonly _value: string

    constructor(value: any) {
        if(!(typeof value === "string") || !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) throw new Error("Invalid mail format")
        this._value = value
    }

    get() : string {
        return this._value
    }
}

export default Email