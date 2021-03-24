// Factory function
// const elfFunctions = {
// 	attack() {
// 		return `${this.name} attack with ${this.weapon}`
// 	},
// }

// function createElf(name, weapon) {
// 	const newElf = Object.create(elfFunctions)
// 	newElf.name = name
// 	newElf.weapon = weapon

// 	return newElf
// }

// const peter = createElf('Peter', 'stones')
// const sam = createElf('Sam', 'fire')

// console.log(peter.attack())
// console.log(sam.attack())

// Constructor functions
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
}

Elf.prototype.attack = function () {
	return 'attack with ' + this.weapon
}

const jon = new Elf('Jon', 'ice')
console.log(jon.attack())
