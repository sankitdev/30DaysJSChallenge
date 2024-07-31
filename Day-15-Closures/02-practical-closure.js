//Activity 2: Practical Closures

//Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function randomId() {
  let num = 1;
  return function () {
    return num++;
  };
}

let firstRand = randomId();
console.log(firstRand());
console.log(firstRand());

//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(str) {
  return function () {
    return `Hello ${str}`;
  };
}

let greet = greetUser("General");
// console.log(greet());
