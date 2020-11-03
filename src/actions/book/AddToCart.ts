import { BOOK } from 'constants/actions/BookActions'
import { AddToCartActions } from 'types/actions/Book/AddToCart'
import BookType from 'types/Book'

const addToCart = (book : BookType): AddToCartActions => ({
    type: BOOK.ADD_TO_CART,
    book
})

const addToCartSuccess = (): AddToCartActions => ({
    type: BOOK.ADD_TO_CART_SUCCESS
})

const addToCartFail = (error: string): AddToCartActions => ({
    type: BOOK.ADD_TO_CART_FAIL,
    error
})

export {
    addToCart,
    addToCartSuccess,
    addToCartFail
}
