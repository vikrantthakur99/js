// console.log("2">1);
// console.log("02">1);
//it does not gave us the predictable result as both the datatypes are different

console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*what happens in javascript it converts the null into 0 and treating it as number
and this specifically only happens with the comparssion operators therefore 
0>0 =>False
and 0>=0 =>True
*/

