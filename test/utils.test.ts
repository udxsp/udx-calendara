import { describe, it, expect } from 'vitest'
import { isLeapYear, compareDates } from '../src/utils'

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
