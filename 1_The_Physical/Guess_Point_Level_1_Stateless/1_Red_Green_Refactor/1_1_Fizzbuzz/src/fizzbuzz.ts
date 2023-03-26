export function FizzBuzz(num: number): string {
    if (modulousOf(num, 3) && modulousOf(num, 5)) {
        return 'FizzBuzz'
    }
    
    if (modulousOf(num, 5)) {
        return 'Buzz'
    }

    if (modulousOf(num, 3)) {
        return 'Fizz'
    }

    return num.toString()
}

export function modulousOf(num: number, modulous: number): boolean {
    return num % modulous == 0
}