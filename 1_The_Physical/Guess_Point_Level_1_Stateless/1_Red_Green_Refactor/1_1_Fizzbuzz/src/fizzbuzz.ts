const FizzBuzz = {
    run: (number: number) => {
        if (number % 5 == 0) {
            return 'Buzz'
        }
        
        if (number % 3 == 0) {
            return 'Fizz'
        }

        return 'test'
    }
}

export default FizzBuzz