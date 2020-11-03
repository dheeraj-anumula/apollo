import { ADDRESS } from 'constants/actions/CartActions'
import Address from 'types/Address'

export interface LoadAddressSuccess {
    type: typeof ADDRESS.LOAD_ADDRESS_SUCCESS
    address: Address
}

export interface LoadAddress {
    type: typeof ADDRESS.LOAD_ADDRESS
}

export interface LoadAddressFail {
    type: typeof ADDRESS.LOAD_ADDRESS_FAIL
    error: string
}

export interface SaveAddressSuccess {
    type: typeof ADDRESS.LOAD_ADDRESS_SUCCESS
}

export interface SaveAddress {
    type: typeof ADDRESS.LOAD_ADDRESS
    address: Address
}

export interface SaveAddressFail {
    type: typeof ADDRESS.LOAD_ADDRESS_FAIL
    error: string
}

export type LoadAddressActions = LoadAddressSuccess | LoadAddress | LoadAddressFail
export type SaveAddressActions = SaveAddressSuccess | SaveAddress | SaveAddressFail
