import React, { Component, RefObject } from 'react'
import { StyledBooks, GoToTopButton, StyledMoreDiv, StyledMoreButton } from './Books.style'
import BookCard from 'components/BookCard'
import BookType from 'types/Book'
import Error from 'components/NoItems'
import { connect } from 'react-redux'
import BooksPropsType from 'types/BooksProps'
import { loadBooks, loadMore } from 'actions/books'
import Spinner from 'components/Spinner'
import { setHeader } from 'actions/header'

class Books extends Component<BooksPropsType> {

  topRef: RefObject<HTMLButtonElement> = React.createRef();

  constructor(props: BooksPropsType) {
    super(props)
    this.scrollFunction = this.scrollFunction.bind(this)
    window.onscroll = this.scrollFunction
  }

  componentDidMount() {
    this.props.loadBooks()
    this.props.setHeader('')
  }

  scrollToTop = (): void => {
    const top = document.body.scrollTop || document.documentElement.scrollTop

    if (top) {
      window.requestAnimationFrame(this.scrollToTop)
      window.scrollTo(0, top - top / 8)
    }
  }

  showMore = (): void => {
    this.props.loadMore()
    this.props.setHeader('')
  }

  scrollFunction = (): void => {
    if (this.topRef.current) {
      if (document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        this.topRef.current.style.display = 'block'
      } else {
        this.topRef.current.style.display = this.topRef.current && 'none'
      }
    }
  }

  renderBooks = () =>
    (this.props.booksError ? <Error>{this.props.booksError}</Error> :
      (this.props.books &&
          <React.Fragment>
            <StyledBooks>
              {this.props.books.map((book: BookType) => <BookCard key={book.id} book={book} />)}
            </StyledBooks>
            <GoToTopButton title='Go to top' ref={this.topRef} onClick={this.scrollToTop}>^</GoToTopButton>
            <StyledMoreDiv>
              <StyledMoreButton title='show more' onClick={this.showMore}>Show More</StyledMoreButton>
            </StyledMoreDiv>
          </React.Fragment>
        )
      )

  render(): any {
    return (
      this.props.isLoading ?
        (<Spinner></Spinner>) :
        this.renderBooks()
    )
  }
}

const mapStateToProps = ({ isLoading, books, booksError }: BooksPropsType) => ({
  isLoading,
  books,
  booksError
})

const mapDispatchToProps = (dispatch: any) => ({
  loadBooks: () => dispatch(loadBooks()),
  loadMore: () => dispatch(loadMore()),
  setHeader: (value : string) => dispatch(setHeader(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)
