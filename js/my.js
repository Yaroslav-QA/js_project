"use strict";

if (4 == 9) {
    console.log("Ok");
} else {
    console.log("Error");
}

const num = 132;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Too much");
// } else {
//     console.log("Ok");
// }

// (num === 50) ? console.log("Ok") : console.log("Error");

// switch (num) {
//     case 45:
//         console.log("Error");
//         break;
//     case 100:
//         console.log("Error");
//         break;
//     case 122:
//         console.log("Ok!");
//         break;
//     default:
//         console.log("Ooops!");
//         break;
// }

let num2 = 50;

// while (num2 < 55) {
//     console.log(num2);
//     num2++;
// }

// do {
//     console.log(num2);
//     num2++;
// }
// while (num2 < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);

}

//FUNCTIONS!!
// function declaration
function showFirstMessage(text) {
    console.log(text);
    let num3 = 20;
}

showFirstMessage("Hello World");
console.log(num3);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let number = 50;

    return number;
}

const anotherNumber = ret();
console.log(anotherNumber);

// function expression
const logger = function () {
    console.log("Hello");
};

logger();

// arrow function

const calculator = (a, b) => a + b;
//const calculator = (a, b) => { return a + b };


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let numberAsterisk = "";
let rowsNumber = 7;

for (let i = 1; i < rowsNumber; i++) {
    for (let j = 0; j < i; j++) {
        numberAsterisk += "*";
    }
    numberAsterisk += "\n";
}

console.log(numberAsterisk);


// METKI
metka: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue metka;
            console.log(`Third level ${k}`);
            
        }
    }
}