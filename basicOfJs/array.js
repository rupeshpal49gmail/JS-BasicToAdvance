// Array  //
// Here what we read the following notations
// 1. () :---> Parentheses
// 2. [] :---> Square bracket
// 3. {} :---> Curley braces

// How to decalare array //
// let newArray = [1,2,3,4,"One", "Two", "Three", true]; //

let numArray = [1, 2, 3, 4, 5];
console.log(numArray);
numArray.push(100);
console.log(numArray);
numArray.pop();
console.log(numArray);
numArray.shift();
console.log(numArray);
numArray.unshift(90);
console.log(numArray);
console.log(numArray.includes(4));
console.log(numArray.indexOf(5));
console.log(numArray.at(2));

// Slice and Splice //

let rollNumber = [1, 2, 3, 4, 5, 6];
console.log(rollNumber.slice(1, 2));
console.log(rollNumber.splice(1, 2));
