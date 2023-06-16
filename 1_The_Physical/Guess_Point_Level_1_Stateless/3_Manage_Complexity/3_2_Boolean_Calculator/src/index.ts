export class Calculator {
    static calculate(expression: string): boolean {
        const expressions = expression.split(' ')
        
        let finalExpression = false
        let negate = false

        expressions.forEach((item: string) => {
            if (item === 'NOT') {
                negate = true
            }

            if (item === 'TRUE') {
                finalExpression = negate ? false : true
            }

            if (item === 'FALSE') {
                finalExpression = negate ? true : false
            }
        })

        return finalExpression
    }
}