export function check(word: string): boolean {
    const letters: string[] = [...word]
    const reversedLetters: string[] = [...word].reverse()
    
    return reversedLetters.join() == letters.join()
}