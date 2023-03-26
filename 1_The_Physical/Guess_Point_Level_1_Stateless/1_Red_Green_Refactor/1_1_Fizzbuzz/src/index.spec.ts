import {describe, it, expect} from '@jest/globals'
import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
    it('returns a string', () => {
        expect(typeof FizzBuzz.run() == 'string').toEqual(true)
    })
});
