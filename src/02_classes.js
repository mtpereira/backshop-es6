class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  name() {
    return this.firstName + ' ' + this.lastName;
  }
}

class User extends Person {
  constructor(firstName, lastName, email) {
    super(firstName, lastName);

    this.email = email;
  }

  handler() {
    return this.name() + ' (' + this.email + ')';
  }
}

var user = new User('John', 'Snow', "knows@nothing.yo")

console.log(user.handler());
