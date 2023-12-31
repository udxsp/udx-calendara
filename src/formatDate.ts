import { DateLike, FormatDateParam } from './types'
const REGEX_PARSE =
    /* #__PURE__ */ /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
const REGEX_FORMAT =
    /* #__PURE__ */ /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g

const defaultMeridiem = (
    hours: number,
    minutes: number,
    isLowercase?: boolean,
    hasPeriod?: boolean
) => {
    let m = hours < 12 ? 'AM' : 'PM'
    if (hasPeriod) m = m.split('').reduce((acc, curr) => (acc += `${curr}.`), '')
    return isLowercase ? m.toLowerCase() : m
}

export const formatDate = ({ date, formatStr, options }: FormatDateParam) => {
    const secureDate = normalizeDate(date)
    const years = secureDate.getFullYear()
    const month = secureDate.getMonth()
    const days = secureDate.getDate()
    const hours = secureDate.getHours()
    const minutes = secureDate.getMinutes()
    const seconds = secureDate.getSeconds()
    const milliseconds = secureDate.getMilliseconds()
    const day = secureDate.getDay()
    const meridiem = options?.customMeridiem ?? defaultMeridiem
    const matches: Record<string, () => string | number> = {
        YY: () => String(years).slice(-2),
        YYYY: () => years,
        M: () => month + 1,
        MM: () => `${month + 1}`.padStart(2, '0'),
        MMM: () => secureDate.toLocaleDateString(options?.locales, { month: 'short' }),
        MMMM: () => secureDate.toLocaleDateString(options?.locales, { month: 'long' }),
        D: () => String(days),
        DD: () => `${days}`.padStart(2, '0'),
        H: () => String(hours),
        HH: () => `${hours}`.padStart(2, '0'),
        h: () => `${hours % 12 || 12}`.padStart(1, '0'),
        hh: () => `${hours % 12 || 12}`.padStart(2, '0'),
        m: () => String(minutes),
        mm: () => `${minutes}`.padStart(2, '0'),
        s: () => String(seconds),
        ss: () => `${seconds}`.padStart(2, '0'),
        SSS: () => `${milliseconds}`.padStart(3, '0'),
        d: () => day,
        dd: () => secureDate.toLocaleDateString(options?.locales, { weekday: 'narrow' }),
        ddd: () => secureDate.toLocaleDateString(options?.locales, { weekday: 'short' }),
        dddd: () => secureDate.toLocaleDateString(options?.locales, { weekday: 'long' }),
        A: () => meridiem(hours, minutes),
        AA: () => meridiem(hours, minutes, false, true),
        a: () => meridiem(hours, minutes, true),
        aa: () => meridiem(hours, minutes, true, true)
    }
    return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 ?? matches[match]?.() ?? match)
}

export function normalizeDate(date: DateLike) {
    if (date === null) return new Date(Number.NaN)
    if (date === undefined) return new Date()
    if (date instanceof Date) return new Date(date)
    if (typeof date === 'string' && !/Z$/i.test(date)) {
        const d = date.match(REGEX_PARSE) as any
        if (d) {
            const m = d[2] - 1 || 0
            const ms = (d[7] || '0').substring(0, 3)
            return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
        }
    }

    return new Date(date)
}
