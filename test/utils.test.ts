import { describe, it, expect, vitest } from 'vitest'
import { addPeriodTo, subPeriodTo } from '../src/utils'

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
