import styled from 'styled-components'

const StyledOrder = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    border-radius: .25rem;
    margin-bottom: 1.25rem;
`

const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: lightgrey;
    align-items: center;
    padding: 1rem;
    border-radius: .25rem .25rem 0 0;

    div {        
        span {
            margin-right: .5rem;
            color: black;
        }

        .label {
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 395px) {
        flex-direction: column;
        align-items: flex-start;

        .label {
            display: inline-block;
            width: 6rem;
        }
    }

`

const OrderBody = styled.div`
    display: flex;
    padding: 1rem;

    div:first-child {
        width: 7rem;
        height: 8rem;
        margin-right: 1rem;
        img {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }

    p {
        line-height: .7rem;
    }

    .author {
        margin-right: .325rem;
    }
`

export {
    StyledOrder,
    OrderHeader,
    OrderBody
}
