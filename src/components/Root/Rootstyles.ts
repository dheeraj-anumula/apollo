import styled from 'styled-components'

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Header = styled.header`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2874f0;
    align-items: center;
    margin-bottom: 1rem;
    color: white;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Logo = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;

    img {
        width: 5rem;
        height: 1.5rem;
        margin-right: .3rem;
    }

    div {
        font-size: 1.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media only screen and (min-width: 768px) {
        margin-left: 1rem;
    }
`

const NavBar = styled.nav`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: white;
    a {
        cursor: pointer;
        padding: 3px;
        text-decoration: none;

        &:not(.active-route):hover {
            color: #C0C0C0
        }
    }

    .active-route {
        font-weight: bold;
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        width: auto;
        background-color: #2874f0;
        margin-right: 1rem;

        a {
            margin-right: .6rem;
            color: white;
            &:not(.active-route):hover {
                color: #383838;
            }
        }

    }
`

const Container = styled.main`
    width: 90%;
    margin: 0 auto;
    flex: 1 0 auto;
    margin-bottom: 7rem;
`

const Footer = styled.footer`
    height: 3rem;
    background-color: #212121;
    flex-shrink: 0;

    p {
        color: white;
        text-align: right;
        font-size: .8rem;
        margin-right: 5%;
    }
`

export {
    StyledRoot,
    Logo,
    Header,
    NavBar,
    Container,
    Footer
}
