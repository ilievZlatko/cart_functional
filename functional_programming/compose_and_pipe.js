// Compose
const compose = (f, g) => data => f(g(data))
const multiplyBy3 = number => number * 3
const makePositive = number => Math.abs(number)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))

// Pipe - order is reversed
const pipe = (f, g) => data => g(f(data))
// .... rest is same as above

// Arity
// means the number of arguments a function takes
