const tinderUser=new Object() //singleton object

const tinderUserOther={ //non-singleton object
}

tinderUser.id="123asa";
tinderUser.name="Vikrant";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstname:"Vikrant",
            lastName:"Thakur"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3=Object.assign({},obj1,obj2); //we use Object.assign to combine the two source objects
//and in we use empty {} to define as target so that our all objects can act as a source can be stored in our target 
// console.log(obj3);
// **ALSO WE CAN USE SPREAD OPERATOR TO COMBINE THE VALUES OF TWO OBJECTS
const obj4={...obj1,...obj2}
// console.log(obj4);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"g@gmail.com"
    },
]

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //using this we can extract the keys of a particular object 
console.log(Object.values(tinderUser)); //using this we can extract the values of a particular object
console.log(Object.entries(tinderUser)); //using this we can extract the keys and values in an array of a particular object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //hasOwnProperty checks wheather the property is present in the objet is present or not return the result in the boolean datatype


