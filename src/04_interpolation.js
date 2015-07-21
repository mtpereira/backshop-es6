class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName}
${this.lastName}`;
  }
}

var person = new Person('John', 'Snow')

console.log(person.name);
