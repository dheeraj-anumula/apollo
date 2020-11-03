import { ADDRESS } from 'constants/actions/CartActions'
import { LoadAddress,
    LoadAddressFail,
    LoadAddressSuccess,
    SaveAddress,
    SaveAddressFail,
    SaveAddressSuccess
} from 'types/actions/Address'
import Address from 'types/Address'

const saveAddress = (address: Address): SaveAddress => ({
    type: ADDRESS.SAVE_ADDRESS,
    address
})

const saveAddressSuccess = (): SaveAddressSuccess => ({
    type: ADDRESS.SAVE_ADDRESS_SUCCESS
})

const saveAddressFail = (error: string): SaveAddressFail => ({
    type: ADDRESS.SAVE_ADDRESS_FAIL,
    error
})

const loadAddress = (): LoadAddress => ({
    type: ADDRESS.LOAD_ADDRESS
})

const loadAddressSuccess = (address: Address): LoadAddressSuccess => ({
    type: ADDRESS.LOAD_ADDRESS_SUCCESS,
    address
})

const loadAddressFail = (error: string): LoadAddressFail => ({
    type: ADDRESS.LOAD_ADDRESS_FAIL,
    error
})

export {
    saveAddress,
    saveAddressSuccess,
    saveAddressFail,
    loadAddress,
    loadAddressSuccess,
    loadAddressFail
}
