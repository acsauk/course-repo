
export type ValidationResult = {
    result: boolean
    error: string
}

export class PasswordValidator {    
    validate(password: string): ValidationResult {
        const validated: ValidationResult = {
            result: true,
            error: ''
        }

        const errors: string[] = []

        if (password.length < 5) {
            errors.push('too short')
        }

        if (password.length > 15) {
            errors.push('too long')
        }

        if (!/\d/.test(password)) {
            errors.push('needs a digit')
        }

        if (!/[A-Z]/.test(password)) {
            errors.push('needs an uppercase character')
        }

        let error: string = ''

        if (errors.length > 0) {
            error = 'Your password is not valid:\n'
            errors.forEach((err, index) => {
                error += index < (errors.length - 1) ? `- ${err}\n` : `- ${err}`
            })
            validated.result = false
        }

        validated.error = error
        return validated
    }
}
