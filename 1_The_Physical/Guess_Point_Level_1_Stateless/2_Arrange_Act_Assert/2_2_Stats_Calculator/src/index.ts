export function calculateStats(values: number[]): Result {
    const result: Result = <Result>{}

    values = values.sort((v1, v2) => {return v1 - v2})
    result.minimumVal = values[0]
    result.maximumVal = values[values.length - 1]
    result.elementCount = values.length
    result.average = Number((sumArray(values) / result.elementCount).toFixed(12))
    
    return result
}

export type Result = {
    minimumVal: number
    maximumVal: number
    elementCount: number
    average: number
}

function sumArray(values: number[]): number {
    return values.reduce((partialSum, value) => partialSum + value, 0)
}