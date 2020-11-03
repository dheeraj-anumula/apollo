
import { addToCartFail, addToCartSuccess, setBook, setBookError } from 'actions/book'
import { fetchData, postData } from 'utils/api'
import { put, takeEvery } from 'redux-saga/effects'
import { LoadBook } from 'types/actions/Book/LoadBook'
import BookType from 'types/Book'
import newOrder from 'utils/helpers/getNewOrder'
import { AddToCart, BuyBook } from 'types/actions/Book'
import { buyBookSuccess, buyBookFail } from 'actions/book/BuyBook'
import { loadOrders } from 'actions/orders'
import getNewCartItem from 'utils/helpers/getNewCartItem'
import { loadCart } from 'actions/cart'

const handleLoadBook = function* (action: LoadBook) {
    try {
        const book: BookType =  yield fetchData<BookType>(`books/${action.bookId}`)
        yield put(setBook(book))
    } catch (error) {
        yield put(setBookError(error.toString()))
    }
}

export const handleBuyBook = function* (action : BuyBook) {
    try {
        const orderedBook = newOrder(action.book)
        yield postData('orders', orderedBook)
        yield put(buyBookSuccess())
        yield put(loadOrders())
    } catch (error) {
        yield put(buyBookFail(error.toString()))
    }
}

const handleAddToCart = function* (action : AddToCart) {
    try {
        const newCartItem = getNewCartItem(action.book)
        yield postData('cart', newCartItem)
        yield put(addToCartSuccess())
        yield put(loadCart())
    } catch (error) {
        yield put(addToCartFail(error.toString()))
    }
}

const loadBookSaga = function* () {
    yield takeEvery('LOAD_BOOK', handleLoadBook)
    yield takeEvery('BUY_BOOK', handleBuyBook)
    yield takeEvery('ADD_TO_CART', handleAddToCart)
}

export { loadBookSaga }
