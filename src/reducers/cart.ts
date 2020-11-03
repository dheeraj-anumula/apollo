import { CART } from 'constants/actions/CartActions'
import { LoadCartActions, LoadCartSuccess} from 'types/actions/Cart'
import Cart from 'types/Cart'

const cartReducer = (state : Cart[] = [], action : LoadCartActions) : Cart[] | [] => {
    switch (action.type) {
        case CART.LOAD_CART_SUCCESS:
            return (<LoadCartSuccess> action).cart
        default:
            return state
    }
}

export { cartReducer }
