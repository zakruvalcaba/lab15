// DELETE FROM GRID
const deleteFromGrid = (element, data) => {
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    let rowIndex = element.parentElement.parentElement.parentElement.rowIndex
    // REMOVE EMPLOYEE FROM ARRAY
    data.splice(rowIndex - 1, 1)

    return data
}

export { deleteFromGrid }