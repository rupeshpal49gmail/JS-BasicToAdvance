// Let's Learn Javascript with Hitesh Chaudhary  //
// Strings  //
const userName = "My Name is John Doe";
const userEmail = "johndoe39@gmail.com";
console.log(userName.__proto__);

let result = "My name is " + userName + " and my user name is " + userEmail;
console.log(result);

// We can achive concatenaion with string interpolation //
console.log(`My name is: ${userName} and My username is: ${userEmail}`);

// String Methods  //
console.log(userName.length);
console.log(result.toLocaleUpperCase());
console.log(result.toLocaleLowerCase());
console.log(userName.charAt(2));
console.log(result.indexOf("i"));

const newString = userName.substring(0, 6);
console.log(newString);
let str = "abcdefghijklmnopqrstuvwxyz";
console.log(str.slice(-3, 1));

const anotherString = userName.slice(-2, 7);
console.log(`This is the slice method output: ${anotherString}`);
console.log(anotherString);

let student = "   John Doe  ";
console.log(student);
console.log(student.trim());

const url = "https://youtube.com%30bestseries";
console.log(url.replace("%30", "/"));
// *** We can check occurance of characters  ****  //
console.log(url.includes("you"));

console.log(url.includes("with me"));

// *** Number *** //

const balance = 1000;
console.log(balance);
console.log(typeof balance);
// Let's define variable with new keyword //
const score = new Number(100);
console.log(score);

console.log(score.toString());
console.log(score.toString().length);
console.log(score.toFixed(2));

const newNumbers = 19230.343434;
console.log(newNumbers.toPrecision(3));

const numValue = 10000200;
console.log(numValue.toLocaleString("en-IN"));

// *** Maths  **** //
console.log(Math);
console.log(Math.abs(-30));
console.log(Math.round(20.34));
console.log(Math.ceil(34.23));
console.log(Math.floor(43.4444));
console.log(Math.min(1, 234, 43, 4, 23, 23, 4, 2, 2, 2));
console.log(Math.max(1, 234, 43, 4, 23, 23, 4, 2, 2, 2));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
