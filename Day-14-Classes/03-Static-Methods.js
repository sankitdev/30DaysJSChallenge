//Activity 3: Static Methods and Properties

//Task 5: Add a static method to the Person class that returns ageneric greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
  static generic() {
    return `Hello there`;
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
console.log(Person.generic());

//Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.stundentId = studentId;
    Student.studentCount++;
  }

  static logStudentCount() {
    console.log(`Total number of students: ${Student.studentCount}`);
  }
  greet() {
    console.log(`Hello ${this.name}, your student Id is ${this.stundentId}`);
  }
}

const student1 = new Student("Alice");
const student2 = new Student("Bob");
const student3 = new Student("Charlie");
Student.logStudentCount();
