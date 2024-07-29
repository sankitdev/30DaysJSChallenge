//Activity 4: Error Handling in Prmoise

//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise = new Promise((resolve, reject) => {
  const isSucess = Math.random() > 0.5;
  if (isSucess) {
    resolve("I am resolved");
  } else {
    reject("I am reject");
  }
});
promise
  .then((res) => console.log(res))
  .catch((err) => console.log(`Errror hai ye :- ${err}`));

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const isSucess = Math.random() > 0.5;
    if (isSucess) {
      resolve("I am resolved");
    } else {
      reject("I am rejected");
    }
  });
};

const handleAsync = async () => {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error(`Error:${error}`);
  }
};

handleAsync();
