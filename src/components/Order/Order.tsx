import React, { ReactElement } from 'react'
import { StyledOrder, OrderHeader, OrderBody } from './Order.style'
import OrderType from 'types/Order'
import formatDate from 'utils/helpers/formatDate'
import { useHistory } from 'react-router-dom'

const Order = ({ order }: { order: OrderType }): ReactElement => {
    const history = useHistory()
    const handleImageClick = () => history.push(`/book/${order.book.id}`)

    return (
        <StyledOrder>
            <OrderHeader>
                <div>
                    <span className='label'>Order Placed</span>
                    <span>{formatDate(order.placedDate)}</span>
                </div>
                <div>
                    <span className='label'>Status</span>
                    <span>{order.status}</span>
                </div>
            </OrderHeader>
            <OrderBody>
                <div>
                    <img onClick={handleImageClick} src={order.book.img} alt={order.book.name} />
                </div>
                <div>
                    <h3>{order.book.name}</h3>
                    <p>{order.book.author}</p>
                    <p><b>&#x20B9;{order.book.price}</b></p>
                </div>
            </OrderBody>
        </StyledOrder>
    )
}

export default Order
