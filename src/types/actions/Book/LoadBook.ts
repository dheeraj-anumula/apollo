import { BOOK } from 'constants/actions/BookActions'
import BookType from 'types/Book'

export interface LoadBookSuccess {
    type: typeof BOOK.LOAD_BOOK_SUCCESS
    book: BookType
}

export interface LoadBook {
    type: typeof BOOK.LOAD_BOOK,
    bookId: string
}

export interface LoadBookFail {
    type: typeof BOOK.LOAD_BOOK_FAIL
    error: string
}

export type LoadBookActions = LoadBookSuccess | LoadBook | LoadBookFail
