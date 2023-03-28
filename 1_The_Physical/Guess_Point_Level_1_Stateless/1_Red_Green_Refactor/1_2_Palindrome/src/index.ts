export function check(word: string): boolean {
    const letters: string[] = [...word.replace(/ /g, '')]
    const reversedLetters: string[] = [...word.replace(/ /g, '')].reverse()
    
    return reversedLetters.join().toLowerCase() == letters.join().toLowerCase()
}