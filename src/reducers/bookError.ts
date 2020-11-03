import { BOOK } from 'constants/actions/BookActions'
import { LoadBookActions, LoadBookFail } from 'types/actions/Book/LoadBook'

const bookErrorReducer = (state = null, action : LoadBookActions) : ( null | string) => {
    switch (action.type) {
        case BOOK.LOAD_BOOK_FAIL:
            return (<LoadBookFail> action).error

        default:
            return state
    }
}

export { bookErrorReducer }
