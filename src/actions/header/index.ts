import { Header } from 'types/actions/Header'

const setHeader = (value: string) : Header => ({
    type: 'SET_HEADER',
    value
})

export { setHeader }
