//Activity 3:Importing Entire Modules

//Task 5: Create a module that exports multiple constant and functions. Import the entire module as an object in another script and use its properties.

export function sum(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}
export function modulo(a, b) {
  return a % b;
}

export const test = "test";
