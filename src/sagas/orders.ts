import { takeEvery, put } from 'redux-saga/effects'
import { fetchData } from 'utils/api'
import { setOrders, setOrdersError } from 'actions/orders/OrdersActions'
import OrderType from 'types/Order'

const handleLoadOrders = function* () {
    try {
        const orders: OrderType[] =  yield fetchData<OrderType[]>('orders')
        yield put(setOrders(orders))
    } catch (error) {
        yield put(setOrdersError(error.toString()))
    }
}

const ordersSaga = function* () : any {
    yield takeEvery('LOAD_ORDERS', handleLoadOrders)
}

export { ordersSaga }
