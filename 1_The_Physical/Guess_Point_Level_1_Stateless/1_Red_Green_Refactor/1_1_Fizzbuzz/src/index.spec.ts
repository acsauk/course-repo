import {describe, it, expect} from '@jest/globals'
import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
    it('returns the number passed in', () => {
        const tcs: number[] = [1,2,4]
        tcs.forEach((n) => {
            expect(FizzBuzz.run(n)).toEqual(n.toString())    
        });
    })

    it('multiple of 3 return Fizz', () => {
        const tcs: number[] = [3,6,9] 
        tcs.forEach((n) => {
            expect(FizzBuzz.run(n)).toEqual('Fizz')
        })
    })

    it('multiple of 5 return Buzz', () => {
        const tcs: number[] = [5,10,20]
        tcs.forEach((n) => {
            expect(FizzBuzz.run(n)).toEqual('Buzz')
        })
    })

    it('multiples of 3 and 5 return FizzBuzz', () => {
        const tcs: number[] = [15, 30, 45]
        tcs.forEach(n => {
            expect(FizzBuzz.run(n)).toEqual('FizzBuzz')
        })
    })
});
