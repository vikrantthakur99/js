 const name="Vikrant";
 const age=23;

//console.log(name + age+ " Value" );
//NOTE : this way of concatination is a old way and does not recommand by professionals mostly 

// console.log(`Hello my name is ${name} and my age is ${age}`);
//this is the modern way and called string interpolation

const gameName= new String('vikranthchc');

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// #SLICE
const anotherString=gameName.slice(0,5);
//console.log(anotherString);


// #TRIM
const someOtherString="    Vikrant     ";
console.log(someOtherString);
console.log(someOtherString.trim());

// #REPLACE
const url = "https://vikrant.com/vikrant%20thakur";

console.log(url.replace('%20','+')); //replaces the value
console.log(url.includes('sunday')); //check the value if its present or not
