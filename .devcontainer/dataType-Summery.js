// Primitive

// 7 types : String , Number, Boolean , null , Undefined , Symbol,
//    BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);


const bigNumber = 34566778977654322234n

// console.log(bigNumber);



// Reference (Non primitive)

// Array , Objects , function


const heros = ["Aashu","ram","sunney"];
let myObj ={
    name:"seeta",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log( myObj);
