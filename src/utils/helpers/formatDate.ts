import MONTHS from 'constants/date'

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const dayOfMonth = date.getUTCDate().toString().padStart(2, '0')
    const month = MONTHS[date.getUTCMonth()]
    const year = date.getUTCFullYear()
    return `${dayOfMonth} ${month}, ${year}`
}

export default formatDate
