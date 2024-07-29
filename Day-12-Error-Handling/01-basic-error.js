//Activity 1:Basic Error Handling with Try-Catch

//Task 1 - Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function intetionalError(num) {
  try {
    if (num < 18) {
      throw new Error("Your age is below 18.");
    }
  } catch (error) {
    console.log(`Error dekh ye:- ${error}`);
  }
}

console.log(intetionalError(17));

//Task 2:Create a function that divides two numbers and throws an error if the denominator is zero.

function divideTwoNum(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Denominator can't be 0");
    }
    return num1 / num2;
  } catch (error) {
    console.error(`Error dekho ${error.message}`);
    return null;
  }
}

console.log(divideTwoNum(10, 2));
console.log(divideTwoNum(5, 0));
