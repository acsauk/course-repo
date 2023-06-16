import { Calculator } from './index'

describe('boolean calculator', () => {
    describe('single values', () => {
        it('knows that TRUE is the boolean true', () => {
            expect(Calculator.calculate('TRUE')).toBeTruthy()
        })

        it('knows that FALSE is the boolean false', () => {
            expect(Calculator.calculate('FALSE')).toBeFalsy()
        })
    })
})
