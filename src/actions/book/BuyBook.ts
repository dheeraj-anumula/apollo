import { BOOK } from 'constants/actions/BookActions'
import { BuyBookActions } from 'types/actions/Book/BuyBook'
import BookType from 'types/Book'

const buyBook = (book : BookType): BuyBookActions => ({
    type: BOOK.BUY_BOOK,
    book
})

const buyBookSuccess = (): BuyBookActions => ({
    type: BOOK.BUY_BOOK_SUCCESS
})

const buyBookFail = (error: string): BuyBookActions => ({
    type: BOOK.BUY_BOOK_FAIL,
    error
})

export {
    buyBook,
    buyBookSuccess,
    buyBookFail
}
