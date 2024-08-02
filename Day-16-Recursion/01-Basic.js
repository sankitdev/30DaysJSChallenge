// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(20));

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function Fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(2));
console.log(Fibonacci(6));
