import { CART } from 'constants/actions/CartActions'
import { CheckoutCartFail, EmptyCartFail, LoadCartFail } from 'types/actions/Cart'

const cartErrorReducer = (state = null, action : LoadCartFail | CheckoutCartFail | EmptyCartFail) : ( null | string) => {
    switch (action.type) {
        case CART.LOAD_CART_FAIL:
        case CART.CHECKOUT_CART_FAIL:
        case CART.EMPTY_CART_FAIL:
            return action.error

        default:
            return state
    }
}

export { cartErrorReducer }
