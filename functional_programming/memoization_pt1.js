function addTo80(n) {
	return n + 80
}

console.log(addTo80(5))

function memoizedAddTo80() {
	let cache = {}

	return function (n) {
		if (n in cache) {
			return cache[n]
		} else {
			cache[n] = n + 80
			return cache[n]
		}
	}
}

const memoized = memoizedAddTo80()
console.log(memoized(5))
console.log(memoized(5))
