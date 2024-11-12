// Function  //
// function addTwoNumbers(num1, num2) {
//   console.log(num1 * num2);
// }

// addTwoNumbers(3, 4);
// let result = addTwoNumbers(2, 4);
// console.log(`Result : ${result}`);

// function addTwoNumbers(num1, num2) {
//   return num1 * num2;
// }

// console.log(addTwoNumbers(3, 4));

// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }
// loginUserMessage("Rupesh"); // this will not print anything
// console.log(loginUserMessage()); // Output will be undefined just logged in
// console.log(loginUserMessage("John Doe"));

// function printUserName(userName) {
//   if (userName === undefined) {
//     console.log("Please enter name!");
//     return;
//   }
//   return `${userName} Just Logged in`;
// }
// console.log(printUserName());

// function with object  //
// function myNumbers(...numers1) {
//   return numers1;
// }
// console.log(myNumbers(100, 200, 300, 400));

function myNumbers(memory1, memory2, ...numers1) {
  return numers1;
}
console.log(myNumbers(100, 200, 300, 400, 789));
