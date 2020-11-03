import Book from 'types/Book'
import Cart from 'types/Cart'
import { v4 as uuid } from 'uuid'


const getNewCartItem = (book : Book) : Cart=> ({
    id: uuid(),
    book : book
})

export default getNewCartItem
