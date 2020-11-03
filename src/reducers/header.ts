import { Header } from 'types/actions/Header'

const headerReducer = ( state = '', action : Header) : string => {
    switch (action.type) {
        case 'SET_HEADER':
            return action.value
        default:
            return state
    }
}

export { headerReducer }
