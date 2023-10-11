// const arr = [1,2,3,4,5];
// console.log(arr);

// another way to create array is 

// const myArr = new Array(1,2,3,4,4);
// console.log(myArr);

// Array method 

// myArr.push("hitesh");
// console.log(myArr);

// myArr.pop();
//  const checkStore = myArr.pop();
// console.log(myArr);
// console.log(checkStore);

// // shift and unshift usually we don't use to much it is time taking

// myArr.unshift(0);  // add element in first index and make shift all element by 1 in right side 
// console.log(myArr);

// myArr.shift();  // remove first element from array if array is empty it return undefined
// console.log(myArr);

// in Array there is question type method which return true or false some them are as follows

// console.log(myArr.includes(4));  // includes() determine that certain element are included in array or not
// console.log(myArr.indexOf(4));   // indexOf() return index of element if it is contain in array else return minus 1


// slice, splice 

const arr = [1,2,3,4,5,6]

console.log("A" , arr);

console.log("B" , arr);
// console.log(arr.slice(1,3));  it exclude the last position and it does shallow copy of array 
console.log("A" , arr);


console.log("C" , arr);
console.log(arr.splice(1,3)); // it include end point as well as it modify the  originality of array
console.log("A" , arr);
