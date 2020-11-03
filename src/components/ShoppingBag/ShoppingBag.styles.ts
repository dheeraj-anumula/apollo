import Button from 'styles/Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 45%;
    margin: 0 2rem 2rem 0;
    table {
        width: 100%;
        margin-bottom: 1rem;
        border-collapse: separate;
        border-spacing: 0 .5rem;

        thead th {
            color: #555;
            border-bottom: 1px solid #555;
            white-space: nowrap;
        } 

        td:nth-child(2){
            text-align: right;
        }        
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
      }
`

const CheckoutButton = styled(Button)`
    display: inline-block;
    width: auto;
    background-color: #003d00;
    color: white;
    margin-right: 1rem;

    &:hover {
        background-color: #33691e;
    }
`

const CancelButton = styled(Button)`
    display: inline-block;
    width: auto;
    background-color: #ab000d;
    color: white;
    margin-right: 1rem;

    &:hover {
        background-color: #e53935;
    }
`

export {
    StyledDiv,
    CheckoutButton,
    CancelButton
}
