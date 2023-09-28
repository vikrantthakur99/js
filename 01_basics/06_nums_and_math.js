const score=400;
//console.log(score);

const balance=new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(3));

// #Precision
const otherNumber=123.787878;
//console.log(otherNumber.toPrecision(3)); //gave priority to the values before the decimal point and not after that (convert the rest to exponential value)

// #toLocaleString
const hundreds=1000000;
//console.log(hundreds.toLocaleString('en-IN')); //adds the comma to easily read the values. {(en-IN) is the basic standard the easily read the values}

// ++++++++++++++++++++++Maths+++++++++++++++++++++++

//console.log(Math.abs(-8));
//console.log(Math.round(4.644)); //takes the round off value 
//console.log(Math.ceil(4.244));  //takes the upper value 
//console.log(Math.floor(4.644)); //takes the lowest value

console.log(Math.random());
console.log((Math.random()*10)+1); //to shift the value onto the left side and adding +1 to avoid zero
console.log(Math.floor(Math.random()*10)+1); //gives the round off value

// now if want the value in some range lets suppose here is 10-20
const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min+1))+min)); //here max-min specify the range of it and in last minus (min) defined the final that we need that min value in it