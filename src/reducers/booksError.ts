import { BOOKS } from 'constants/actions/BooksActions'
import { LoadBooksFail } from 'types/actions/Books'

const booksErrorReducer = (state = null, action : LoadBooksFail) : ( null | string) => {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS_FAIL:
            return action.error

        default:
            return state
    }
}

export { booksErrorReducer }
