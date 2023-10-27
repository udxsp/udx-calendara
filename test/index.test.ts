import { describe, it, expect, vitest } from 'vitest'
import { formatDate } from '../src/index'

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

    /*     it('should handle invalid dates', () => {
        const invalidDate = new Date('invalid')
        const formattedDate = formatDate({ date: invalidDate, formatStr: 'yyyy-MM-dd' })

        expect(formattedDate).toBe('')
    }) */
})
