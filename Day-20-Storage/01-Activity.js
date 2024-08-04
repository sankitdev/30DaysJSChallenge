// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

localStorage.setItem("username", "GokuSan");
let savedData = localStorage.getItem("username");
console.log(savedData);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let user = {
  name: "GokuSan",
  age: 24,
  occupation: "Saiyan Warrior",
};

localStorage.setItem("user", JSON.stringify(user));
let retrieveUser = localStorage.getItem("user");
console.log(JSON.parse(retrieveUser));
