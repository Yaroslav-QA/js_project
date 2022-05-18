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


function first() {
    // do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();



function learnJS (lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log(`This anonymous function`);
}


/* learnJS("JavaScript", function() {
    console.log(`This anonymous function`);
}); */

learnJS("JavaScript", done);


const Projects = $("Form.Fields.Project");
let numOfProjects = 4;
console.log(numOfProjects);

numOfProjects--;

console.log(numOfProjects);


function countProjectsNumber () {
    //const Projects = $("Form.Fields.Project");
    let numOfProjects = 2 - 2;
        if (numOfProjects > 0) {
            console.log(numOfProjects);
            numOfProjects--;
        } else {
            numOfProjects = 0;
        }
    
    return numOfProjects;
}

console.log(countProjectsNumber ());




function minusLastElement () {
    let testArray = ['a', 'b'];
    let result = "";
    if (testArray.length >= 1) {
        result = testArray[testArray.length - 1];
    } else {
        alert("Please select at least one hotel");
    }
    return result;
}

console.log(minusLastElement());

let FormFieldsProject = ['a', 'b', 'c'];

function test() {
    //const Projects = $("Form.Fields.Project");
    let numOfProjects = FormFieldsProject.length - 1;
    let result = [];
    if (numOfProjects > 0) {
        result = FormFieldsProject[FormFieldsProject.length - 1];
    } else {
        alert("Please select at least one hotel");
	}
    return result;
}

console.log(test());


let testString = "Hello";
console.log(testString.split(" "));



//Objects
//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    //adding new method
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
//delete options.name;
//console.log(options);

// This not very elegant
console.log(options["colors"]["border"]);
// destructurization
const {border, bg} = options.colors;
console.log(border);

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has value ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} has value ${options[key]}`);
        counter++;
    }
    
}
//How many properties
console.log(counter);
// get properties from object
console.log(Object.keys(options));
// get properties number
console.log(Object.keys(options).length);


//ARRAYS
const arrTest = [6, 12, 3, 27, 5];

//correct sorting (as numbers)
arrTest.sort(compareNumbers);
console.log(arrTest);

function compareNumbers(a, b) {
    return a - b;
}

//arrTest.pop();
//arrTest.push(10);


// variant 1
for (let i = 0; i < arrTest.length; i++) {
    console.log(arrTest[i]);
}
// variant 2
for (let value of arrTest) {
    console.log(value);
}
// variant 3 - most used
arrTest.forEach(function(item, i, arrTest) {
    console.log(`${i}: ${item} inside array ${arrTest}`);
});

const strTest = prompt('', '');
const products = strTest.split(', ');
console.log(products);

//Transfer by link/value
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //link to obj here!
copy.a = 10;

console.log(copy);
console.log(obj);

// cloning object:
function copyObj (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 12
    }
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
//newNumbers.c.x will be changed because we created shallow copy
newNumbers.c.x = 33;
console.log(numbers);
console.log(newNumbers);



const numbers2 = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 12
    }
};

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers2, add));
const clone = Object.assign({}, add);

clone.d = 21;
console.log(clone);
console.log(numbers2);


const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

newArray[1] = 'asdfgh';
console.log(newArray);
console.log(oldArray);

//SPREAD operator
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'lj', 'blogger'],
      internet = [...video, ...blogs, 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num1 = [2, 5, 7];

log(...num1);


const array2 = ['a', 'b', 'c'];
const array3 = [...array2];
console.log(array3);

const q = {
    one: 1,
    two: 2,
    three: 3
};

const newQ = {...q};


/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
}; */

/* function showExperience(plan) {
    const {lng, prLng, exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter)); */


/* function showProgrammingLangs(plan) {
    const programmingLangs = plan.skills.programmingLangs;
    console.log(programmingLangs);
    for (key in programmingLangs) {

    }

}
showProgrammingLangs(personalPlanPeter); */


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'fr'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const {languages} = plan.skills;
    const eng = languages.includes('eng');
    return eng;
}

console.log(showExperience(personalPlanPeter));

const myArray = [
    {_id: 'ro_ta_7203b6ddf4c8442893974734b61f1e0b_05a760b996da4ff3a1024de673e9d796', primaryDisplay: 'IntercityHotel Berlin Airport'},
    {_id: 'ro_ta_7203b6ddf4c8442893974734b61f1e0b_124fcc241f1a456a96accd2e7a2a7ce8', primaryDisplay: 'Zleep Madrid Airport'},
    {_id: 'ro_ta_7203b6ddf4c8442893974734b61f1e0b_9ff6d4aad4fd4fd682766a2f194bfc4e', primaryDisplay: 'ICH Mainz'},
    {_id: 'ro_ta_7203b6ddf4c8442893974734b61f1e0b_ca9b0e19a62f42529925f3168a9adf4a', primaryDisplay: 'Intercity Herford'}
];

function showProject (data) {
    console.log(data[-1][_id]);
}

// To string
//1)
console.log(typeof(String(4)));
//2)
console.log(typeof(5 + ''));

const numb = 5;
console.log("https://google.com/catalog/" + numb);

const fontSize = 26 + 'px';

// To number
//1) 
console.log(typeof(Number('4')));
//2)
console.log(typeof(+'5'));
//3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// To boolean
// False: 0, '', null, undefined, NaN;
//1)
let switcher = null;
switcher = 1;
if (switcher) {
    console.log("Working...");
}
//2)
console.log(typeof(Boolean('4')));
//3)
console.log(typeof(!!"some text"));