//Task 7:Write a function that takes two parameters and returns their product, with the second parameter having a default value of.

function product(a, b = 1) {
  return a * b;
}

console.log(product(5));
console.log(product(5, 6));
