import { BOOKS } from 'constants/actions/BooksActions'
import { LoadBooksSuccess } from 'types/actions/Books'
import BookType from 'types/Book'

const booksReducer = (state = [], action : LoadBooksSuccess) : ([] | BookType[])=> {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS_SUCCESS:
            return action.books
    }
    return state
}

export { booksReducer }
