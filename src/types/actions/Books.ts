import { BOOKS, INCREMENT_BOOKS, LOAD_MORE } from 'constants/actions/BooksActions'
import BookType from '../Book'

export interface LoadBooksSuccess {
    type: typeof BOOKS.LOAD_BOOKS_SUCCESS
    books: BookType[]
}

export interface LoadBooks {
    type: typeof BOOKS.LOAD_BOOKS
}

export interface LoadBooksFail {
    type: typeof BOOKS.LOAD_BOOKS_FAIL
    error: string
}

export interface LoadMore {
    type: typeof LOAD_MORE
}

export interface IncrementBooks {
    type: typeof INCREMENT_BOOKS
}


export type BooksAction = LoadBooksSuccess | LoadBooks | LoadBooksFail
