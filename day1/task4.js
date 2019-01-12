function catFactory(name, sound) {
    return {
        name: name,
        sound: sound,
        speak: function(){
            console.log('Sorry cats can’t speak');
        },
        makeSound: function() {
            console.log(this.sound);
            return this.sound;
        }
    }
}

var cat1 = catFactory('puszek', 'miau');
var cat2 = catFactory('garfield', 'hau');

console.log(cat1);
console.log(cat2);