// 1. This keyword //

// const user = {
//   username: "John",
//   age: 29,
//   welcomeMessage: function () {
//     console.log(`Hey ${this.username}, welcome to home`);
//     console.log(this);
//   },
// };
// user.welcomeMessage();
// user.username = "Ryan Dhull";
// user.welcomeMessage();

// function newOne() {
//   console.log(this);
// }
// newOne();

// 2. Arrow Function  //

// const arrFunc = function () {
//   let username = "John";
//   console.log(username);
// };
// arrFunc();

// const arrowFunction = () => {
//   let newName = "New John";
//   console.log(newName);
// };
// arrowFunction();

// const addTwoNum = (num1, num2) => {
//   let output = num1 + num2;
//   console.log(output);
// };
// addTwoNum(3, 8);

// const addTwoNum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwoNum(3, 8));

// *** Implicit Return *** //

// const addNumValue = (number1, number2) => number1 + number2;
// console.log(addNumValue(3, 7));

// *** Immediately Invoked Function Expression (IIFE)  *** //

// *** Named IIFE  ***
(function sayHi() {
  console.log("Hello Rupesh");
})();

// *** IIFE With Arrow Function  *** //
(greetYou = () => {
  console.log("Hey Buddy Welcome to our dreamland");
})();

(greetYou = (username) => {
  console.log(`Hey ${username} Welcome to our dreamland`);
})("Rupesh Pal");
