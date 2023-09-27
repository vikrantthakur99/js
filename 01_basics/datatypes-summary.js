// #Primitive Datatype

// 7 types: string, number, boolean, null, undefined, Symbol, BigInt

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const id =Symbol('123');
const anotherId=Symbol('123');
// console.log(id===anotherId); //we can pass the same value in the symbol datatypes but its name always would be unique and both values would be defined upon thier variable name

const bigNumber = 333334343434343434n  //n represent the bigInt


// #Reference Type (Non-Primitive) 

// Array, Objects, Functions 


 //# Array stores muliple elements in a single variable
 //Example
 const hero =["Superman","Batman"];

 // #An object stores values in key value pairs with different datatypes and inside this {}
//Example
 let myObj={
    name:"Vikrant",
    age:23,
 }

 // #Function : A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value

