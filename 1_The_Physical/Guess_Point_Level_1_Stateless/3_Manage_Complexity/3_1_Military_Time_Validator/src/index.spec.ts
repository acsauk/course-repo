import { ValidateTimeRange } from "./index"

describe('military time validator', () => {
    it('should return true for 01:12 - 14:32', () => {
        expect(ValidateTimeRange('01:12 - 14:32')).toBeTruthy()
    })

    it.each([
        '25:00 - 12:23',
        '-10:00 - 12:23',
        '100:00 - 12:23',
    ])('should return false if the first time in the range is not a valid military time', (timeRange) => {
        expect(ValidateTimeRange(timeRange)).toBeFalsy()
    })

    it.each([
        '00:00 - 25:00',
        '00:00 - -10:00',
        '00:00 - 100:00',
    ])('should return false if the second time in the range is not a valid military time', (timeRange) => {
        expect(ValidateTimeRange(timeRange)).toBeFalsy()
    })
})
