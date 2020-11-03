import { BOOK } from 'constants/actions/BookActions'
import { LoadBookActions, LoadBookSuccess } from 'types/actions/Book/LoadBook'
import BookType from 'types/Book'

const bookReducer = (state = null, action : LoadBookActions) : null | BookType => {
    switch (action.type) {
        case BOOK.LOAD_BOOK_SUCCESS:
            return (<LoadBookSuccess>action).book
    }
    return state
}

export { bookReducer }
