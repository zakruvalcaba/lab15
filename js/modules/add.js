const addEmployee = (empID, empName, empExt, empEmail, empDept, data) => {
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    data.push(arrNewEmployee)

    return data
}

export { addEmployee }