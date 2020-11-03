
import Address from './Address'
import Cart from './Cart'

interface CartProps {
    cartItems: Cart[]
    isLoading: boolean
    shippingCharge: number
    tax: number
    cartError: string
    address: Address
}

export default CartProps
