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



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< how to take multiple argument in paraeter and store in array >>>>>>>>>>>>>>>

// function calculateCartPrice(num){
//     return num;
// }

// console.log(calculateCartPrice(12,3,4));

// SO ABOVE CODE TAKE ONLY ONE VALUE AS A PARAMETER TO OVERCOME THIS WE HAVE REST PARAMETER (...REST )
// USED IN FUNCTION AS A PARAMETER

function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(12,34,57,88));

// Rest parameter take multiple argument as parameter and store in array and return a array

// ONE OF THE BEST REAL WORLD EXAMPLE IS FLIPKAR ADD TO CART TO CALCULTAE TOTAL PRICE


// <<<<<<<<<<<<<<<<<<<<< PASSING OBJECT AS ARGUMENT IN FUNCTION CALL >>>>>>>>>>>>>>>>>>>>>>>

function printPriceAndCourse(shamsKiCourse){
    return `${shamsKiCourse.course} course price is ${shamsKiCourse.price}`
}

console.log(printPriceAndCourse({
    course : "js ka code",
    price : 999
}));

//  <<<<<<<<<<<<<<<<<<<< SAME WAY WE CAN PASS AN ARRAY AS ARGUMENT IN FUNCTION IN JS >>>>>>>>>>>>>>>>>>>>

