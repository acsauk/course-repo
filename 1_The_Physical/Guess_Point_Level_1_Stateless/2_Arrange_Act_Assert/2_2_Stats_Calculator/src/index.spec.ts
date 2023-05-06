import { calculateStats, Result } from "./index"

describe('stats calculator', () => {

    it.each([
        {values: [0], min: 0, max: 0, elCount: 1, ave: 0.0},
        {values: [2, 4, 21, -8, 53, 40], min: -8, max: 53, elCount: 6, ave: 18.666666666667},
    ])('returns a Result object with minimumVal, maximumVal, elementCount and average props when passed array of ints', ({ values, min, max, elCount, ave }) => {
        let result: Result = calculateStats(values)

        expect(result.minimumVal).toEqual(min)
        expect(result.maximumVal).toEqual(max)
        expect(result.elementCount).toEqual(elCount)
        expect(result.average).toEqual(ave)
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