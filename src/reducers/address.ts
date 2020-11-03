import { ADDRESS } from 'constants/actions/CartActions'
import { LoadAddressActions, LoadAddressSuccess } from 'types/actions/Address'
import Address from 'types/Address'


const addressReducer = (state = null, action : LoadAddressActions) : Address | null => {
    switch (action.type) {
        case ADDRESS.LOAD_ADDRESS_SUCCESS:
            return (<LoadAddressSuccess> action).address
    }
    return state
}

export { addressReducer }
