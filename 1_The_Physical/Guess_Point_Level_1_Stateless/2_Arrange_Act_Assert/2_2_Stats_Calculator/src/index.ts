export function calculateStats(values: number[]): Result {
    const result: Result = {
        minimumVal: 0,
        maximumVal: 0,
        elementCount: 1,
        average: 0.0,
    }

    values = values.sort()
    result.minimumVal = values[0]
    result.maximumVal = values[values.length - 1]
    result.elementCount = values.length
    result.average = sumArray(values) / result.elementCount
    
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