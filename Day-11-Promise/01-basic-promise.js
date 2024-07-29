//Activity - 1

//Task-1: Create a promise that resolves with a message after a 2-sec timout and log the result to the console.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved");
  }, 2000);
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 2 :Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am error");
  }, 2000);
});

promise2
  .then((res) => console.log(res))
  .catch((error) => console.log(`Error is this: ${error} `));
