//task 3.1
function catFactory(name) {
    return {
        name: name,
        speak: function() {
            console.log(this.name);
        }
    }
}
var cat1 = catFactory('puszek');
var cat2 = catFactory('beniek');


