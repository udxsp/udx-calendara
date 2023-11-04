import { normalizeDate } from './formatDate'
import { DateLike } from './types'

export const isLeapYear = (year: number | string) => {
    const numericYear: number = typeof year === 'string' ? parseInt(year, 10) : year
    return (numericYear % 4 === 0 && numericYear % 100 !== 0) || numericYear % 400 === 0
}

export const compareDates = (date1: DateLike, date2: DateLike) => {
    const d1 = normalizeDate(date1)
    const d2 = normalizeDate(date2)

    if (d1.getTime() < d2.getTime()) return -1
    if (d1.getTime() === d2.getTime()) return 0
    return 1
}
