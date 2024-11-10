// ** 1. Singleton Object ** //
// When we create a object with constructor, its called singleton object  //

// **2. Object Literal  ** //

// const stdName = {
//   fName: "John",
//   lName: "Doe",
// };
// console.log(stdName.fName);
// console.log(stdName["lName"]);  // recomonded method  //

const mySym = Symbol("key1");

const heyBuddy = {
  name: "Rupesh",
  [mySym]: "mykey1",
  age: 29,
  location: "Surat",
};

console.log(heyBuddy[mySym]); // While working with symbol object need to follow given methods //
