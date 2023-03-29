import {PasswordValidator, ValidationResult} from "./index"

// > Between 5 and 15 characters long
// > Contains at least one digit
// > Contains at least one upper case letter
// > Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

describe('password validator', () => {
    const validator = new PasswordValidator()

    it('returns an object with result and error keys', () => {
        const validated: ValidationResult = validator.validate('aValidPassword1')

        expect(validated).toHaveProperty('result')
        expect(validated).toHaveProperty('error')
    })

    it.each([
        'aValidPassword1',
        'passworD1',
        '123456aB',
    ])('sets result to true and error to null when password is %s', (password) => {
        const validated: ValidationResult = validator.validate(password)

        expect(validated.result).toEqual(true)
        expect(validated.error).toBeNull
    })

    it.each([
        'Ab1',
        'B1',
        'Abc1',
    ])('sets result to false and error to "too short" when password is less than 5 characters (%s)', (password) => {
        const validated: ValidationResult = validator.validate(password)

        expect(validated.error).toEqual('too short')
        expect(validated.result).toEqual(false)
    })

    it.each([
        'Password123123123',
        'anotherTooL0ngPswd',
        'yepItsStillT000L00ng',
    ])('sets result to false and error to "too short" when password is more than 15 characters (%s)', (password) => {
        const validated: ValidationResult = validator.validate(password)

        expect(validated.error).toEqual('too long')
        expect(validated.result).toEqual(false)
    })

    it.each([
        'abcdefG',
        'ABCDEFG',
        'abcdEFG'
    ])('sets result to false and error to "needs a digit" when password does not contain a digit (%s)',(password) => {
        const validated: ValidationResult = validator.validate(password)

        expect(validated.error).toEqual('needs a digit')
        expect(validated.result).toEqual(false)
    })

    it.each([
        'abcdef1',
        '1234567',
        'ab12cd45'
    ])('sets result to false and error to "needs an uppercase character" when password does not contain an upper case character (%s)',(password) => {
        const validated: ValidationResult = validator.validate(password)
        
        expect(validated.error).toEqual('needs an uppercase character')
        expect(validated.result).toEqual(false)
    })
})

