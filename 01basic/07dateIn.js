const date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());    // dayName, monthName, date, year => Tue Oct 10 2023
// console.log(date.toLocaleString());  //  dd/mm/yyyy , hr:mi:sec
// console.log(date.toLocaleDateString()); // dd/mm/yyyy
// console.log(date.toISOString()); // return date as a string in ISO 

// note => month start from 0 in js
// let createDate = new Date(2023,0,1);
// let createDate = new Date(2023,0,1,5,3); extra hr:min
let createDate = new Date("01-14-2022"); //take input in more specific format iss syntax main month 01 se start hota hai
// console.log(createDate.toString());
// console.log(createDate.toDateString());
// console.log(createDate.toLocaleString());

// timestamp in js
//eg use case : in quiz set time, who answer fastest in quiz in these cases it is used

let timeStamp = Date.now();
// console.log(timeStamp); // this return milisecond from 01 jan 1970
// console.log(createDate.getTime());// from this date we want time in milisecond
// now we can compare this two time stamp like this it work in project 

// console.log(Date.now()); this gives exact date in milisecond

// now we want in second instead of milisecond see the step 

// console.log(Math.floor((Date.now())/1000)); now it will give value in second

let newDate = new Date();
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// let din = newDate.toLocaleString('default',{
//     weekday : "long"
// });

// console.log(din.weekday);




// mainly used method in date

// date.toDateString()
// date.toISOString
// date.toJSON
// date.toLocaleString
// date.toLocaleDateString