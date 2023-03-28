
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
        return validated
    }
}
