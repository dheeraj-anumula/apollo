import BookType from './Book'

interface Order {
    id: string,
    placedDate: string,
    status: string,
    book: Partial<BookType>
}

export default Order
