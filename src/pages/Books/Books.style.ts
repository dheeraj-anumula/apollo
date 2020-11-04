import styled from 'styled-components'

const StyledBooks = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1rem;
`

const GoToTopButton = styled.button`
    display: none;
    position: fixed;
    bottom: 3em;
    right: 1em;
    z-index: 99;
    margin: 0 auto;
    font-size: 18px;
    opacity: 0.7;
    border: none;
    outline: none;
    background-color: crimson;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 9px;

    &:hover {
        opacity: 1;
    }
  }
`

const StyledMoreDiv = styled.div`
    margin: 2em 0;
`

const StyledMoreButton = styled.button`
    display: block;
    margin: 0 auto;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;

    &:hover {
        text-decoration: none;
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
    }
`

export {
    StyledBooks,
    StyledMoreDiv,
    StyledMoreButton,
    GoToTopButton
}
