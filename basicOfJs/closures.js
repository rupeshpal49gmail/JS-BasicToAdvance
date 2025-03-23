// let finalValue = function (a) {
//   console.log("Live viewers " + a);
//   let c = 4;
//   return function (b) {
//     return a + b + c;
//   };
// };
// let result = finalValue(200);
// console.log(result(8));

let addVal = function (a, b, c) {
  return {
    getAddTwo: function () {
      return a + b;
    },
    getAddThree: function () {
      return a + b + c;
    },
  };
};
let addedValue = addVal(2, 4, 1);
console.log(addedValue.getAddTwo());
console.log(addedValue.getAddThree());
