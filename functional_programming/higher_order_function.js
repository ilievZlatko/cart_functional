// HOF
const hof = fn => fn(5)

hof(function a(x) {
	return x
})

// Closure
const closure = function () {
	let count = 0

	return function increment() {
		count++
		return count
	}
}

const incrementFunc = closure()
console.log(incrementFunc())
