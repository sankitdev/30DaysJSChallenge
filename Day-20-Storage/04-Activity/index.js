// Activity 4: Using SessionStorage

//Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
const form = document.querySelector("form");
let data = {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getData = new FormData(e.target);
  for (const [key, value] of getData) {
    data[key] = value;
  }
  console.log(data);
  sessionStorage.setItem("FormData", JSON.stringify(data));
});

document.addEventListener("DOMContentLoaded", () => {
  let getData = sessionStorage.getItem("FormData");
  let result = JSON.parse(getData);
  document.querySelector("#username").value = result?.text || "";
  document.querySelector("#email").value = result?.email || "";
  document.querySelector("#pass").value = result?.pass || "";
});
//Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage.getItem("FormData"));
sessionStorage.removeItem("FormData");
