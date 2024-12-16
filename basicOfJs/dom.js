// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1]);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   // console.log(parent.children[i].innerHTML);
// }
// parent.children[1].style.color = "red";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.nextSibling);

// Create Element in DOM  //

const div = document.createElement("div");

console.log(div);
div.className = "parnetNode";
div.id = "myId";

console.log(div);
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "Title created");
div.style.backgroundColor = "purple";
div.style.padding = "20px";
const addText = document.createTextNode("Hello Dom");
div.appendChild(addText);
document.body.appendChild(div);
