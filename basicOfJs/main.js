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

// Loops

// let evenNumber;
// for (evenNumber = 1; evenNumber < 6; evenNumber++) {
//   console.log(evenNumber);
// }

// reverse counting //
// for (evenNumber = 5; evenNumber >= 1; evenNumber--) {
//   console.log(evenNumber);
// }

// loop with break statement  //

for (let someNum = 0; someNum <= 6; someNum++) {
  if (someNum == 4) {
    console.log("break statement is printed here");
    break;
  } else {
    console.log(someNum);
  }
}

// loop with continue statement  //

let lessons;
for (lessons = 1; lessons <= 5; lessons++) {
  if (lessons == 3) {
    continue;
  } else {
    console.log(lessons);
  }
}

// While and do while loop  //
// 1. while loop //
let index = 0;
while (index <= 5) {
  console.log(`Value of index is: ${index}`);
  index = index + 2;
}

// 2. do while loop //
let x = 1;
do {
  console.log("Hello World");
  x++;
} while (x <= 5);

let i = 5;
do {
  console.log(i);
  i--;
} while (i > 0);

// Strings  //
let firstName = "John";
let lastName = "Doe";
let res = firstName + " " + lastName;

console.log(firstName);
console.log(typeof firstName);
console.log(res);

// Problems on loops  /
// 1. sum of 1 to given numbers like(sumOfNum(3) //Output(6) 3+2+1)
function sumOfNumbers(n) {
  for (let numbers = 1; numbers <= n; numbers++) {
    console.log(`Result is: ${numbers}`);
  }
}
sumOfNumbers(4);

// String literal

let userDetails = `My name is   Rupesh Pal
and I am from Varanasi`;
console.log(`User detail:- ${userDetails}`);
let fullName = new String("John Doe");
console.log(fullName);

// String methods or utilities
console.log(userDetails.toLocaleUpperCase());
console.log(fullName.toLocaleUpperCase());
console.log(userDetails.length);

// let str = "Welcome to code space";
// console.log(`${str.substring(2)}`);
// console.log(`${str.substring(2, 4)}`);

let newStr = "Let's write some code";
let response = newStr.split(" ");
console.log(response);

// console.log(`${newStr.split(" ")}`);

let lesson1 = "A \\Empty \\well";
console.log(lesson1);

let conclusion = lesson1.split("\\");
console.log(conclusion);

console.log(conclusion.join(","));

let ChapterOne = ["Happy", "for", "Triumph"];
let resOfTriumph = ChapterOne.join(" - ");
console.log(resOfTriumph);

// Functions  //
// 1. Function with return statement //
function sayHi() {
  return "Hello John DOe";
}
console.log(sayHi());

// Function without parameter  //
function greetME() {
  console.log("Welcome Rupesh");
}
greetME();

// Counting with function  //
function countingFrom1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

countingFrom1To10();

// Function with parameter
function addValue(num1, num2) {
  return num1 + num2;
}

console.log(`The Output is:- ${addValue(4, 8)}`);

function userName() {
  let fulname = "John Doe";
  let email = "ohndoe90@gmail.com";
  let resUserName = "My Name is: " + fullName + " and my email is: " + email;
  return resUserName;
}
console.log(userName());

// FUnction Expression  //

let greetMessage = function () {
  let fName = "John";
  let lName = "Doe";
  let email = "johndoe90@test.com";
  let results10 = `My name is ${fName} ${lName} and my email is ${email} `;
  return results10;
};

let resultofGreet = greetMessage();
console.log(resultofGreet);
