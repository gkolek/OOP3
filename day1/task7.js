function Cat(name, age){
	this.name = name
	this.age = age
	this.sound = 'Meeeeow'
}

Cat.prototype.makeSound = function(){
    console.log(this.sound);
}

Cat.prototype.speak = function() {
    console.log('Sorry cats can’t speak');
}

var puszek = new Cat('puszek', 10);
var garfield = new Cat('garfield', 15);

console.log(puszek);
console.log(garfield);