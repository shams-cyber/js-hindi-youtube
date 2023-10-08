
 console.log("2" > 1); // true

console.log(null > 0); 

// note : in comparison operator null or string is treated as number than make comparison with no

console.log(null == 0); // reason equality chwck main ye false return krega

console.log(null >= 0); // here first null get converted int no than it is checked with the 0

// === : strictly check it check the value as well as the datatype to check the equality

console.log("2" == 2);
// what happen here : in == this first conversion happen that from string to number than comparsion happen
//thats why the result is true

console.log("2"===2)
// what happen in this operation it doesn't allowed comparison and compare with value as well as check both variable datatype
