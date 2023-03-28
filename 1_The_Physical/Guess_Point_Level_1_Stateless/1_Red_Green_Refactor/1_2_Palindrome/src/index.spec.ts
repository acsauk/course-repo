import {check} from './'

describe('palindrome checker', () => {
    it('returns a boolean', () => {
        expect(check('wow')).toEqual(true)
    })

    it('knows which single words are palindromes', () => {
        let tcs: string[] = ['wow', 'mom', 'tattarrattat']

        assertWordsArePalindromes(tcs)
    })

    it('knows which single words are not palindromes', () => {
        let tcs: string[] = ['amazing', 'mother', 'Crunch']

        for (let tc of tcs) {
            expect(check(tc)).toEqual(false)
        }
    })

    it ('can handle mixed case strings', () => {
        let tcs: string[] = ['woW', 'Mom', 'taTtaRRattaT']
        
        assertWordsArePalindromes(tcs)
    })
})

function assertWordsArePalindromes(words: string[]) {
    for (let word of words) {
        expect(check(word)).toEqual(true)
    }
}