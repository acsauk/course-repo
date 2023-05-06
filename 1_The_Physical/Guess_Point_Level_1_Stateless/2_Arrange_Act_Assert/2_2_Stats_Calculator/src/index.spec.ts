import { calculateStats, Result } from "./index"

describe('stats calculator', () => {
    it('returns a Result object with minimumVal, maximumVal, elementCount and average props', () => {
        let result: Result = calculateStats([0])

        expect(result.minimumVal).toEqual(0)
        expect(result.maximumVal).toEqual(0)
        expect(result.elementCount).toEqual(1)
        expect(result.average).toEqual(0.0)
    })

    it('can calculate the minimum value', () => {
        let result: Result = calculateStats([1, 10])

        expect(result.minimumVal).toEqual(1)
    })

    it('can calculate the maximum value', () => {
        let result: Result = calculateStats([1, 10])

        expect(result.maximumVal).toEqual(10)
    })

    it('can calculate the count of elements passed in', () => {
        let result: Result = calculateStats([1, 10])

        expect(result.elementCount).toEqual(2)
    })

    it('can calculate the average (assuming mean) of the values passed in', () => {
        let result: Result = calculateStats([1, 10])

        expect(result.average).toEqual(5.5)
    })
    
})