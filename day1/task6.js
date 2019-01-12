var cat = {
    sound: 'miau',
    makeSound: function() {
        console.log(this.sound);
    },
}

var mruczek = Object.create(cat);

mruczek.sound = 'hau';

console.log(cat, mruczek);