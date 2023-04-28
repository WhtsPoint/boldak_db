export default (keys : string[], values: {[key: string]: any})  => {
    const replacements = []
    const filteredValues = []

    for(const column of ["username", "password", "email"]) {
        const newValue = values[column]
        if(newValue) {
            replacements.push(`${column} = ?`)
            filteredValues.push(newValue)
        }
    }

    return [replacements.join(", "), filteredValues]
}