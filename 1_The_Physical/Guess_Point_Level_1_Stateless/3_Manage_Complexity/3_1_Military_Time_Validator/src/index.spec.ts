import { ValidateTimeRange } from "./index"

describe('military time validator', () => {
    it('should return true for 01:12 - 14:32', () => {
        expect(ValidateTimeRange('01:12 - 14:32')).toBeTruthy()
    })

    it('should return false for 25:00 - 12:23', () => {
        expect(ValidateTimeRange('25:00 - 12:23')).toBeFalsy()
    })
})
