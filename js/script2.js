'use strict';

/* let number = 5; debugger

function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger */

/* function createCounter() {
    let counter = 0;

    const myFunction = function() {debugger
        counter = counter + 1;debugger
        return counter;debugger
    }

    return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);


let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night' 
console.log(time); */

// Questions from interviews

//let x = 5; alert ( ++x );


//console.log([] + false - null + true);

//let y = 1; let x = y = 2; alert(x);

//console.log([] + 1 + 2);

//alert( "1"[0] );

//console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
// ИЛИ запинается на правде

//console.log(!!(1 && 2) === (1 && 2));

//console.log(null || 2 && 3 || 4);

/* const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); */

//alert( +"Infinity");
//console.log(typeof(+"Infinity"));

//console.log("Ёжик" > "яблоко");

//console.log(0 || "" || 2 || undefined || true || false);

//Get page elements
const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circle = document.getElementsByClassName('circle');

// using selectors
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

box.style.backgroundColor = 'blue';
box.style.width = '200px';