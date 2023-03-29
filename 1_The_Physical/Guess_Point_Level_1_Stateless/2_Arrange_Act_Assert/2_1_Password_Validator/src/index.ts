
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

        if (!/\d/.test(password)) {
            validated.result = false
            validated.error = 'needs a digit'
        }

        if (!/[A-Z]/.test(password)) {
            validated.result = false
            validated.error = 'needs an uppercase character'
        }

        return validated
    }
}
