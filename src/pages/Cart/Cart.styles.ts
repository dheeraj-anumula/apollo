import styled from 'styled-components'

const StyledCart = styled.article`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
`

export {
    StyledCart
}
