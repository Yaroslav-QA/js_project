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

for (let i = 2; i < 11; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
    
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
    
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask();


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

//convert(500, usdCurr);
//convert(500, eurCurr);

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);



function doNothing() {};
console.log(doNothing() === undefined);


function sayHello(name) {
    return "Привет, " + name;
}

sayHello("Антон");



function returnNeighboringNumbers(testNumber) {
    let numbersArray = [];
    numbersArray[0] = testNumber - 1;
    numbersArray[1] = testNumber;
    numbersArray[2] = testNumber + 1;
    return numbersArray
}

returnNeighboringNumbers(4);



function getMathResult(base, count) {
    let str = "";
    let result = "";
    
    if (typeof(count) !== "number" || count <= 0) {
        result = base;
        console.log(result);
    } else {
        for (var i = 1; i <= count; i++) {
            if (i === count) {
                str += `${base * i}`;
            } else {
                str += `${base * i}---`;
            }
            
        }
        console.log(str);
        result = str;
        
    }
    return result;
}

getMathResult(5, "jdhj");


const str = "tEst";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));


const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 3));


const numA = 12.2;
console.log(Math.round(numA));

const testA = "12.2px";
console.log(parseInt(testA, 10));
console.log(parseFloat(testA, 10));


