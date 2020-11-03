import { CART } from 'constants/actions/CartActions'
import {
    CheckoutCart,
    CheckoutCartFail,
    CheckoutCartSuccess,
    EmptyCart,
    EmptyCartFail,
    EmptyCartSuccess,
    LoadCart,
    LoadCartFail,
    LoadCartSuccess
} from 'types/actions/Cart'
import Cart from 'types/Cart'

const loadCart = (): LoadCart => ({
    type: CART.LOAD_CART
})

const setCart = (cart: Cart[]): LoadCartSuccess => ({
    type: CART.LOAD_CART_SUCCESS,
    cart
})

const setCartFail = (error: string): LoadCartFail => ({
    type: CART.LOAD_CART_FAIL,
    error
})

const emptyCart = (cart: Cart[]): EmptyCart => ({
    type: CART.EMPTY_CART,
    cart
})

const emptyCartSuccess = (): EmptyCartSuccess => ({
    type: CART.EMPTY_CART_SUCCESS
})

const emptyCartFail = (error: string): EmptyCartFail => ({
    type: CART.EMPTY_CART_FAIL,
    error
})

const checkoutCart = (cart: Cart[]): CheckoutCart => ({
    type: CART.CHECKOUT_CART,
    cart
})

const checkoutCartSuccess = (): CheckoutCartSuccess => ({
    type: CART.CHECKOUT_CART_SUCCESS
})

const checkoutCartFail = (error: string): CheckoutCartFail => ({
    type: CART.CHECKOUT_CART_FAIL,
    error
})

export {
    loadCart,
    setCart,
    setCartFail,
    emptyCart,
    emptyCartSuccess,
    emptyCartFail,
    checkoutCart,
    checkoutCartSuccess,
    checkoutCartFail
}
