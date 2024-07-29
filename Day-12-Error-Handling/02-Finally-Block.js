//Activity 2 - Finally Block

//Task 3 - Write a script that includes a try-catch block and a finally block.Log message in the try,catch, and finally blocks to observe the execution flow.

function testing() {
  try {
    console.log("I am in try block");
    throw new Error("I am error");
  } catch (error) {
    console.log("I am error");
    console.error(`Error Dekho:- ${error.message}`);
  } finally {
    console.log("I am final block");
  }
}

testing();
