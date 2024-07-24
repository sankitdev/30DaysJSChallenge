//Activity 3 : Arrow Function

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result

let sumOfTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(sumOfTwo(5, 6));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let str = "Apple";
let checkChar = (char) => {
  return str.includes(char);
};

console.log(checkChar("B"));
