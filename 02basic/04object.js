// singleton kaise kr skte hai ya constructor ke help se kaise create kr skte hai

// very very important interview question
// const tinderUser = new Object(); // ye ek singleton object hai iska matlab 
// // ye hai ki humlog constructor k help se object create krte hai

 const tinderUser = {}; // ye non singleton object hai isse object literal kehte hai 

 tinderUser.id = "sham";
 tinderUser.name = "Shamser";
 tinderUser.pass = "123";

//  console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {firstName : "shamser" , lastName : "Alam"}
};

// to access object inside object using dot notation

// console.log(regularUser.fullName.lastName);

// NOW HOW TO COMBINE MORE THAN ONE OBKECT IN AN ANOTHER OBJECT

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = Object.assign({},obj1,obj2,obj3); // return a target object that contain all individual key value 

// another way to copy object in another object

const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);

// HOW TO GET ALL THE KEY OF OBJECT 

// console.log(Object.keys(obj5));

//  HOW TO GET ALL THE VALUES OF OBJECT

// console.log(Object.values(obj5)); 

// HOW TO CHECK WETHER THAT PROPERTY KEY EXIST IN OBJECT OR NOT

// console.log(obj5.hasOwnProperty(1));



//  <<<<<<<<<<<<<<<<<<<<<< OBJECT DESTUCTURING IN JS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const api = {
    course : "javascript",
    price : 999,
    courseInstructor : "Shamser"
}

// Destructuring

const {courseInstructor} = api;
console.log(courseInstructor);

// if i don't want to use the key of object instead of that i want to define my own variable so we can do that

const {courseInstructor:instructor} = api;
console.log(instructor);

