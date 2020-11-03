
import { all } from 'redux-saga/effects'
import { booksSaga } from 'sagas/books'
import { loadBookSaga } from 'sagas/book'
import { ordersSaga } from 'sagas/orders'
import { loadCartSaga } from 'sagas/cart'
import { loadAddressSaga, saveAddressSaga } from 'sagas/address'

const rootSaga = function* () {
    yield all([
        booksSaga(),
        loadBookSaga(),
        ordersSaga(),
        loadCartSaga(),
        saveAddressSaga(),
        loadAddressSaga()
    ])
}

export default rootSaga
