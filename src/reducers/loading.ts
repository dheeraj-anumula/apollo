import { BOOKS } from 'constants/actions/BooksActions'
import { LoadBooks } from 'types/actions/Books'

const loadingReducer = ( state = false, action :LoadBooks ) : boolean => {
    switch (action.type) {
        case BOOKS.LOAD_BOOKS:
            return true
        case BOOKS.LOAD_BOOKS_FAIL:
        case BOOKS.LOAD_BOOKS_SUCCESS:
            return false

        default:
            return state
    }
}

export { loadingReducer }
