class Character {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
	}

	attack() {
		return `${this.name} attacks with ${this.weapon}`
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		super(name, weapon)
		this.type = type
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon)
		this.color = color
	}

	makeFort() {
		return 'strongest fort in the world made'
	}
}

const dolby = new Elf('Dolby', 'ninja stars', 'house')
console.log(dolby)

const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort())
