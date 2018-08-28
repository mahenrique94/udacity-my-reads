import _ from "lodash"

const NONE_SHELF = "none"

const createShelfs = (books, list) => {
    books.forEach(book => {
        const { shelf = NONE_SHELF } = book
        if (_.isUndefined(list[shelf])) {
            list[shelf] = [ book ]
        } else {
            list[shelf].push(book)
        }
    })
}

export { createShelfs }
