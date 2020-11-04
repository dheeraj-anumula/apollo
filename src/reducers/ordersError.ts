import { ORDERS } from 'constants/actions/OrdersActions'
import { LoadOrdersFail } from 'types/actions/Orders'

const ordersErrorReducer = (state = null, action : LoadOrdersFail) : ( null | string) => {
    switch (action.type) {
        case ORDERS.LOAD_ORDERS_FAIL:
            return action.error

        default:
            return state
    }
}

export { ordersErrorReducer }
