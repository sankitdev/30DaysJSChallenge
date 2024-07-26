//Task 5: Use spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7, 8, 9, 10];
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...num) {
  //   let arr = [...num];
  return num.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
