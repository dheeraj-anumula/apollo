import { BOOK } from 'constants/actions/BookActions'
import BookType from 'types/Book'

export interface BuyBookSuccess {
    type: typeof BOOK.BUY_BOOK_SUCCESS
}

export interface BuyBook {
    type: typeof BOOK.BUY_BOOK,
    book: BookType
}

export interface BuyBookFail {
    type: typeof BOOK.BUY_BOOK_FAIL
    error: string
}

export type BuyBookActions = BuyBookSuccess | BuyBook | BuyBookFail
