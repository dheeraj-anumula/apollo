import { takeEvery, put, fork, delay } from 'redux-saga/effects'
import { deleteData, fetchData } from 'utils/api'
import {
    emptyCart,
    emptyCartFail,
    emptyCartSuccess,
    loadCart,
    setCart,
    setCartFail,
    checkoutCartSuccess,
    checkoutCartFail
} from 'actions/cart'

import Cart from 'types/Cart'
import { EmptyCart } from 'types/actions/Cart'
import { buyBook, buyBookFail } from 'actions/book'
import Book from 'types/Book'

const handleLoadCart = function* () {
    try {
        const orders: Cart[] = yield fetchData<Cart[]>('cart')
        yield delay(200)
        yield put(setCart(orders))
    } catch (error) {
        yield put(setCartFail(error.toString()))
    }
}

const handleDeleteItem = function* (item: Cart) {
    try {
        yield deleteData(`cart/${item.id}`)
    } catch (error) {
        yield put(emptyCartFail(error.toString()))
    }
}

const handleEmptyCart = function* ({ cart }: EmptyCart) {
    try {
        for (let i = 0; i < cart.length; i++) {
            yield fork(handleDeleteItem, cart[i])
        }
        yield put(emptyCartSuccess())
        yield delay(2000)
        yield put(loadCart())
    } catch (error) {
        yield put(emptyCartFail(error.toString()))
    }
}

const handleBuyBookFromCart = function* (book: Book) {
    try {
        yield put(buyBook(book))
    } catch (error) {
        yield put(buyBookFail(error.toString()))
    }
}

const handleCheckoutCart = function* ({ cart }: EmptyCart) {
    try {
        for (let i = 0; i < cart.length; i++) {
            yield fork(handleBuyBookFromCart, cart[i].book)
        }
        yield put(checkoutCartSuccess())
        yield put(emptyCart(cart))
    } catch (error) {
        yield put(checkoutCartFail(error.toString()))
    }
}

const loadCartSaga = function* () {
    yield takeEvery('LOAD_CART', handleLoadCart)
    yield takeEvery('EMPTY_CART', handleEmptyCart)
    yield takeEvery('CHECKOUT_CART', handleCheckoutCart)
}

export { loadCartSaga }
