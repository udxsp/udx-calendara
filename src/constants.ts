import { Period } from './types'

export const periodMs: Record<Exclude<Period, 'months' | 'years'>, number> = {
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 60 * 60 * 1000 * 24,
    weeks: 7 * 60 * 60 * 1000 * 24
}
