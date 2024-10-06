let rollNumber1 = 20;
// console.log(rollNumber1);

rollNumber1 = 21; // we can reassign the value in the variable
// console.log(rollNumber1);

// let rollNumber1 = 20; // We can not redeclare variable

// Operators
/*
+ Addition
- Substractio
* Multiplication
/ Division
% Modulus
**  Power calc
 */

// 1. Addition  //
function calculateNumbers(numVal1, numVal2) {
  return numVal1 + numVal2;
}

// console.log(calculateNumbers(10, 20));

// 2. Substraction  //
let valOne = 10;
valTwo = 5;
// console.log(valOne - valTwo);

// 3. Multiplication  //
let mangoPrice = 120;
let purchaseInKG = 5;
// console.log(mangoPrice * purchaseInKG);

// 4. Division  //

// console.log(valOne / valTwo);

// 5. Modulus  //
let num1 = 19;
let num2 = 7;

// console.log(num1 % num2);

// 6. Power  //
let cuboidOfNumber = 4;
// console.log(cuboidOfNumber ** 2);

// Increament, Decrement and Operator //
let a = 10;
// console.log(a);
// console.log(a++);
// console.log(a--);
// console.log(a);
// console.log(++a);
// console.log(a);
// console.log(--a);
// console.log(a);

// Assignment Operator  //

let numbers1 = 10;
// console.log(numbers1);

numbers1 += 3;
// console.log(`Here assigned number is ${numbers1}`);

// Comparision operators //
/* > 
< 
>=
<=
==
!=
===
!==
*/

// console.log(10 > 9);
// console.log(10 < 9);
// console.log(10 >= 9);
// console.log(10 <= 9);
// console.log(10 == 9);
// console.log(10 != 9);
// console.log(10 === 9);
// console.log(10 !== 9);
// console.log(
//   `Here is loose strict typ of 10 == "10" will be: ${
//     10 == "10"
//   } because == operator check only value and === operator check value and type both`
// );
// s

// Logical Operator  //
// 1. Truthy
// 2.Falsy

let age = 20;
let status1 = age > 18 ? "I can vote" : "I can not vote";
// console.log(status1);

let result = true && false && true;
// console.log(`The output is ${result}`);

let res2 = false || 7 || 10 || 18;
// console.log(res2);

let res3 = true && false;
// console.log(res3);

let res4 = true && false && true;
// console.log(res4);

let res5 = true || false || true;
// console.log(res5);

// Bitwise operators  //
// AND(&), OR(||), Not(!, ~), <<, >> XOR(^) //

// console.log(2 ^ 2);

// Conditionals //

// let studentsAge = 10;
// 1. if statement //
// if (studentsAge >= 18) {
//   console.log("Students can participate in election");
// }

// 2. if else statement //
// if (studentsAge >= 20) {
//   console.log("He is eligible for participate in stunt mania training");
// } else {
//   console.log(
//     "He needs to take certificate from RTO to get eligibility critera"
//   );
// }

// 3 if else if statement //
// if (studentsAge >= 30) {
//   console.log("RTO certificate and stunt mania cetificate both are mandatory");
// } else if (studentsAge >= 35) {
//   console.log("He must have professional certificae");
// } else {
//   console.log("He must have to pass all the criteria");
// }

// Switch Case //

// let result2 = 17;

// switch (result2) {
//   case 18:
//     console.log("Candidate can vote");
//     break;
//   case 17:
//     console.log("Candidate is minor");
//     break;
//   default:
//     console.log("Please check the conditions");
// }

// Ternary Operator //

// By traditional method //

// let numValue = 2;
// let outputValue;
// if (numValue % 2 === 0) {
//   outputValue = "Even";
// } else if (numValue % 2 === 1) {
//   outputValue = "Odd";
// } else {
//   outputValue = "Please enter valid number value";
// }

// console.log(outputValue);

// By Ternary method //
// result = numValue % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// Loops & Strings

let evenNumber;
for (evenNumber = 1; evenNumber <= 10; evenNumber++) {
  console.log(evenNumber);
}
