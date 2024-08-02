// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function addArr(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + addArr(arr.slice(1));
}

// console.log(addArr([1, 2, 3, 4, 5]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxNum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let maxOfRest = maxNum(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
console.log(maxNum([1, 2, 3, 4, 5]));
console.log(maxNum([10]));
console.log(maxNum([3, 7, 4, 6]));
