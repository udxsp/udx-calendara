# UDX-Calendara

udx-calendara is a lightweight TypeScript library for formatting dates. It provides three main methods: `formatDate`, `addPeriodTo`, and `subPeriodTo`.

The `formatDate` method is highly inspired by useFormatDate from [VueUse](https://vueuse.org/shared/usedateformat/#usedateformat)

## Installation

```bash
npm install udx-calendara
```

## Usage

The library offers three main methods for formatting dates: `formatDate`, `addPeriodTo`, and `subPeriodTo`.

### `formatDate(options: FormatOptions): string`

Formats a date according to the specified format string:

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |
| `SSS`  | 000-999          | The millisecond, 3-digits             |
| `A`    | AM PM            | The meridiem                          |
| `AA`   | A.M. P.M.        | The meridiem, periods                 |
| `a`    | am pm            | The meridiem, lowercase               |
| `aa`   | a.m. p.m.        | The meridiem, lowercase and periods   |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dd`   | S-S              | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |

Example:

```typescript
import { formatDate } from 'udx-calendara'

const date = new Date('2023-10-27T14:38:33.000Z')
const formattedDate = formatDate({ date, formatStr: 'YYYY-MM-DD' })
console.log(formattedDate) // Output: '2023-10-27'
```

### `addPeriodTo(options: PeriodOptions): string`

Adds a specified number of days, months, or years to a date.

Period to add:

```typescript
type Period = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
```

Example:

```typescript
import { addPeriodTo } from 'udx-calendara'

const date = new Date('2023-10-27T14:38:33')
const formattedDate = addPeriodTo({ date, n: 2, period: 'days', formatStr: 'YYYY-MM-DD' })
console.log(formattedDate) // Output: '2023-10-29'
```

### `subPeriodTo(options: PeriodOptions): string`

Subtracts a specified number of days, months, or years from a date.

Period to add:

```typescript
type Period = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
```

Example:

```typescript
import { subPeriodTo } from 'udx-calendara'

const date = new Date('2023-10-27T14:38:33')
const formattedDate = subPeriodTo({ date, n: 2, period: 'days', formatStr: 'YYYY-MM-DD' })
console.log(formattedDate) // Output: '2023-10-25'
```

## Test Examples

Here are some test examples demonstrating how to use the library's methods:

```typescript
it('should remove 2 days to a date', () => {
    // ...
})

it('should add 5 months to a date', () => {
    // ...
})

it('should format a date in a custom format', () => {
    // ...
})
```

## Contributing

We welcome contributions! If you want to contribute to this library, follow these steps:

1. Fork the repository
2. Create a branch with your feature (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add a new feature'`)
4. Push your branch (`git push origin feature/feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
