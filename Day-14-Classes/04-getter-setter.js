// Activity 4: Getters and Setters

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastname property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const person = new Person("Goku", "Kakarrot");

//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name

console.log(person.fullName);
console.log((person.fullName = "Anne Frank"));
