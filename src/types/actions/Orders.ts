import { ORDERS } from 'constants/actions/OrdersActions'
import OrderType from 'types/Order'

export interface LoadOrdersSuccess {
    type: typeof ORDERS.LOAD_ORDERS_SUCCESS
    orders: OrderType[]
}

export interface LoadOrders {
    type: typeof ORDERS.LOAD_ORDERS
}

export interface LoadOrdersFail {
    type: typeof ORDERS.LOAD_ORDERS_FAIL
    error: string
}

export type OrdersAction = LoadOrdersSuccess | LoadOrders | LoadOrdersFail
