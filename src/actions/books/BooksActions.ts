import { BOOKS, LOAD_MORE, INCREMENT_BOOKS } from 'constants/actions/BooksActions'
import { BooksAction, IncrementBooks, LoadMore  } from 'types/actions/Books'
import BookType from 'types/Book'

const loadBooks = (): BooksAction => ({
    type: BOOKS.LOAD_BOOKS
})

const setBooks = (books: BookType[]): BooksAction => ({
    type: BOOKS.LOAD_BOOKS_SUCCESS,
    books
})

const setBooksError = (error: string): BooksAction => ({
    type: BOOKS.LOAD_BOOKS_FAIL,
    error
})

const loadMore = (): LoadMore => ({
    type: LOAD_MORE
})

const incrementBooks = (): IncrementBooks => ({
    type: INCREMENT_BOOKS
})


export {
    loadBooks,
    setBooks,
    setBooksError,
    loadMore,
    incrementBooks
}
