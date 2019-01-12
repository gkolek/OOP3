function catFactory(name) {
    return {
        name: name,
        speak: function(){
            console.log('Sorry cats can’t speak');
        },
    }
}

var cat1 = catFactory('puszek');
var cat2 = catFactory('garfield');

console.log(cat1);
console.log(cat2);