export function calculateStats(values: number[]): Result {
    const result: Result = {
        minimumVal: 0,
        maximumVal: 0,
        elementCount: 1,
        average: 0.0,
    }

    values = values.sort()
    result.minimumVal = values[0]
    
    return result
}

export type Result = {
    minimumVal: number
    maximumVal: number
    elementCount: number
    average: number
}