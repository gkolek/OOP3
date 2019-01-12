// console.warn('hello world');

class Animal {
    // object constructor
    // (executed when new Animal())
    constructor(sound) {
        this.sound = sound
    }
    // class method
    makeSound() {
        console.log(this.sound)
    }
}

var cat1 = new Animal('miał :)')


class Dog extends Animal{
    constructor(){
        super('miał');
        this.sound = 'mrał'
    }
    sayName(){
        console.log(this.name);
    }
}

var dog1 = new Dog()


// function nextAnimal(sound) {
//     this.sound = sound;
// }

// nextAnimal.prototype.makeSound = function () {
//     console.log(this.sound);
// }

// var cat2 = new nextAnimal('mrał');
