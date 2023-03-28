export function check(word: string): boolean {
    const letters: string[] = [...word]
    const reversedLetters: string[] = [...word].reverse()
    
    return reversedLetters.join().toLowerCase() == letters.join().toLowerCase()
}