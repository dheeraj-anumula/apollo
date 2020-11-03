import BookType from 'types/Book'
import OrderType from 'types/Order'
import { v4 as uuid } from 'uuid'
import orderStatusPicker from './oderStatusPicker'

const getNewOrder = (book: BookType): OrderType => ({
    id: uuid(),
    placedDate: new Date().toString(),
    status: orderStatusPicker(),
    book: {
        id: book.id,
        name: book.name,
        price: book.price,
        author: book.author,
        img: book.img
    }
})

export default getNewOrder
