// Array  //
// Here what we read the following notations
// 1. () :---> Parentheses
// 2. [] :---> Square bracket
// 3. {} :---> Curley braces

// How to decalare array //
// let newArray = [1,2,3,4,"One", "Two", "Three", true]; //

// let numArray = [1, 2, 3, 4, 5];
// console.log(numArray);
// numArray.push(100);
// console.log(numArray);
// numArray.pop();
// console.log(numArray);
// numArray.shift();
// console.log(numArray);
// numArray.unshift(90);
// console.log(numArray);
// console.log(numArray.includes(4));
// console.log(numArray.indexOf(5));
// console.log(numArray.at(2));

// Slice and Splice //

// let rollNumber = [1, 2, 3, 4, 5, 6];
// console.log(rollNumber.slice(1, 2));
// console.log(rollNumber.splice(1, 2));

const carsBrand = ["Tata", "Mahindra", "Maruti"];
const bikeBrand = ["Hero", "TVS", "Bajaj", "Royal Enfield"];

// 1. ** By Push method  **  //
// carsBrand.push(bikeBrand);  // This is not a recommended way //
// console.log(carsBrand);

// ** By concat method ** //
// let outputRes = carsBrand.concat(bikeBrand);  // This one is okay method //
// console.log(outputRes);

// ** By spread operator method ** //
const allBrands = [...carsBrand, ...bikeBrand];
console.log(allBrands);

const compBrand = [
  "HCL",
  "Wipro",
  "Dell",
  ["Samsung", "HP"],
  [1, 2, 3, [4, 5, 6, [7, 8, 9]]],
];
console.log(compBrand);

const finalBrand = compBrand.flat(Infinity);

console.log(finalBrand);

// console.log(Array.isArray("John Doe"));
// console.log(Array.from("John Doe"));
console.log(Array.from({ name: "John Doe" })); // Important

let marks1 = 80;
let marks2 = 75;
let marks3 = 90;
console.log(Array.of(marks1, marks2, marks3));
