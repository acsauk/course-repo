import { ValidateTimeRange } from "./index"

describe('military time validator', () => {
    it('should return true for 00:00 - 00:01', () => {
        expect(ValidateTimeRange('00:00 - 00:01')).toBeTruthy()
    })

})
