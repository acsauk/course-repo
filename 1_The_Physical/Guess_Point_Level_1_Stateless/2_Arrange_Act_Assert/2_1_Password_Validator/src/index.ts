
export type ValidationResult = {
    result: boolean
    error: string|null
}

export class PasswordValidator {    
    validate(password: string): ValidationResult {
        const validated: ValidationResult = {
            result: true,
            error: null
        }

        if (password.length < 5) {
            validated.result = false
            validated.error = 'too short'
        }

        if (password.length > 15) {
            validated.result = false
            validated.error = 'too long'
        }

        return validated
    }
}
