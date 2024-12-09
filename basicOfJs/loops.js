// Loops or Iteration //
/// 1. for loop  //

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
