import { ValidateTimeRange } from "./index"

describe('military time validator', () => {
    it.each([
        '01:12 - 14:32',
        '22:00 - 23:12',
        '00:00 - 23:59',
    ])('should return true for valid military time ranges', (timeRange) => {
        expect(ValidateTimeRange(timeRange)).toBeTruthy()
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

    it.each([
        '00:01 - 00:00',
        '20:05 - 20:04',
        '23:59 - 00:00',
    ])('should return false if the first time in the range is after the second time in the range', (timeRange) => {
        expect(ValidateTimeRange(timeRange)).toBeFalsy()
    })
})
