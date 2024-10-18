// Let's Learn Javascript with Hitesh Chaudhary  //
// Strings  //
const userName = "My Name is John Doe";
const userEmail = "johndoe39@gmail.com";

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
