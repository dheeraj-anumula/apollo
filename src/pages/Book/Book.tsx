import React, { ReactElement } from 'react'
import {
    StyledArticle,
    ImageSection,
    BookSection,
    AddToCartButton,
    BuyNowButton,
    BookDescriptionSection,
    ActionsSection
} from './Book.styles'

import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import BookPropsType from 'types/BookProps'
import Spinner from 'components/Spinner'
import Error from 'components/NoItems'
import { useHistory, useParams } from 'react-router-dom'
import { loadBook, addToCart } from 'actions/book'
import { setHeader } from 'actions/header'

interface BookParams {
    id: string;
}

const Book = ( { book, isLoading, bookError} : BookPropsType) : ReactElement => {
    const { id } = useParams<BookParams>()
    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBook(id))
    }, [])

    useEffect(() => {
        if (book) {
            dispatch(setHeader(book.name))
        }
    }, [book])

    const buyBookHandler = () => {
        dispatch(addToCart(book))
        history.push('/cart')
    }

    const addToCartHandler = () => {
        dispatch(addToCart(book))
    }

    const renderBook = () : any => (
        book ?
            (<StyledArticle>
                <ImageSection>
                    <img src={book.img} />
                </ImageSection>
                <div>
                    <BookSection>
                        <h2>{book.name}</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Book Price</td><td><b>&#x20B9;{book.price}</b></td>
                                </tr>
                                <tr>
                                    <td>Author Name</td><td>{book.author}</td>
                                </tr>
                                <tr>
                                    <td>Page Count</td><td>{book.pages}</td>
                                </tr>
                                <tr>
                                    <td>ISBN</td><td>{book.id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </BookSection>
                    <ActionsSection>
                        <AddToCartButton onClick={addToCartHandler}> Add to Cart</AddToCartButton>
                        <BuyNowButton onClick={buyBookHandler}> Buy Now</BuyNowButton>
                    </ActionsSection>
                    <BookDescriptionSection>
                        <h3>Description</h3>
                        <p>{book.description}</p>
                    </BookDescriptionSection>
                </div>
            </StyledArticle>)
            : (bookError && <Error>{bookError}</Error>)
    )

    return isLoading ? (<Spinner></Spinner>) : renderBook()
}


const mapStateToProps = ({ isLoading, book, bookError } : BookPropsType) => ({
    isLoading,
    book,
    bookError
})

export default connect(mapStateToProps)(Book)
