function returnX (name) {
    console.log(name);
    console.log(this.x);
    return this.x;
}
    
var obj = { x: 42 }

returnX.call(this, 'garfield');
returnX.call(obj, 'garfield');


returnX.apply(obj, ['garfield']);