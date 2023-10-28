export type UseDateFormatOptions = {
    locales?: Intl.LocalesArgument
    customMeridiem?: (
        hours: number,
        minutes: number,
        isLowercase?: boolean,
        hasPeriod?: boolean
    ) => string
}

export type DateLike = Date | number | string | undefined

export type FormatDateParam = {
    date: DateLike
    formatStr: string
    options?: UseDateFormatOptions
}

export type Period = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'

export type AddPeriodToParam = {
    date: DateLike
    n: number
    period: Period
    formatStr: string
    operation?: 'add' | 'sub'
}
