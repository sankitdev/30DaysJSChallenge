const addNumbers = require("./first");
const obj = require("./first");

//Task 1
try {
  const result = addNumbers(5, "a");
  console.log(`${result}`);
} catch (error) {
  console.log(`Error is here:- ${error}`);
}

//Task 2
console.log(obj);
