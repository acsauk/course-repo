import { calculateStats, Result } from "./index"

describe('stats calculator', () => {
    it('returns a Result object with minimumVal, maximumVal, elementCount and average props', () => {
        let result: Result = calculateStats([0])

        expect(result.minimumVal).toEqual(0)
        expect(result.maximumVal).toEqual(0)
        expect(result.elementCount).toEqual(1)
        expect(result.average).toEqual(0.0)
    })
})