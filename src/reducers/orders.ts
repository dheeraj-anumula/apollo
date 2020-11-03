import { ORDERS } from 'constants/actions/OrdersActions'
import { LoadOrdersSuccess, OrdersAction } from 'types/actions/Orders'
import OrderType from 'types/Order'

const ordersReducer = (state = [], action : OrdersAction) : ([] | OrderType[])=> {
    switch (action.type) {
        case ORDERS.LOAD_ORDERS_SUCCESS:
            return (<LoadOrdersSuccess> action).orders
    }
    return state
}

export { ordersReducer }
