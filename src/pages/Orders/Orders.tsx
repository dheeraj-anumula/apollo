import React, { ReactElement, useEffect } from 'react'
import Order from 'components/Order'
import NoItems from 'components/NoItems'
import OrdersPropsType from 'types/OrdersProps'
import { connect, useDispatch } from 'react-redux'
import { loadOrders } from 'actions/orders'
import Spinner from 'components/Spinner'
import { setHeader } from 'actions/header'

const Orders = ({ isLoading, orders, ordersError }: OrdersPropsType) : ReactElement => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOrders())
        dispatch(setHeader('My Orders'))
    }, [])

    const renderOrders = () => (
        ordersError ? <NoItems>{ordersError}</NoItems> :
            <article>
                {!orders.length && <NoItems>You haven&apos;t placed any orders so far</NoItems>}
                {orders && [...orders].reverse().map((order) => (
                    <Order key={order.id} order={order}></Order>
                ))}
            </article>
    )

    return isLoading ? <Spinner></Spinner> : renderOrders()
}


const mapStateToProps = ({ isLoading, orders, ordersError }: OrdersPropsType) => ({
    isLoading,
    orders,
    ordersError
})

export default connect(mapStateToProps)(Orders)
