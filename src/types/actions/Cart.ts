import { CART } from 'constants/actions/CartActions'
import Cart from 'types/Cart'

export interface LoadCartSuccess {
    type: typeof CART.LOAD_CART_SUCCESS
    cart: Cart[]
}

export interface LoadCart {
    type: typeof CART.LOAD_CART
}

export interface LoadCartFail {
    type: typeof CART.LOAD_CART_FAIL
    error: string
}

export interface EmptyCartSuccess {
    type: typeof CART.EMPTY_CART_SUCCESS
}

export interface EmptyCart {
    type: typeof CART.EMPTY_CART,
    cart: Cart[]
}

export interface EmptyCartFail {
    type: typeof CART.EMPTY_CART_FAIL
    error: string
}

export interface CheckoutCartSuccess {
    type: typeof CART.CHECKOUT_CART_SUCCESS
}

export interface CheckoutCart {
    type: typeof CART.CHECKOUT_CART
    cart: Cart[]
}

export interface CheckoutCartFail {
    type: typeof CART.CHECKOUT_CART_FAIL
    error: string
}

export type LoadCartActions = LoadCartSuccess | LoadCart | LoadCartFail
export type EmptyCartActions = EmptyCartSuccess | EmptyCart | EmptyCartFail
export type CheckoutCartActions = CheckoutCartSuccess | CheckoutCart | CheckoutCartFail
