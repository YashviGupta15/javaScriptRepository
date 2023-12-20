//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n;



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memories
// Stack (Primitive), Heap (Non-Primitive)
let myName = "Yashvi Gupta";  // --> goes to stack memory
let obj1 = {
    name: 'Yashvi'
}; // --> goes to heap memory

//stack memory goes by value
// heap memory goes by reference

let anotherName = myName;
anotherName = "Hello World!";
console.log(myName, anotherName); // values are taken hence they still differ

let obj2 = obj1;
obj2.name = 'another name';
console.log(obj1, obj2); // same ref that is why values got same in both