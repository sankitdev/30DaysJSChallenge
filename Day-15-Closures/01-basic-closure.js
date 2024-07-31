//Activity 1:Understanding Closure

//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
  let fruit = "Apple";
  function innerfn() {
    console.log(fruit);
  }
  return innerfn;
}

const myinnerFn = outerFunction();
// console.log(myinnerFn());

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value for the counter.

function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());
