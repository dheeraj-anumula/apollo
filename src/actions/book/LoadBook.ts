import { BOOK } from 'constants/actions/BookActions'
import { LoadBookActions } from 'types/actions/Book/LoadBook'
import BookType from 'types/Book'

const loadBook = (bookId : string): LoadBookActions => ({
    type: BOOK.LOAD_BOOK,
    bookId
})

const setBook = (book: BookType): LoadBookActions => ({
    type: BOOK.LOAD_BOOK_SUCCESS,
    book
})

const setBookError = (error: string): LoadBookActions => ({
    type: BOOK.LOAD_BOOK_FAIL,
    error
})

export {
    loadBook,
    setBook,
    setBookError
}
