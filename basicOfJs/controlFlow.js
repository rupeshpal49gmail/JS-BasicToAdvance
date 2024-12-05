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

const userEmail = "johndoe@gamil.com";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// *** Truthy and Falsy value *** //
/// 1. falsy values  ///
/// false, 0, -0, BigInt, 0n, null, undefined, NaN ///

/// 2. Truthy values  ///
/// "0", "false", " ", [], {}, function(){},

// Nullish Coalescing operator (??): null undefined
let value1;
value1 = 5 ?? 10;
console.log(`1:-  ${value1}`);
value1 = null ?? 10;
console.log(`2:-  ${value1}`);
value1 = undefined ?? 20;
console.log(`3:-  ${value1}`);
value1 = null ?? 10 ?? 20;
console.log(`4:-  ${value1}`);
