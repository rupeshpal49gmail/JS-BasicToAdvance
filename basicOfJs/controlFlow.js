// 1. if  //
if (true) {
  console.log("Hello Rupesh");
}
if (false) {
  console.log("Hello John"); //Inside scope code will not execute //
}
console.log("Hello Everyone!!");

// Conditional statement //
if (2 >= "2") {
  console.log("Value is equal");
}
if (1 >= "2") {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

// Shorthand //
const amount = 500;
if (amount > 500) console.log("Pass"); // Implicit return only one line return statement //
if (amount > 500) console.log("Pass"), console.log("Hello multiline"); // We can write multiline return but that is not recommended  //
// Nesting conditions //

if (amount > 400) {
  console.log("Less than 500");
} else if (amount > 1900) {
  console.log("less than 2000");
} else if (amount >= 2000) {
  console.log("Value is equal to Amount!!");
} else {
  console.log("Value is incorrect");
}
