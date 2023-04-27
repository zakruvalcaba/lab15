const searchGrid = (value, data) => {
    // CREATE TEMP ARRAY TO STORE FILTERED EMPLOYEES
    let filteredData = []
    // LOOP THROUGH ARRAY OF EMPLOYEES
    for (let employee of data) {
        // CONVERT SEARCH TERM TO LOWERCASE
        value = value.toLowerCase()
        // CONVERT EMPLOYEE NAME TO LOWERCASE
        let employeeName = employee[1].toLowerCase()
        // SEE IF SEARCH TERM MATCHES THE EMPLOYEE NAME
        if (employeeName.includes(value)) {
            // IF IT DOES, PUSH IT TO THE TEMP ARRAY
            filteredData.push(employee)
        }
    }
    // RETURN FILTERED ARRAY
    return filteredData
}

export { searchGrid }