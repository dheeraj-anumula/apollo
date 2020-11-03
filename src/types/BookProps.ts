import BookType from './Book'

interface BookProps {
    book : BookType,
    isLoading: boolean,
    bookError: string
}

export default BookProps
