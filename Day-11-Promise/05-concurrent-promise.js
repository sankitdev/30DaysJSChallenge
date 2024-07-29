//Activity 5:Concurrent Promises

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = Promise.resolve(3);
const promise2 = 69; //this is not a prmoise so it will be resolved immidietly
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(`Error aya: ${error}`);
  });
//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promise4 = new Promise((resolve) => {
  setTimeout(resolve, 200, "First");
});
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, "second"));

Promise.race([promise4, promise5])
  .then((data) => console.log(data))
  .catch((err) => console.log(`Dekh error: ${err}`));
