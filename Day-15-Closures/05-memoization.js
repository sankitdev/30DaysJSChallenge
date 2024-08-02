//Activity 5: Memoization

//Task 7 : Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    console.log(key);

    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

function add(a, b) {
  console.log("Calculating...");
  return a + b;
}

const memoizedAdd = memoize(add);

// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(4, 5));

//Task 8:Create a memoized version of a function that calculates the factorial of a number.

function factorial(n, memo = {}) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
}

console.log(factorial(5));
