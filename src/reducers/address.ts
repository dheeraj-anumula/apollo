import { ADDRESS } from 'constants/actions/CartActions'
import { LoadAddressSuccess } from 'types/actions/Address'
import Address from 'types/Address'


const addressReducer = (state = null, action : LoadAddressSuccess) : Address | null => {
    switch (action.type) {
        case ADDRESS.LOAD_ADDRESS_SUCCESS:
            return action.address
    }
    return state
}

export { addressReducer }
