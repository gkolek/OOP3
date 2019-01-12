function hello() {
    console.log(this.name + " mówi cześć!");
}
    
var person = {name: "Zenek", hello: hello}

var boundHello = hello.bind(person);