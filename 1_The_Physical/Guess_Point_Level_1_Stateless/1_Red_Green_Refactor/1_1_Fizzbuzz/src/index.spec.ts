import {describe, it, expect} from '@jest/globals'
import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
    it('returns a string', () => {
        expect(typeof FizzBuzz.run(1) == 'string').toEqual(true)
    })

    it('multiple of 3 return Fizz', () => {
        const tcs: number[] = [3,6,9] 
        tcs.forEach((n) => {
            expect(FizzBuzz.run(n)).toEqual('Fizz')
        })
    })

    it('multiple of 5 return Buzz', () => {
        const tcs: number[] = [5,10,15]
        tcs.forEach((n) => {
            expect(FizzBuzz.run(n)).toEqual('Buzz')
        })
    })
});
