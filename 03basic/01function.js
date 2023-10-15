// function()

// ADDITION OF TWO NUMBER TO PRINT

// function add(num1,num2){
//     console.log(num1+num2);
// }

// add(1,2);

// now to return the result in anvariable

// function add(num1,num2){
//     return num1 + num2;
// }

// const val = add(1,2);
// console.log(val);

// function login(username){
//     return `${username} just logged in !`
// }

// console.log(login());

// to overcome this problem where we didn't get any value in parameter from argument so js provide another way to define default value in parameter

// function login(username = "sham"){
//     return `${username} just logged in !`
// }

// console.log(login());

// WE CAN VALIDATE WHETHER WE HAVE PRINT OR NOT USERNAME BY USING IF CONDITION

// function login(username = ""){
//     if(!username){
//         console.log("no username");
//         return
//     }
//     return `${username} just logged in !`
// }

// console.log(login());