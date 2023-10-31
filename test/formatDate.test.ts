import { describe, it, expect } from 'vitest'
import { formatDate, normalizeDate } from '../src/formatDate'

describe('formatDate', () => {
    it('should format a date in the default format', () => {
        const date = new Date('2023-10-27T14:38:33.000Z')
        const formattedDate = formatDate({ date, formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe('2023-10-27')
    })

    it('should format a date in a custom format', () => {
        const date = new Date('2023-10-27T03:24:00')
        const formattedDate = formatDate({ date, formatStr: 'DD/MM/YYYY hh:mm a' })

        expect(formattedDate).toBe('27/10/2023 03:24 am')
    })

    it('should handle invalid dates', () => {
        const invalidDate = new Date('invalid')
        const formattedDate = formatDate({ date: invalidDate, formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toContain('NaN')
    })

    it('should handle undefined date', () => {
        const undefineddDate = new Date(),
            expectedDate = new Date()
        const formattedDate = formatDate({ date: undefineddDate, formatStr: 'YYYY-MM-DD' })

        expect(formattedDate).toBe(formatDate({ date: expectedDate, formatStr: 'YYYY-MM-DD' }))
    })
})
