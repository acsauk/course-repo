import {check} from './'

describe('palindrome checker', () => {
    it('knows which single words are palindromes', () => {
        let tcs: string[] = ['wow', 'mom', 'tattarrattat']

        assertWordsArePalindromes(tcs)
    })

    it('knows which single words are not palindromes', () => {
        let tcs: string[] = ['amazing', 'mother', 'crunch']

        assertWordsAreNotPalindromes(tcs)
    })

    it ('can handle mixed case palindromes', () => {
        let tcs: string[] = ['woW', 'Mom', 'taTtaRRattaT']
        
        assertWordsArePalindromes(tcs)
    })

    it ('can handle mixed case non-palindromes', () => {
        let tcs: string[] = ['AmaZing', 'MOTHEr', 'CRuNch']
        
        assertWordsAreNotPalindromes(tcs)
    })

    it('knows which multiple-word strings are palindromes', () => {
        let tcs: string[] = ['Was It A Rat I Saw', 'Never Odd or Even']
        
        assertWordsArePalindromes(tcs)
    })

    it('knows which multiple-word strings are not palindromes', () => {
        let tcs: string[] = ['A sentenace With words', 'and Another']
        
        assertWordsAreNotPalindromes(tcs)
    })
})

function assertWordsArePalindromes(words: string[]) {
    for (let word of words) {
        expect(check(word)).toEqual(true)
    }
}

function assertWordsAreNotPalindromes(words: string[]) {
    for (let word of words) {
        expect(check(word)).toEqual(false)
    }
}