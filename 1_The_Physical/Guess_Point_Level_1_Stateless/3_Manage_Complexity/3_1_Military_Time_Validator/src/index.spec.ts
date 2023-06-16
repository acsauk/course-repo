import { ValidateTimeRange } from "./index"

describe('military time validator', () => {
    it('should return true for 01:12 - 14:32', () => {
        expect(ValidateTimeRange('01:12 - 14:32')).toBeTruthy()
    })
})
