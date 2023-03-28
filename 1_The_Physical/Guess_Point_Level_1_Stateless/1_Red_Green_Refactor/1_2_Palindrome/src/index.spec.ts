import {check} from './'

describe('palindrome checker', () => {
    it('returns a boolean', () => {
        expect(check('wow')).toEqual(true)
    })

    it('knows which single words are palindromes', () => {
        let tcs: string[] = ['wow', 'mom', 'tattarrattat']

        for (let tc of tcs) {
            expect(check(tc)).toEqual(true)
        }
    })
})