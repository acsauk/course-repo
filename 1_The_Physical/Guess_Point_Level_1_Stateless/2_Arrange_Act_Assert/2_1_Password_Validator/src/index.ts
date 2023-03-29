
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
            validated.result = false
            errors.push('too short')
        }

        if (password.length > 15) {
            validated.result = false
            errors.push('too long')
        }

        if (!/\d/.test(password)) {
            validated.result = false
            errors.push('needs a digit')
        }

        if (!/[A-Z]/.test(password)) {
            validated.result = false
            errors.push('needs an uppercase character')
        }

        let error: string = ''

        if (errors.length > 0) {
            error = 'Your password is not valid:\n'
            errors.forEach((err, index) => {
                error += index < (errors.length - 1) ? `- ${err}\n` : `- ${err}`
            }) 
        }

        validated.error = error
        return validated
    }
}
