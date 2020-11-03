import { ORDERS } from 'constants/actions/OrdersActions'
import { LoadOrders, LoadOrdersFail, LoadOrdersSuccess  } from 'types/actions/Orders'
import OrderType from 'types/Order'

const loadOrders = (): LoadOrders => ({
    type: ORDERS.LOAD_ORDERS
})

const setOrders = ( orders : OrderType[]) : LoadOrdersSuccess => ({
    type: ORDERS.LOAD_ORDERS_SUCCESS,
    orders
})

const setOrdersError = (error: string): LoadOrdersFail => ({
    type: ORDERS.LOAD_ORDERS_FAIL,
    error
})

export {
    loadOrders,
    setOrders,
    setOrdersError
}
