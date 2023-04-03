
export type ValidationResult = {
    result: boolean
    error: string
}

export class PasswordValidator {    
    validate(password: string): ValidationResult {
        const errors: string[] = []

        if (password.length < 5) {
            errors.push('too short')
        }

        if (password.length > 15) {
            errors.push('too long')
        }

        if (!hasDigit(password)) {
            errors.push('needs a digit')
        }

        if (!hasUppercaseCharacter(password)) {
            errors.push('needs an uppercase character')
        }

        return buildValidationResult(errors)
    }
}

function hasDigit(password: string): boolean {
    return /\d/.test(password)
}

function hasUppercaseCharacter(password: string): boolean {
    return /[A-Z]/.test(password)
}

function buildValidationResult(errors: string[]): ValidationResult {
    const validated: ValidationResult = {
        result: true,
        error: ''
    }

    if (errors.length > 0) {
        let error = 'Your password is not valid:\n'
        errors.forEach((err, index) => {
            error += index < (errors.length - 1) ? `- ${err}\n` : `- ${err}`
        })
        
        validated.error = error
        validated.result = false
    }

    return validated
}
