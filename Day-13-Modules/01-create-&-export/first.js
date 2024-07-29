//Activity-1:Creating and Exporting Modules

//Task 1:Create a module that exports a function to add two numbers. Import and use this module in another Script.

function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(`Both arguments must be numbers`);
  }
  return a + b;
}

module.exports = addNumbers; //using common Js module

//Task 2: Create a module that exports an object represeting a person with properties and methods. Import and use this module in another script.

let obj = {
  name: "Goku",
  work: "grandpa",
  greet() {
    console.log("Hello grandpa Goku");
  },
};

module.exports = obj;
