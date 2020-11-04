import { BOOK } from 'constants/actions/BookActions'
import { AddToCartFail, BuyBookFail, LoadBookFail } from 'types/actions/Book'

const bookErrorReducer = (state = null, action : LoadBookFail | AddToCartFail | BuyBookFail) : ( null | string) => {
    switch (action.type) {
        case BOOK.LOAD_BOOK_FAIL:
            return action.error

        default:
            return state
    }
}

export { bookErrorReducer }
