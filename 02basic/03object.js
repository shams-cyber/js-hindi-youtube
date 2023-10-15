// singleton interview question ip!!!

// Object.create() => singleton the object create using constructor

//object literals

// empty object created
const juser = {
    name : "Shamser",
    age : 18,
    email : "shamserali899@gmail.com"
}; 

// to access object we have two ways one is dot notation and another is baracket notation

console.log(juser.name); // don't use mainly instead of this use bracket notation because see in below example

const juser1 = {
    "full name" : "Md Shamser Alam",
    name : "Shamser",
    age : 18,
    email : "shamserali899@gmail.com"
}; 

// to acess full name right synatx is bracket notation

console.log(juser1["full name"]);

// ANOTHER IMPORTANT INTERVIEW QUESTION 
// CAN YOU ADD A SYMBOL  INTO OBJECT AS KEY VALUE PAIR AND PRINT

// create symbol 

const value = Symbol("key1");
// const juser2 = {
//     name : "Shamser",
//     value : "key1",
//     age : 18,
//     email : "shamserali899@gmail.com"
// }; 

// console.log( typeof juser2.value);

// ACTUALLY WE DID WE ADD A SYMBOL IN OBJECT AS KEY VALUE PAIR BUT ITS  TYPE IS STRING
// CORRECT SYNTAX TO ADD SYMBOL IS 

const juser2 = {
    "full name" : "Md Shamser Alam",
        name : "Shamser",
        [value] : "key1",
        age : 18,
        email : "shamserali899@gmail.com"
    }; 
 
    console.log( juser2[value]);


    // to change the value of key in object

    juser2.email = "amrinalam98@gmail.com";
    console.log(juser2);

    // if you dont want any alter in object we can freeze that object so doesn't affect the object without
    // giving error

    // Object.freeze(juser2);
    // juser2.email = "cs041@gmail.com";
    // console.log(juser2);

    // we can also add a function in object

    juser2.greet = function () {
        console.log("hello js user");
    }

    // we going to create another function and this function we are going to use object properties 
    //to perform some simple task using string interpolation

    juser2.greettwo = function () {
        console.log(`hello js user ${this["full name"]}`);
    }

    console.log(juser2.greet());
    console.log(juser2.greettwo());