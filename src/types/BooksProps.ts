import { loadBooks, loadMore } from 'actions/books'
import { setHeader } from 'actions/header'
import BookType from './Book'

interface BooksProps {
    isLoading: boolean
    books: BookType[]
    loadBooks: typeof loadBooks
    loadMore: typeof loadMore
    setHeader: typeof setHeader
    booksError: string
}

export default BooksProps
