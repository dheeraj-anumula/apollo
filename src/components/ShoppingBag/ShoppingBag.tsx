import { checkoutCart, emptyCart } from 'actions/cart'
import NoItems from 'components/NoItems'
import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cart from 'types/Cart'
import ShoppingBagType from 'types/ShoppingBag'
import { StyledDiv, CancelButton, CheckoutButton } from './ShoppingBag.styles'

const ShoppingBag = ({
    cartItems,
    shippingCharge = 60,
    tax = 20
}: ShoppingBagType): ReactElement => {

    const [price, setPrice] = useState({ itemsPrice: 0, total: 0 })

    const dispatch = useDispatch()

    const checkoutHandler = () => dispatch(checkoutCart(cartItems))
    const cancelHandler = () => dispatch(emptyCart(cartItems))

    useEffect(() => {
        if (cartItems) {
            setPrice((prevPrice) => {
                let _itemsPrice = 0
                cartItems.map((item: Cart) => {
                    if (item.book.price)
                        _itemsPrice += item.book.price
                })
                return {
                    ...prevPrice,
                    itemsPrice: _itemsPrice,
                    total: _itemsPrice + shippingCharge + tax
                }
            })
        }
    }, [cartItems])

    return (
        <StyledDiv>
            <h3>Shopping Bag</h3>
            { cartItems.length ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Book</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item: Cart) => (
                                    <tr key={item.id}>
                                        <td>{item.book.name}</td>
                                        <td>{item.book.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div>
                        <h3>Payment Info</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Items Price</td>
                                    <td>&#x20B9;{price.itemsPrice}</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>&#x20B9;{tax}</td>
                                </tr>
                                <tr>
                                    <td>Shipping Charge</td>
                                    <td>&#x20B9;{shippingCharge}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td><b>&#x20B9;{Math.round(price.total * 100) / 100}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CancelButton type='button' onClick={cancelHandler}>Cancel</CancelButton>
                    <CheckoutButton type='button' onClick={checkoutHandler}>Checkout</CheckoutButton>
                </div>
            ) : (<NoItems>No items added to cart</NoItems>)
            }
        </StyledDiv>
    )
}

export default ShoppingBag


