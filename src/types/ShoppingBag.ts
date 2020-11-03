import Cart from './Cart'

interface ShoppingBag {
    cartItems: Cart[]
    shippingCharge: number
    tax: number
}

export default ShoppingBag
