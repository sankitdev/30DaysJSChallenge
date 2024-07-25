//Activity 3:Array Methods (Intermediate)

let arr = [1, 2, 3, 4, 5];
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let map = arr.map((values) => values * 2);
console.log(map);
//Task 8: Use the filter method to create a new array with only even number and log the new array.
let filter = arr.filter((values) => values % 2 === 0);
console.log(filter);
//Task 9: Use the reduced method to calculate the sum of all number in the array and log the result.
let reduce = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(reduce);
