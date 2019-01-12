var obj1 = { a: 1, b: 2, c: 3 };
var obj2 = {c: 4, d: 5};

var obj3 = Object.assign(obj1, obj2);

console.log(obj3);


var c = {
    test: 'garfield'
};

var obj4 = { a: 1, b: 2, c: c };
var obj5 = { a: 1, b: 2, c: c };

var obj6 = Object.assign(obj4, obj5);

obj4.c.test = 'puszek';

console.log(obj4, obj5);
// console.log(obj5);