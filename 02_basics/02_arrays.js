const marvel_heros=["thor","IronMan","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 
/*NOTE  
when we try to merge the two arrays together the second complete array become the element itself 
and as in 6th console to access the elements in the second array we have to gave value like [2][1] firts is for first array and
other one is for second array which itself is a element
its not a good practice to access the element 
**Instead of push we will use concat
*/

const all_Heros=marvel_heros.concat(dc_heros);
// console.log(all_Heros); //now each elements of both aaray are combined 

// #SPREAD OPERATOR
//we can also use spread operator to concat the arrays

const newAllHeros=[...marvel_heros,...dc_heros];
// console.log(newAllHeros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray=another_array.flat(Infinity); //.flat returns the new array with all sub arrays in an element {Infinity we use to gave the depth for that particular array}
// console.log(realAnotherArray);

// console.log(Array.from("Vikrant")) //converts into array
// console.log(Array.from({name:"vvikrant"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //of can also be used to convert the variables values into the arrays