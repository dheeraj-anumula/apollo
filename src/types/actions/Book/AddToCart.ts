import { BOOK } from 'constants/actions/BookActions'
import Book from 'types/Book'

export interface AddToCartSuccess {
    type: typeof BOOK.ADD_TO_CART_SUCCESS
}

export interface AddToCart {
    type: typeof BOOK.ADD_TO_CART,
    book: Book
}

export interface AddToCartFail {
    type: typeof BOOK.ADD_TO_CART_FAIL
    error: string
}

export type AddToCartActions = AddToCartSuccess | AddToCart | AddToCartFail
