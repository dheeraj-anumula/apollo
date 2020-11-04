import BookType from 'types/Book'
import { setBooks, setBooksError, loadBooks, incrementBooks } from 'actions/books'
import { takeEvery, put, select, delay } from 'redux-saga/effects'
import { fetchData } from 'utils/api'

const getBooksCount = (state: any) => state.newBooksCount

const handleLoadBooks = function* () {
    try {
        const booksCount = yield select(getBooksCount)
        const books: BookType[] = yield fetchData<BookType[]>(`books?_start=0&_end=${booksCount}`)
        yield delay(200)
        yield put(setBooks(books))
    } catch (error) {
        yield delay(200)
        yield put(setBooksError(error.toString()))
    }
}

const handleLoadMore = function* (): any {
    try {
        yield put(incrementBooks())
        yield put(loadBooks())
    } catch (error) {
        yield put(setBooksError(error.toString()))
    }
}

const booksSaga = function* (): any {
    yield takeEvery('LOAD_BOOKS', handleLoadBooks)
    yield takeEvery('LOAD_MORE', handleLoadMore)
}

export { booksSaga }
