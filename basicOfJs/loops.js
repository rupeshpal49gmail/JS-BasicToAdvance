// Loops or Iteration //
/// 1. for loop  //
/*
for (let i = 0; i < 10; i++) {
  console.log(`The value of ${i} : ${i}`);
}

let fruitsName = ["Mango", "Banana", "Apple"];

for (let i = 0; i < fruitsName.length; i++) {
  const element = fruitsName[i];
  console.log(element);
}

// Break and Continue //

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`Captured 5`);
    break;
  }

  if (i == 5) {
    console.log(`Ok, Continue`);
    continue;
  }
  console.log(`Value of i : ${i}`);
}

// while loop  //
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 1;
}

let vegName = ["Potato", "Tomato", "Cabbage"];
let arr = 0;
while (arr < vegName.length) {
  console.log(`Value of Vegetable name is ${vegName[arr]}`);
  arr = arr + 1;
}

// do while loop  //

let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 5);
*/

// for of loop and for in loop //
const numberArr = [1, 2, 3, 4, 5];

for (const numbers of numberArr) {
  // console.log(numbers);
}

const sayHi = "Hi Devin!";
for (const greet of sayHi) {
  // Here with continue statement I can ignore space between words //
  if (greet == " ") {
    continue;
  }
  // console.log(`Each char is: ${greet}`);
}

// Maps  //
const mapValue = new Map();
mapValue.set("IN", "India");
mapValue.set("USA", "United State of America");
mapValue.set("Gr", "Germany");
mapValue.set("IN", "India");
// console.log(mapValue);

for (const [key, value] of mapValue) {
  // console.log(`${key} :-  ${value}`);
}

const myGames = {
  game1: "NFS",
  game2: "Counter Strike",
  game3: "GTA",
};

// for of loop is not iterable on  object  //
// for (const [key, value] of myGames) {
//   console.log(key, ":-", value);
// }

// *********** //
const myObj = {
  js: "Javascript",
  cpp: "C++",
  rv: "Ruby",
};
// for object we use for in loop to iterate //

for (const obj in myObj) {
  // console.log(`${obj} Stand for ${myObj[obj]}`);
}

const fruitsName = ["mango", "Banana", "Apple"];

for (const fruits in fruitsName) {
  // console.log(`${fruitsName[fruits]}`);
}

// forEach loop //
const prLang = ["c", "c++", "js", "java"];

// prLang.forEach((item) => {
//   console.log(item);
// });

// function script(i) {
//   console.log(i);
// }
// prLang.forEach(script);

// prLang.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const stdDetails = [
  {
    studentName: "Rupesh",
    studentRollNumber: 121131,
    branch: "Computer science",
  },
  {
    studentName: "Shivam",
    studentRollNumber: 121123,
    branch: "Computer science",
  },
  {
    studentName: "Rajveer",
    studentRollNumber: 121198,
    branch: "Computer science",
  },
];
stdDetails.forEach((std) => {
  // console.log(std.studentName);
});

// const values = stdDetails.forEach((item) => {
//   // console.log(item);
//   return item;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const res = myNums.filter((item) => item > 2);
// const res = myNums.filter((item) => {
//   return item > 4;
// });
// console.log(res);

// const newNum = [];
// myNums.forEach((item) => {
//   if (item > 4) {
//     newNum.push(item);
//   }
// });

// console.log(newNum);

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// console.log(newNums);

// *** Chaining methods *** //

// const newNum = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 20);
// console.log(newNum);

// *** Reduce *** //
const number = [1, 2, 3, 4];

const finalRes = number.reduce((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);

  return acc + currVal;
}, 0);

console.log(finalRes);
