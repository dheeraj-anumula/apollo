import styled from 'styled-components'
import Button from 'styles/Button'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
      }
`

const ImageDiv = styled.div`
    margin-bottom: 1rem;

    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
    }

    @media only screen and (min-width: 768px) {
        flex: 1 0 auto;
      }
`

const BookDetails = styled.div`
    margin-bottom: 1rem;

    h2 {
        text-align: center;
    }

    table {
        margin: 0 auto;
        border-spacing: 30px 20px;

        td: nth-child(1) {
            color: #878787
        }
    }

    @media only screen and (min-width: 768px) {
        h2 {
            text-align: left;
            margin-left: 2rem;
        }

        table {
            margin: 0;
        }
    }
`

const ActionsDiv = styled.div`

    @media only screen and (min-width: 768px) {
        margin-left: 2rem;
        button {
            display: inline-block;
            margin-right: 1rem;
            width: 8rem;
        }
    }
`

const AddToCartButton = styled(Button)`
    background-color: #00766c;
    color: white;

    &:hover {
        color: black;
        background-color: #26a69a;
    }
`

const BuyNowButton = styled(Button)`
    background-color: #b2a300;
    color: white;

    &:hover {
        color: black;
        background-color: #ffdf00;
    }
`

const BookDescription = styled.div`
    margin: 1rem 1rem 2rem;
    padding: 1rem;
    background-color: #f5f6fa;
`

export {
    StyledDiv,
    ImageDiv,
    BookDetails,
    ActionsDiv,
    AddToCartButton,
    BuyNowButton,
    BookDescription
}
