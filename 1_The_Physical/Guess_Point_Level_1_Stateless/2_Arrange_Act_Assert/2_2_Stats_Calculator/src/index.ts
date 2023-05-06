export function calculateStats(values:Number[]): Result {
    return <Result> {
        minimumVal: 0,
        maximumVal: 0,
        elementCount: 1,
        average: 0.0,
    }
}

export type Result = {
    minimumVal: number
    maximumVal: number
    elementCount: number
    average: number
}