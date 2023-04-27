// BUILD THE EMPLOYEE GRID
const build = (table, data) => {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of data) {
        tbody.innerHTML += 
        `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td class="d-flex justify-content-end"><button class='btn btn-sm btn-danger delete'><i class="fa-solid fa-user-xmark"></i></button></td>
            </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    document.querySelector('#empCount').value = `(${data.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(data))
}

 export { build }