import { describe, it, expect } from 'vitest'
import { addPeriodTo, subPeriodTo, isLeapYear, compareDates } from '../src/utils'

describe('addPeriodTo', () => {
    it('should add 4 hours to a date', () => {
        const date = new Date('2023-10-27T21:38:33')
        const formattedDate = addPeriodTo({
            date,
            n: 4,
            period: 'hours',
            formatStr: 'YYYY-MM-DD hh:mm'
        })

        expect(formattedDate).toBe('2023-10-28 01:38')
    })
    it('should add 2 days to a date', () => {
        const date = new Date('2023-10-27T14:38:33')
        const formattedDate = addPeriodTo({ date, n: 2, period: 'days', formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe('2023-10-29')
    })

    it('should add 5 months to a date', () => {
        const date = new Date('2023-10-27T14:38:33')
        const formattedDate = addPeriodTo({ date, n: 5, period: 'months', formatStr: 'YYYY/MM/DD' })

        expect(formattedDate).toBe('2024/03/27')
    })
    it('should add 5 years to a date', () => {
        const date = new Date('2023-10-27T14:38:33')
        const formattedDate = addPeriodTo({ date, n: 5, period: 'years', formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe('2028-10-27')
    })
})

describe('subPeriodTo', () => {
    it('should remove 4 hours to a date', () => {
        const date = new Date('2023-10-27T21:38:33')
        const formattedDate = subPeriodTo({
            date,
            n: 4,
            period: 'hours',
            formatStr: 'YYYY-MM-DD HH:mm'
        })

        expect(formattedDate).toBe('2023-10-27 17:38')
    })
    it('should remove 4 hours to a date p.m.', () => {
        const date = new Date('2023-10-27T21:38:33')
        const formattedDate = subPeriodTo({
            date,
            n: 4,
            period: 'hours',
            formatStr: 'YYYY-MM-DD hh:mm aa'
        })

        expect(formattedDate).toBe('2023-10-27 05:38 p.m.')
    })
    it('should remove 2 days to a date', () => {
        const date = new Date('2023-10-27T14:38:33')
        const formattedDate = subPeriodTo({ date, n: 2, period: 'days', formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe('2023-10-25')
    })

    it('should remove 5 months to a date', () => {
        const date = new Date('2023-02-27T14:38:33')
        const formattedDate = subPeriodTo({ date, n: 5, period: 'months', formatStr: 'YYYY/MM/DD' })

        expect(formattedDate).toBe('2022/09/27')
    })
    it('should remove 4 years to a date', () => {
        const date = new Date('2023-10-27T14:38:33')
        const formattedDate = subPeriodTo({ date, n: 4, period: 'years', formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe('2019-10-27')
    })
})

describe('isLeapYear', () => {
    it('should return true for leap years', () => {
        expect(isLeapYear(2000)).toBe(true)
        expect(isLeapYear('2004')).toBe(true)
    })

    it('should return false for non-leap years', () => {
        expect(isLeapYear(1900)).toBe(false)
        expect(isLeapYear('2021')).toBe(false)
    })

    it('should handle invalid input gracefully', () => {
        // Test with invalid input, for example, a non-numeric string
        expect(isLeapYear('invalid')).toBe(false)
    })
})

describe('compareDates', () => {
    const date1 = new Date('2023-10-27T14:38:33')
    const date2 = new Date('2023-10-28T12:00:00')

    it('should return -1 for date1 < date2', () => {
        expect(compareDates(date1, date2)).toBe(-1)
    })

    it('should return 0 for equal dates', () => {
        expect(compareDates(date1, date1)).toBe(0)
    })

    it('should return 1 for date1 > date2', () => {
        expect(compareDates(date2, date1)).toBe(1)
    })
})
