import {PasswordValidator, ValidationResult} from "./index"

// > Between 5 and 15 characters long
// > Contains at least one digit
// > Contains at least one upper case letter
// > Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

describe('password validator', () => {
    it('returns an object with result and error keys', () => {
        const validator = new PasswordValidator()
        const validated: ValidationResult = validator.validate('aValidPassword1')

        expect(validated).toHaveProperty('result')
        expect(validated).toHaveProperty('error')
    })

    it.each([
        'aValidPassword1',
        'passworD1',
        '123456aB',
    ])('sets result to true and error to null when password is %s', (password) => {
        const validator = new PasswordValidator()

        const validated: ValidationResult = validator.validate(password)
        expect(validated.result).toEqual(true)
        expect(validated.error).toBeNull
    })

})

