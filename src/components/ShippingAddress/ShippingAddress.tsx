import React, { ReactElement, useEffect, useState } from 'react'
import { EditButton, SaveButton, StyledDiv } from './ShippingAddress.styles'
import ShippingAddressProps from 'types/ShippingAddressProps'
import NoItems from 'components/NoItems'
import { useDispatch } from 'react-redux'
import { saveAddress } from 'actions/address'


export const ShippingAddress = ({ address }: ShippingAddressProps): ReactElement => {

    const [isSaved, setIsSaved] = useState(true)
    const [currentAddress, setCurrentAddress] = useState(address)
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentAddress({ ...currentAddress, [event.target.name]: event.target.value })
    }

    const saveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(saveAddress(currentAddress))
        setIsSaved(true)
    }

    const editHandler = () => {
        setIsSaved(false)
    }

    useEffect(() => {
        setCurrentAddress(address)
    }, [address])

    return (
        currentAddress ?
            <StyledDiv>
                <h3>Shipping Address</h3>
                <form id="address-form">
                    <fieldset disabled={isSaved}>
                        <div className='form-group'>
                            <label htmlFor='inputAddress'>Address</label>
                            <input name='line1' type='text' className='form-control' id='inputAddress' placeholder='1234 Main St'
                            value={currentAddress.line1} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputAddress2'>Address 2</label>
                            <input name='line2' type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor'
                            value={currentAddress.line2} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputCity'>City</label>
                            <input name='city' type='text' className='form-control' id='inputCity' value={currentAddress.city} onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputState'>State</label>
                            <select name='state' id='inputState' className='form-control' value={currentAddress.state} onChange={handleChange}>
                                <option>Choose State</option>
                                <option>Andhra Pradesh (AP)</option>
                                <option>Arunachal Pradesh (AR)</option>
                                <option>Assam (AS)</option>
                                <option>Bihar (BR)</option>
                                <option>Chhattisgarh (CG)</option>
                                <option>Goa (GA)</option>
                                <option>Gujarat (GJ)</option>
                                <option>Haryana (HR)</option>
                                <option>Himachal Pradesh (HP)</option>
                                <option>Jammu and Kashmir (JK)</option>
                                <option>Jharkhand (JH)</option>
                                <option>Karnataka (KA)</option>
                                <option>Kerala (KL)</option>
                                <option>Madhya Pradesh (MP)</option>
                                <option>Maharashtra (MH)</option>
                                <option>Manipur (MN)</option>
                                <option>Meghalaya (ML)</option>
                                <option>Mizoram (MZ)</option>
                                <option>Nagaland (NL)</option>
                                <option>Odisha(OR)</option>
                                <option>Punjab (PB)</option>
                                <option>Rajasthan (RJ)</option>
                                <option>Sikkim (SK)</option>
                                <option>Tamil Nadu (TN)</option>
                                <option>Telangana (TS)</option>
                                <option>Tripura (TR)</option>
                                <option>Uttar Pradesh (UP)</option>
                                <option>Uttarakhand (UK)</option>
                                <option>West Bengal (WB)</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputZip'>Zip</label>
                            <input name='zip' type='text' className='form-control' id='inputZip' value={currentAddress.zip} onChange={handleChange}/>
                        </div>
                    </fieldset>
                </form>
                {isSaved ? <EditButton type="button" onClick={editHandler}> Edit </EditButton>
                    : <SaveButton type="button" onClick={(event) => saveHandler(event)} > Save </SaveButton>}
            </StyledDiv>
            : <NoItems>Loading Address Failed</NoItems>
    )
}

export default ShippingAddress
