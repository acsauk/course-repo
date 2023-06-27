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

    describe('NOT operator', () => {
        it.each([
            ['NOT TRUE', false],
            ['NOT FALSE', true],
        ])('knows that %s equals %s', (expression, wanted) => {
            expect(Calculator.calculate(expression)).toEqual(wanted)
        })
    })

    describe('AND operator', () => {
        it.each([
            ['TRUE AND FALSE', false],
            ['TRUE AND TRUE', true],
            ['FALSE AND TRUE', false],
        ])('knows that %s equals %s', (expression, wanted) => {
            expect(Calculator.calculate(expression)).toEqual(wanted)
        })
    })
})
