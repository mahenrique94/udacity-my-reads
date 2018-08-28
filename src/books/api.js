import { PATHS } from "constants/API"

import http from "http"

import { createShelfs } from "utils/api"
import { handleError, handleSuccess, responseWasOK } from "utils/http"

const get = bookId =>
    http.get(`${PATHS.BOOKS}/${bookId}`)
        .then(handleSuccess)
        .catch(handleError)

const getAll = () =>
    http.get(PATHS.BOOKS)
        .then(({ data: { books }, status }) => {
            const shelfs = {}
            if (responseWasOK(status)) {
                createShelfs(books, shelfs)
            }
            return { books, shelfs }
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
