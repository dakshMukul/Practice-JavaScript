/*Classes are a template for creating objects. They encapsulte data with code to work on that data. Classes in JS are built on #prototype.*/

class createUser {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  print() {
    console.log(this.username, this.score);
  }
}

createUser.prototype.showScore = function () {
  console.log(score);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(typeof chai);
console.log(typeof createUser);
