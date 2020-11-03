import STATUS from 'constants/orderStatus'

const orderStatusPicker = () :string => {
    return STATUS[Math.floor(Math.random() * STATUS.length)]
}

export default orderStatusPicker
