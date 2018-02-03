function Mammal (aName) {
	this.name = aName;
	this.offspring = [];
	}

Mammal.prototype.sayHello = function () {
	return "My name is " + this.name + "!";
}

Mammal.prototype.haveBaby = function () {
	debugger;
	this.offspring.push({name: "Baby " + this.name});
	return {name: "Baby " + this.name}; // not DRY?
}

function Cat (catName, catColor) {
	debugger;
	Mammal.call(this);
	this.name = catName;
	this.color = catColor;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function (color) {
	debugger;
	this.offspring.push({color: this.color});
	return {color: this.color};
}
