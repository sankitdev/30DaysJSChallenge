//Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
  upadteAge(newAge) {
    this.age = newAge;
    console.log(`My age is ${this.age}`);
  }
}

const person1 = new Person("Goku", 25);
person1.greet();
person1.upadteAge(256);
