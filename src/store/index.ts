import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware),
        composeEnhancers())
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore
