import { periodMs } from './constants'
import { formatDate, normalizeDate } from './formatDate'
import { AddPeriodToParam } from './types'

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
