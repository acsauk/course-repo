import {describe, it, expect} from '@jest/globals'
import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
    it('returns a string', () => {
        expect(typeof FizzBuzz.run(1) == 'string').toEqual(true)
    })

    it('multiple of 3 return Fizz', () => {
        expect(FizzBuzz.run(3)).toEqual('Fizz')
    })
});
