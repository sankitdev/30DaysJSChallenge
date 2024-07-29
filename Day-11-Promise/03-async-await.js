//Activity 3
//Task 4 : Write an async function that waits for a promise and then logs the resolved value.

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I am resolved");
  }, 2000);
});

async function PromiseLog() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// PromiseLog();

//Task5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am error");
  }, 2000);
});

async function rejectPromise() {
  try {
    const result = await promise2;
    console.log(result);
  } catch (error) {
    console.log(`Error hai ye:- ${error}`);
  }
}

rejectPromise();
