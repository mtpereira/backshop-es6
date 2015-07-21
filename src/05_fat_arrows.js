// Expression bodies
var sum = (a, b) => a + b;
console.log(sum(2, 1));

// Statement bodies
var sub = (a, b) => {
  return a - b;
};
console.log(sub(2, 1));

// shared this
var user = {
  firstName: 'John',
  lastName: 'Snow',

  printName() {
    setTimeout(function() {
      console.log(this.firstName);
    }, 500);

    setTimeout(() => {
      console.log(this.lastName);
    }, 500);
  }
}
user.printName();
