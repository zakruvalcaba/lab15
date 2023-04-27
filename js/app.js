import { init } from './modules/init.js'
import { build } from './modules/ui.js'
import { addEmployee } from './modules/add.js'
import { deleteFromGrid } from './modules/delete.js'
import { searchGrid } from './modules/search.js'
import { sortGrid } from './modules/sort.js'

// INITIALIZE ALL TOASTS IN THE APP
const toastElList = [].slice.call(document.querySelectorAll('.toast'))
const toastList = toastElList.map((toastEl) => {
    return new bootstrap.Toast(toastEl)
})

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let data
if (localStorage.getItem('employees') !== null) {
    data = JSON.parse(localStorage.getItem('employees'))
} else {
    data = init()
}

// GET DOM ELEMENTS
let form        = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let delBtn      = document.querySelector('.deleteEmployee')
let search      = document.getElementById('search')
let modalAdd    = new bootstrap.Modal(document.getElementById('addEmployeeModal'))
let modalDel    = new bootstrap.Modal(document.getElementById('deleteEmployeeModal'))

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(empTable, sortGrid(empTable.getElementsByClassName('sort')[0], data))

// SEARCH EMPLOYEE
search.addEventListener('keyup', (e) => {
    // GET TERM USER ENTERED INTO TEXT BOX
    let term = e.target.value
    // GET FILTERED ARRAY OF EMPLOYEES
    let filteredData = searchGrid(term, data)
    // BUILD GRID
    buildGrid(empTable, filteredData)
})

// ADD EMPLOYEE
document.querySelector('.addEmployee').addEventListener('click', () => {
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = parseInt(document.getElementById('id').value)
    let empName     = document.getElementById('name').value
    let empExt      = parseInt(document.getElementById('extension').value)
    let empEmail    = document.getElementById('email').value
    let empDept     = document.getElementById('department').value

    // BUILD THE GRID
    data = addEmployee(empID, empName, empExt, empEmail, empDept, data)
    buildGrid(empTable, data)
    // RESET THE FORM
    form.reset()
    // CLOSE MODAL
    modalAdd.hide()
    // SHOW THE 'ADD EMPLOYEE' TOAST
    toastList[0].show()
})

// DELETE / SORT EMPLOYEE
empTable.addEventListener('click', (e) => {    
    if (e.target.parentElement.classList.contains('delete')) {
        // CONFIRM THE DELETE / SHOW MODAL
        modalDel.show()
        // DELETE EMPLOYEE AND BUILD THE GRID
        delBtn.addEventListener('click', () => {
            data = deleteFromGrid(e.target, data)
            buildGrid(empTable, data)
            // HIDE MODAL
            modalDel.hide()
            // SHOW THE 'DELETE EMPLOYEE' TOAST
            toastList[1].show()
        })
    } else if (e.target.classList.contains('sort')) {
        buildGrid(empTable, sortGrid(e.target, data))
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid(empTable, data) {
    build(empTable, data)
}