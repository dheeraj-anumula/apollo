import { BOOK } from 'constants/actions/BookActions'
import { BOOKS } from 'constants/actions/BooksActions'
import { CART } from 'constants/actions/CartActions'
import { ORDERS } from 'constants/actions/OrdersActions'
import { LoadBook } from 'types/actions/Book'
import { LoadBooks } from 'types/actions/Books'
import { LoadCart } from 'types/actions/Cart'
import { LoadOrders } from 'types/actions/Orders'

const loadingReducer = (state = false, action: LoadBooks | LoadBook | LoadCart | LoadOrders): boolean => {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS:
        case BOOK.LOAD_BOOK:
        case BOOK.ADD_TO_CART:
        case BOOK.BUY_BOOK:
        case CART.LOAD_CART:
        case CART.EMPTY_CART:
        case CART.CHECKOUT_CART:
        case ORDERS.LOAD_ORDERS:
            return true
        case BOOKS.LOAD_BOOKS_FAIL:
        case BOOKS.LOAD_BOOKS_SUCCESS:
        case BOOK.LOAD_BOOK_FAIL:
        case BOOK.LOAD_BOOK_SUCCESS:
        case BOOK.ADD_TO_CART_FAIL:
        case BOOK.ADD_TO_CART_SUCCESS:
        case BOOK.BUY_BOOK_FAIL:
        case BOOK.BUY_BOOK_SUCCESS:
        case CART.LOAD_CART_SUCCESS:
        case CART.LOAD_CART_FAIL:
        case CART.EMPTY_CART_SUCCESS:
        case CART.EMPTY_CART_FAIL:
        case CART.CHECKOUT_CART_SUCCESS:
        case CART.CHECKOUT_CART_FAIL:
        case ORDERS.LOAD_ORDERS_FAIL:
        case ORDERS.LOAD_ORDERS_SUCCESS:
            return false

        default:
            return state
    }
}

export { loadingReducer }
