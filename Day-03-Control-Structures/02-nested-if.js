//Activity 2
// Task 3 - Write a program to find the largest of three numbers using nested if-else statements

let num1 = 5,
  num2 = 4,
  num3 = 2;
if (num1 >= num2) {
  if (num1 >= num3) {
    console.log("Largerst number is:-", num1);
  } else {
    console.log("Largest number is:-", num3);
  }
} else {
  if (num2 >= num3) {
    console.log("Largest number is:-", num2);
  } else {
    console.log("Largest number is:-", num3);
  }
}
