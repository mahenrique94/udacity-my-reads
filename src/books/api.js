import { PATHS } from "constants/API"

import _ from "lodash"

import http from "http"

import { handleError, handleSuccess, responseWasOK } from "utils/http"

const get = bookId =>
    http.get(`${PATHS.BOOKS}/${bookId}`)
        .then(handleSuccess)
        .catch(handleError)

const getAll = () =>
    http.get(PATHS.BOOKS)
        .then(({ data: { books }, status }) => {
            const list = {}
            if (responseWasOK(status)) {
                books.forEach(book =>
                    _.isUndefined(list[book.shelf]) ? list[book.shelf] = [ book ] : list[book.shelf].push(book))
            }
            return list
        })
        .catch(handleError)

const search = query =>
    http.post(PATHS.BOOKS_SEARCH, { query })
        .then(handleSuccess)
        .catch(handleError)

const updateShelf = (bookId, shelf) =>
    http.put(`/${PATHS.BOOKS}/${bookId}`, { shelf })
        .then(() => getAll())
        .catch(handleError)

export { get, getAll, search, updateShelf }
