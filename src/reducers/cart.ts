import { CART } from 'constants/actions/CartActions'
import { LoadCartSuccess} from 'types/actions/Cart'
import Cart from 'types/Cart'

const cartReducer = (state : Cart[] = [], action : LoadCartSuccess) : Cart[] | [] => {
    switch (action.type) {
        case CART.LOAD_CART_SUCCESS:
            return action.cart
        default:
            return state
    }
}

export { cartReducer }
