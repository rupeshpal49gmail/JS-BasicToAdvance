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

prLang.forEach((item) => {
  console.log(item);
});
