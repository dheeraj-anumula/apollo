import { ORDERS } from 'constants/actions/OrdersActions'
import { LoadOrdersSuccess } from 'types/actions/Orders'
import OrderType from 'types/Order'

const ordersReducer = (state = [], action : LoadOrdersSuccess) : ([] | OrderType[])=> {
    switch (action.type) {
        case ORDERS.LOAD_ORDERS_SUCCESS:
            return action.orders
    }
    return state
}

export { ordersReducer }
