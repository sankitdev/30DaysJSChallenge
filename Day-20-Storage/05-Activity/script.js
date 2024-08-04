// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage.Retrieve and log the values from both storage mechanisms.

function obj(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  const localValue = localStorage.getItem("data");
  const sessionValue = sessionStorage.getItem("data");
  if (localValue !== null && sessionValue !== null) {
    console.log("localStorage", localValue);
    console.log("SessionStorage", sessionValue);
  } else {
    console.log("Data not fetched");
  }
}

let value = {
  user: "Gon",
  friedWith: "Killua",
};
let conversion = JSON.stringify(value);
obj("data", conversion);

//Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clear() {
  localStorage.clear();
  sessionStorage.clear();
  if (localStorage.length == 0 && sessionStorage.length == 0) {
    console.log("LocalStorage and Session Storage are empty");
  } else {
    console.log("Failed to clear the storages");
  }
}

clear();
