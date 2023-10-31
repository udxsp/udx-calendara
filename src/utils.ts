import { formatDate, normalizeDate } from './formatDate'
import { Period, AddPeriodToParam, DateLike } from './types'

const periodMs: Record<Exclude<Period, 'months' | 'years'>, number> = {
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 60 * 60 * 1000 * 24,
    weeks: 7 * 60 * 60 * 1000 * 24
}

export const addPeriodTo = ({
    date,
    n,
    period,
    formatStr,
    operation = 'add'
}: AddPeriodToParam) => {
    const secureDate = normalizeDate(date)

    if (period === 'months') {
        operation === 'add'
            ? secureDate.setMonth(secureDate.getMonth() + n)
            : secureDate.setMonth(secureDate.getMonth() - n)
        return formatDate({ date: new Date(secureDate), formatStr })
    }
    if (period === 'years') {
        operation === 'add'
            ? secureDate.setFullYear(secureDate.getFullYear() + n)
            : secureDate.setFullYear(secureDate.getFullYear() - n)
        return formatDate({ date: new Date(secureDate), formatStr })
    }

    const dateMs = secureDate.getTime()
    const resultMs =
        operation === 'add' ? dateMs + n * periodMs[period] : dateMs - n * periodMs[period]
    return formatDate({ date: new Date(resultMs), formatStr })
}

export const subPeriodTo = ({
    date,
    n,
    period,
    formatStr,
    operation = 'add'
}: AddPeriodToParam) => {
    return addPeriodTo({ date, n, period, formatStr, operation: 'sub' })
}

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
