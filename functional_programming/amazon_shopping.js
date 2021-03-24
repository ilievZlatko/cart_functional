// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// Bonus:
// accept refunds
// track user history

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
}

let history = []

const compose = (f, g) => (...args) => f(g(...args))

function purchaseItem(...fns) {
	return fns.reduce(compose)
}

function addItemToCart(user, item) {
	history.push(user)
	const updatedCart = user.cart.concat(item)
	return Object.assign({}, user, { cart: updatedCart })
}

function applyTax(user) {
	history.push(user)
	const { cart } = user
	const taxRate = 1.03
	const updatedCart = cart.map(item => ({
		name: item.name,
		price: item.price * taxRate,
	}))

	return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
	history.push(user)
	return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
	history.push(user)
	return Object.assign({}, user, { cart: [] })
}

function refundItem(user) {
	console.log(history, user)
}

purchaseItem(
	emptyCart,
	buyItem,
	applyTax,
	addItemToCart,
)(user, { name: 'laptop', price: 200 })

console.log(history)
