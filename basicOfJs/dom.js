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

// const div = document.createElement("div");

// console.log(div);
// div.className = "parnetNode";
// div.id = "myId";

// console.log(div);
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "Title created");
// div.style.backgroundColor = "purple";
// div.style.padding = "20px";
// const addText = document.createTextNode("Hello Dom");
// div.appendChild(addText);
// document.body.appendChild(div);

// Create element in DOM with function  //

// function addNewLang(langauge) {
//   const li = document.createElement("li");
//   li.innerHTML = `${langauge}`;
//   document.querySelector(".language").appendChild(li);
// }
// addNewLang("Python");
// addNewLang("Java");
// addNewLang("C++");
// addNewLang("C#");

function addotherMethod(langauge) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langauge));
  document.querySelector(".language").appendChild(li);
}
addotherMethod("Ruby");
addotherMethod("C#");
addotherMethod(".Net");

// Edit Element in DOM  //

const secLang = document.querySelector("li:nth-child(2)");
// secLang.innerHTML = "golang";

// other approach to edit element in DOM  //
const newLi = document.createElement("li");
newLi.textContent = "Node.js";
secLang.replaceWith(newLi);

// Edit Element in DOM  //
// const fLang = document.querySelector("li:first-child");
// const fLang = document.querySelector("li:last-child");
const fLang = document.querySelector("li:nth-child(2)");
fLang.outerHTML = "<li>React</li>";

// Remove Element in DOM  //
// const lastLang = document.querySelector("li:first-child");
// const lastLang = document.querySelector("li:last-child");
const lastLang = document.querySelector("li:nth-child(2)");
lastLang.remove();
