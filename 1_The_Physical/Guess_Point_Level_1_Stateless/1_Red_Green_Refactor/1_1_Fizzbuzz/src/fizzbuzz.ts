const FizzBuzz = {
    run: (number: number): string => {
        if (modulousOf(number, 3) && modulousOf(number, 5)) {
            return 'FizzBuzz'
        }
        
        if (modulousOf(number, 5)) {
            return 'Buzz'
        }

        if (modulousOf(number, 3)) {
            return 'Fizz'
        }

        return number.toString()
    }
}

function modulousOf (number: number, modulous: number): boolean {
    return number % modulous == 0
}

export default FizzBuzz