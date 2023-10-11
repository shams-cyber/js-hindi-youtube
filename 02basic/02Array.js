 marvel = ["thor","iron","spider"]

const dc = ["batman","flash"]

// now we want the both array element in single array

// marvel.push(dc); // push treat a array a single element in marvel array so there is catch
// console.log(marvel);

//  const allHero = marvel.concat(dc); // concat combine two array and return new array
// console.log(allHero);

// to copy array individual element into new array js having spread operator
const allNewHero = [...marvel,...dc];  // spread operator basically spread all individual element in array
// console.log(allNewHero);

const anotherArray = [1,2,[1,3],4,[1,[2,4]]];
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

// for checking given variable is array or not method is isArray() this is provide by array global variable
// it return in true or false

console.log(Array.isArray("hitesh"));

// to convert any iterable object into array suppose string to array , nodelist to array  we have from() method

console.log(Array.from("hitesh"));

console.log(Array.from({name : "hitesh"})); // always give empty object as we didn't specified that
//using which one we have to make array wether using key or value.

// of() => return new array by taking set of element
const score1 = 100;
const score2 = 200;

console.log(Array.of(score1,score2));

