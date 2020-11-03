import { BOOKS } from 'constants/actions/BooksActions'
import { BooksAction, LoadBooksSuccess } from 'types/actions/Books'
import BookType from 'types/Book'

const booksReducer = (state = [], action : BooksAction) : ([] | BookType[])=> {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS_SUCCESS:
            return (<LoadBooksSuccess> action).books
    }
    return state
}

export { booksReducer }
