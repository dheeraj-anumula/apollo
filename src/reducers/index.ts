import { combineReducers } from 'redux'
import { loadingReducer } from 'reducers/loading'
import { booksReducer } from 'reducers/books'
import { booksErrorReducer } from 'reducers/booksError'
import { newBooksCountReducers } from 'reducers/newBooksCount'
import { bookReducer } from 'reducers/book'
import { bookErrorReducer } from 'reducers/bookError'
import { ordersReducer } from 'reducers/orders'
import { cartReducer } from 'reducers/cart'
import { addressReducer } from 'reducers/address'
import { headerReducer } from './header'
import { cartErrorReducer } from './cartError'
import { ordersErrorReducer } from './ordersError'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    books: booksReducer,
    book: bookReducer,
    booksError: booksErrorReducer,
    bookError: bookErrorReducer,
    cartError: cartErrorReducer,
    ordersError: ordersErrorReducer,
    newBooksCount: newBooksCountReducers,
    orders: ordersReducer,
    cartItems: cartReducer,
    address: addressReducer,
    header: headerReducer
})

export default rootReducer
