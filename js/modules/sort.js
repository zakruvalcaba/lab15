const sortGrid = (element, data) => {
    if (element.attributes['data-order'] !== undefined) {
        let column = element.attributes['data-column'].value
        let order = element.attributes['data-order'].value
        let text = element.innerHTML
        text = text.substring(0, text.length - 1)

        switch (column) {
            case 'name':
                column = 1
                break
            case 'email':
                column = 3
                break
            case 'dept':
                column = 4
                break
        }

        if (order === 'desc') {
            element.attributes['data-order'].value = 'asc'
            data.sort((a, b) => a[column] > b[column] ? 1 : -1)
            text += '&#9660'
        } else {
            element.attributes['data-order'].value = 'desc'
            data.sort((a, b) => a[column] < b[column] ? 1 : -1)
            text += '&#9650'
        }
        element.innerHTML = text

        return data
    }
}

export { sortGrid }