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

// function myNumbers(memory1, memory2, ...numers1) {
//   return numers1;
// }
// console.log(myNumbers(100, 200, 300, 400, 789));

// *** Scope *** //
function heyOne() {
  const username = "John Doe";
  function heyTwo() {
    const website = "My name is John Doe";
    console.log(username);
  }
  //   console.log(website);  // output is error due to outside of the scope
  heyTwo();
}
heyOne();

if (true) {
  const stdName = "John Doe Newton";
  if (stdName === "John Doe Newton") {
    const webpage = "Practice paper";
    console.log(stdName + webpage);
    console.log(webpage);
  }
  //   console.log(webpage); // Output error due to outside of scope
  console.log(stdName);
}

// console.log(stdName); // Output error due to outside of scope

// function addOne(num1) {
//   return num1 + 5;
// }
// console.log(addOne(5))

console.log(addOne(5)); // output: 10
function addOne(num1) {
  return num1 + 5;
}

const addTow = function (num2) {
  return num2 + 2;
};

console.log(addTow(5));

// console.log(addTow(5)); // Output: error :- not accessable

// const addTow = function (num2) {
//   return num2 + 2;
// };
