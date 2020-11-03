import { loadAddress } from 'actions/address'
import NoItems from 'components/NoItems'
import { ShippingAddress } from 'components/ShippingAddress/ShippingAddress'
import Spinner from 'components/Spinner'
import React, { ReactElement, useEffect } from 'react'
import ShoppingBag from 'components/ShoppingBag'
import { connect, useDispatch } from 'react-redux'
import CartPropsType from 'types/CartProps'
import { StyledCart } from './Cart.styles'
import { loadCart } from 'actions/cart'
import { setHeader } from 'actions/header'

const Cart = ({ cartItems,
    shippingCharge = 1.5,
    tax = 1,
    isLoading,
    cartError,
    address
}: CartPropsType): ReactElement => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart())
        dispatch(loadAddress())
        dispatch(setHeader('Cart'))
    }, [])

    const renderCart = () => {
        return (cartError ? <NoItems>{cartError}</NoItems> :
            cartItems &&
            (<StyledCart>
                <ShippingAddress address={address}></ShippingAddress>
                <ShoppingBag cartItems={cartItems} shippingCharge={shippingCharge} tax={tax} ></ShoppingBag>
            </StyledCart>)
        )
    }

    return (
        isLoading ? <Spinner></Spinner> : renderCart()
    )
}

const mapStateToProps = ({ isLoading, cartItems, cartError, address }: CartPropsType) => ({
    isLoading,
    cartItems,
    cartError,
    address
})

export default connect(mapStateToProps)(Cart)
