import {describe, it, expect} from '@jest/globals'
import {FizzBuzz, modulousOf} from './fizzbuzz'

describe('fizzbuzz', () => {
    it('returns the number passed in', () => {
        const tcs: number[] = [1,2,4]
        tcs.forEach((n) => {
            expect(FizzBuzz(n)).toEqual(n.toString())    
        });
    })

    it('multiple of 3 return Fizz', () => {
        const tcs: number[] = [3,6,9] 
        tcs.forEach((n) => {
            expect(FizzBuzz(n)).toEqual('Fizz')
        })
    })

    it('multiple of 5 return Buzz', () => {
        const tcs: number[] = [5,10,20]
        tcs.forEach((n) => {
            expect(FizzBuzz(n)).toEqual('Buzz')
        })
    })

    it('multiples of 3 and 5 return FizzBuzz', () => {
        const tcs: number[] = [15, 30, 45]
        tcs.forEach(n => {
            expect(FizzBuzz(n)).toEqual('FizzBuzz')
        })
    })

    it('handles 1 to 100', () => {
        const tcs: Map<number, string> = generateTestCases()

        for (let entry of tcs.entries()) {
            let number = entry[0];
            let expectedString = entry[1];

            expect(FizzBuzz(number)).toEqual(expectedString)
        }
    })
});

function generateTestCases(): Map<number, string> {
    const nums: number[] = [...Array.from(Array(101).keys())]
    let testCases = new Map<number, string>();

    nums.forEach(n => {
        if (modulousOf(n, 3) && modulousOf(n, 5)) {
            testCases.set(n, 'FizzBuzz')
        } else if (modulousOf(n, 5)) {
            testCases.set(n, 'Buzz')
        } else if (modulousOf(n, 3)) {
            testCases.set(n, 'Fizz')
        } else {
            testCases.set(n, n.toString())
        }
    })

    return testCases
}

