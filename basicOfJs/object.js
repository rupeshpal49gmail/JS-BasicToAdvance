// ** 1. Singleton Object ** //
// When we create a object with constructor, its called singleton object  //

// **2. Object Literal  ** //

// const stdName = {
//   fName: "John",
//   lName: "Doe",
// };
// console.log(stdName.fName);
// console.log(stdName["lName"]);  // recomonded method  //

// const mySym = Symbol("key1");

// const heyBuddy = {
//   name: "Rupesh",
//   [mySym]: "mykey1",
//   age: 29,
//   location: "Surat",
// };

// console.log(heyBuddy[mySym]); // While working with symbol object need to follow given methods //

// heyBuddy.age = 30;
// Object.freeze(heyBuddy);
// heyBuddy.age = 40;
// console.log(heyBuddy + "I am not able to change existing data");

// lets play with constructor methods  //

// const instaUser = new Object((userName = "Rupesh"), (age = 29));
// console.log(instaUser);
// console.log(instaUser["userName"]);
// console.log(instaUser[userName]);

const regularUser = {
  email: "johndoe90@fakemail.com",
  accountDetails: {
    bankName: "Federal Bank",
    branchName: "Cincinati, USA",
    accNumber: {
      accountNumber: 45364378213093,
      ifscCode: "FBOO01783",
    },
  },
};

console.log(regularUser.email); // Regular method to call objects

console.log(regularUser.accountDetails.accNumber.accountNumber); // Chaining methods

// *** Object concatenation *** //

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { obj1, obj2 };
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2); /// For multiple assign need to take empty object{}.

console.log(obj3);
