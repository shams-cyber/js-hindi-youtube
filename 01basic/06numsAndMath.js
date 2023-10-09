const score = 400 //javascript eniv automatically detect that it is number type
// console.log(score.toFixed(2));

//we can also define explicitly a number 

const bal = new Number(100);
// console.log(bal);

// we can convert a number into string using toString() method and can apply all striing function 

// console.log(bal.toString().length);
// console.log(bal.toFixed(4));

// toPrecision(no of digit before decial) to make decimal more precise by roundoff
let balance = 123.8966
// console.log(balance.toPrecision(3));

//to represent number in currency formal 
const newBal = 10000000;
// console.log(newBal.toLocaleString('en-IN'));

//  +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

// // negative no into positive no
// console.log(Math.abs(-4));
// console.log(Math.round(4.88));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(5.78));
// console.log(Math.min(-4,8));

// random() method gives random value within range 0 and 1

console.log(Math.random() * 10); // it gives no range 0 and 10 with fixed decimal
console.log(Math.floor((Math.random()*10)+1)); // now we don't want zero in this random to ignore zero add 1
console.log(Math.floor((Math.random()*(10+1)+10))) // minimum start should be 10