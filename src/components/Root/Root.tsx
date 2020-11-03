/* eslint-disable no-undef */
import React, { ReactElement } from 'react'
import Books from 'pages/Books'
import Book from 'pages/Book'
import Cart from 'pages/Cart'
import Orders from 'pages/Orders'
import { StyledRoot, Header, Logo, NavBar, Container, Footer } from './Rootstyles'
import { HOME, MY_ORDERS, CART } from 'constants/navBar'
import { Route, Switch, NavLink } from 'react-router-dom'
import { RootStateOrAny, useSelector } from 'react-redux'

const Root = () : ReactElement => {

    const header = useSelector((state : RootStateOrAny) => state.header)
    return (
        <StyledRoot>
            <Header>
                <Logo>
                    <img src={process.env.PUBLIC_URL + '/assets/images/flipkart.png'} alt='flipkart' />
                    { header && <div>{`| ${header}`} </div>}
                </Logo>
                <NavBar>
                    <NavLink exact to='/' activeClassName='active-route' >{HOME}</NavLink>
                    <NavLink exact to='/orders' activeClassName='active-route'>{MY_ORDERS}</NavLink>
                    <NavLink exact to='/cart' activeClassName='active-route'>{CART}</NavLink>
                </NavBar>
            </Header>
            <Container>
                <Switch>
                    <Route exact path='/' component={Books}></Route>
                    <Route exact path='/orders' component={Orders}></Route>
                    <Route exact path='/cart' component={Cart}></Route>
                    <Route exact path='/book/:id' component={Book}></Route>
                </Switch>
            </Container>
            <Footer>
                <p>Copyright &copy; E-commerce. All rights reserved.</p>
            </Footer>
        </StyledRoot>
    )
}

export default Root
