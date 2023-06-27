export class Calculator {
    static calculate(expression: string): boolean {
        let expressions = expression.split(' ')

        const andExpressions = expressions.reduce((accumulator, element, index) => {
            if (expressions[index + 1] === 'AND') {
                accumulator.push(`${expressions[index]} AND ${expressions[index + 2]}`)
            }

            return accumulator
        }, [] as string[])

        let andIndexes:number[] = []
        
        expressions.forEach((element: string, index: number) => { if (element.includes('AND')) andIndexes.push(index) })

        andIndexes.forEach((andIndex: number) => {
            expressions.splice(andIndex - 1, 3)
        })

        const finalExpressions = [...andExpressions, ...expressions]

        let finalExpression = false
        let negate = false

        console.log(finalExpressions)

        finalExpressions.forEach((item: string) => {
            if (item === 'NOT') {
                negate = true
                return
            }

            if (item === 'TRUE') {
                finalExpression = negate ? false : true
                return
            }

            if (item === 'FALSE') {
                finalExpression = negate ? true : false
                return
            }

            if (item.includes('FALSE')) {
                finalExpression = false
            } else {
                finalExpression = true
            }
        })

        return finalExpression
    }
}