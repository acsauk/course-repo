import validate from './index'

// > Between 5 and 15 characters long
// > Contains at least one digit
// > Contains at least one upper case letter
// > Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

describe('password validator', () => {
    it('returns an object with result and error keys', () => {
        const validated: object = validate()
        
        expect(typeof validated).toBe('object')
        expect(validated).toHaveProperty('result')
        expect(validated).toHaveProperty('error')
    })
})

