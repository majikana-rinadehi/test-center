import { LocalDate, convert } from '@js-joda/core'
import { FunctionUnit } from './types'

const jsJodaMinusDaysMethod = (input: string): string => {   
    return LocalDate.parse(input) ? LocalDate.parse(input).minusDays(1).toJSON() : ''
}

const hogeUnit: FunctionUnit = {
    comment: 'return 1 minus day',
    method: jsJodaMinusDaysMethod
}

const jsJodaPlusDaysMethod = (input: string): string => {
    return LocalDate.parse(input) ? LocalDate.parse(input).plusDays(1).toJSON() : ''
}

const fugaUnit: FunctionUnit = {
    comment: 'return 1 plus day',
    method: jsJodaPlusDaysMethod
}

export const funcUnitList: FunctionUnit[] = [
    hogeUnit,
    fugaUnit
]