import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 500ms;
    overflow: hidden;
    width: 15em;
    height: 18em;
    margin: 1em;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.125);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:focus, &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(1.2);
        z-index: 1;

        button {
            display:block
        }
      }
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.6em;
    cursor: pointer;
`

const ImageDiv = styled.div`
      height: 8em;
      margin-bottom: .5em;
`

const Image = styled.img`
    display:block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
`

const Title = styled.h4`
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    margin: 0;
    text-overflow: ellipsis;
`

const Description = styled.p`
    display: -webkit-box;
    overflow: hidden;
    flex: 1 0 auto;
    margin: 0.5rem;
    height: 6em;
    font-size: .85rem;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`

const Button = styled.button`
    background-color: yellow;
    border: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2em;
    cursor: pointer;
    outline: none;

    @media only screen and (min-width: 841px) {
        display: none;
    }
`
export {
    Card,
    ImageDiv,
    Image,
    CardBody,
    Title,
    Description,
    Button
}
