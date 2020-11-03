import { LOAD_MORE } from 'constants/actions/BooksActions'
import { LoadMore } from 'types/actions/Books'

const newBooksCountReducers = (state = 20, action : LoadMore) : number => {
    switch (action.type) {
        case LOAD_MORE:
            return state + 10
        default:
            return state
    }
}

export { newBooksCountReducers }
