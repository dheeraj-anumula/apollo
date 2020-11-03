
import OrderType from './Order'

interface OrdersProps {
    orders : OrderType[],
    isLoading: boolean,
    ordersError: string
}

export default OrdersProps
