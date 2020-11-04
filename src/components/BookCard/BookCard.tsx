import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Title, Image, ImageDiv, CardBody, Description, Button } from './BookCard.styles'
import { addToCart } from 'actions/book'
import { useDispatch } from 'react-redux'
import BookCardProps from 'types/BookCardProps'

const BookCard = ({book} : BookCardProps): ReactElement => {
    const history = useHistory()

    const dispatch = useDispatch()

    const navigateToBook = () => {
        history.push(`/book/${book.id}`)
    }

    const buyNowHandler = () => {
        dispatch(addToCart(book))
        history.push('/cart')
    }

    return (
        <Card id={`${book.id}`}>
            <CardBody onClick={navigateToBook}>
                <ImageDiv>
                    <Image src={book.img} alt={book.name} />
                </ImageDiv>
                <Title>{book.name}</Title>
                <Description>{book.description}</Description>
            </CardBody>
            <Button onClick={buyNowHandler}>Buy Now</Button>
        </Card >
    )
}

export default BookCard
