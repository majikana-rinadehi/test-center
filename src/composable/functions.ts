import { LocalDate, convert } from '@js-joda/core'
import { stringifyQuery } from 'vue-router'
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

const extractQuery = (input: string) => {
    const type = input && input.match(/^@(.*?)\?/)
        ? input.match(/^@(.*?)\?/)![1]
        : '';
    const param = input && input.match(/\?(.*?)=/)
        ? input.match(/\?(.*?)=/)![1]
        : '';
    const value = input && input.match(/=(.*?)$/)
        ? input.match(/=(.*?)$/)![1]
        : '';
    const result: {[index : string]: string} = {
        type,
        param: param,
        value
    }
    return Object.keys(result).map(v => result[v] as string).join(',')
}

const extractQueryUnit: FunctionUnit = {
    comment: 'extract query from "@" start string',
    method: extractQuery
}

export const funcUnitList: FunctionUnit[] = [
    hogeUnit,
    fugaUnit,
    extractQueryUnit
]