//task3.2

function Cat(name, age){
	this.name = name
	this.sound = 'Miau'
}

Cat.prototype.makeSound = function(){
    console.log(this.sound);
}

Cat.prototype.speak = function() {
    console.log('Sorry cats can’t speak');
}

var puszek = new Cat('puszek');
var garfield = new Cat('garfield');

console.log(puszek);
console.log(garfield);
