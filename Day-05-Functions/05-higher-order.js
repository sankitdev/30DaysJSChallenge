//Activity 5: Higher Order Functions

//Task 9: Write a higher-order function that takes a function and a number,and calls the function that many times
let higherOrder = function (secondfun, num) {
  for (let i = 1; i <= num; i++) {
    secondfun();
  }
};

let sayMyName = function () {
  console.log("Light Yagami");
};
console.log(higherOrder(sayMyName, 2));

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second funciton to the result.

let anotherHigherOrder = function (func1, func2, value) {
  let result = func1(value);
  let finalResult = func2(result);
  return finalResult;
};

let func1 = function (value) {
  let result = 3 + value;
  return result;
};

let func2 = function (result) {
  return result * 3;
};

console.log(anotherHigherOrder(func1, func2, 5));
