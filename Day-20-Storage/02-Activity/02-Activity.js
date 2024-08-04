// Activity 2: Using LocalStorage

//Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

const form = document.querySelector("form");
const data = {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (const [key, value] of formData) {
    data[key] = value;
  }
  localStorage.setItem("data", JSON.stringify(data));

  //   console.log(data);
});

document.addEventListener("DOMContentLoaded", () => {
  let savedData = localStorage.getItem("data");
  if (savedData) {
    let formObject = JSON.parse(savedData);
    console.log("Retrieve Data: ", formObject);
    document.querySelector("#username").value = formObject.username || "";
    document.querySelector("#email").value = formObject.email || "";
    document.querySelector("#pass").value = formObject.pass || "";
  } else {
    console.log("No Data Found");
  }
});

//Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
let result = localStorage.getItem("data");
console.log(result);
let remove = localStorage.removeItem("data");
console.log(remove);
