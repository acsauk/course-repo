import { calculateStats, Result } from "./index"

describe('stats calculator', () => {
    it('returns a Result object with minimumVal, maximumVal, elmentCount and average props', () => {
        let result: Result = calculateStats([0])

        expect(result.minimumVal).toEqual(0)
        expect(result.maximumVal).toEqual(0)
        expect(result.elmentCount).toEqual(1)
        expect(result.average).toEqual(0.0)
    })
})