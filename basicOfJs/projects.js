// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// const counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const body = document.querySelector("body");
console.log(body);

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
