//Task 8: Use enhanced object literal to create an object with methods and properties, and log the object to the console.

//Task 9: Create an object with computed property names based on variables and log the object to the console.

const name = "Rob";
const age = 5;
const propName = "favoriteColor";
const obj = {
  name,
  age,
  [propName]: "red",
  greet() {
    console.log(`hello  there ${name}`);
  },
};

console.log(obj);
