// 1. This keyword //

const user = {
  username: "John",
  age: 29,
  welcomeMessage: function () {
    console.log(`Hey ${this.username}, welcome to home`);
    console.log(this);
  },
};
user.welcomeMessage();
user.username = "Ryan Dhull";
user.welcomeMessage();

function newOne() {
  console.log(this);
}
newOne();
