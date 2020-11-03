import Address from 'types/Address'
import { SaveAddress } from 'types/actions/Address'
import { takeEvery, put } from 'redux-saga/effects'
import { fetchData, postData } from 'utils/api'
import { loadAddress, loadAddressFail, loadAddressSuccess, saveAddressFail, saveAddressSuccess } from 'actions/address'

const handleLoadAddress = function* () {
    try {
        const address: Address =  yield fetchData<Address>('address')
        yield put(loadAddressSuccess(address))
    } catch (error) {
        yield put(loadAddressFail(error.toString()))
    }
}

const handleSaveAddress = function* (action : SaveAddress) {
    try {
        yield postData('address', action.address)
        yield put(saveAddressSuccess())
        yield put(loadAddress())
    } catch (error) {
        yield put(saveAddressFail(error.toString()))
    }
}

const loadAddressSaga = function* () {
    yield takeEvery('LOAD_ADDRESS', handleLoadAddress)
}

const saveAddressSaga = function* () {
    yield takeEvery('SAVE_ADDRESS', handleSaveAddress)
}

export { loadAddressSaga, saveAddressSaga }
