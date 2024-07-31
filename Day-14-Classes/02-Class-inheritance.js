//Activity 2 : Class Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.stundentId = studentId;
  }
  greet() {
    console.log(`Hello ${this.name}, your student Id is ${this.stundentId}`);
  }
}

const newStudent = new Student("Saitama", 25, 8);
newStudent.greet();
