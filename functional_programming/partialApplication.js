// Partial Application
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)

const result = partialMultiplyBy5(4, 10)
console.log(result)
