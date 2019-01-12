function hello() {
    console.log(this.name);
}
    
var person = {name: "Zenek", hello: hello}

person.hello();