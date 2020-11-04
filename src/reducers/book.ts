import { BOOK } from 'constants/actions/BookActions'
import { LoadBookSuccess } from 'types/actions/Book/LoadBook'
import BookType from 'types/Book'

const bookReducer = (state = null, action : LoadBookSuccess) : null | BookType => {
    switch (action.type) {
        case BOOK.LOAD_BOOK_SUCCESS:
            return action.book
    }
    return state
}

export { bookReducer }
