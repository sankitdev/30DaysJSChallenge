// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("username", "Goku");
let result = sessionStorage.getItem("username");
console.log(result);
// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let user = {
  name: "GokuSan",
  age: 24,
  occupation: "Saiyan Warrior",
};

sessionStorage.setItem("data", JSON.stringify(user));
let getData = sessionStorage.getItem("data");
console.log(JSON.parse(getData));
