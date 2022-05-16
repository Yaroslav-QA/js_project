"use strict";

let str = "some text";
let strObj = new String (str);

console.log(typeof(str));
console.log(typeof(strObj));


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

/* const john = {
    health: 100
}; */
//New method of declaring when creating new object
const john = Object.create(soldier);

// old and deprecated method of declaring
//john.__proto__ = soldier;

//New method of declaring after object creation
Object.setPrototypeOf(john, soldier)
console.log(john.armor);
john.sayHello();

