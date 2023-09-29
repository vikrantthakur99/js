// Dates

let myDate= new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2022,1,26,6,4);
let myCreatedDate=new Date("01-12-2023");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now();
//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

console.log(newDate);
console.log(newDate.toDateString());
console.log(newDate.getMonth()+1); //as the month starts from 0 it will gave the exact date
console.log(newDate.getDay());