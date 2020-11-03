import { BOOKS } from 'constants/actions/BooksActions'
import { BooksAction, LoadBooksFail } from 'types/actions/Books'

const booksErrorReducer = (state = null, action : BooksAction) : ( null | string) => {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS_FAIL:
            return (<LoadBooksFail> action).error

        default:
            return state
    }
}

export { booksErrorReducer }
