//from constructor --> #Singleton

// Object Literals
const mySym=Symbol("key1")

const JsUser={
    name:"Vikrant",
    age:23,
    [mySym]:"myKey1", //this is the declaration of the symbol datatype 
    location:"Jaipur",
    email:"vikrant@gmail.com",
    isloggedIn:false
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //best way to access the object
// console.log(typeof mySym);
// console.log(JsUser[mySym]);  //to access the value of the symbol datatype we dont use ""

JsUser.email="vikrantnew@gmail.com";
// Object.freeze(JsUser); //to freeze our object so that no one can change the value in it
JsUser.email="vikrantnewchatgpt@gmail.com";
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User,  ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());