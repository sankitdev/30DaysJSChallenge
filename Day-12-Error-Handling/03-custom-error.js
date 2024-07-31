//Activity 3

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }

  customError() {
    return `${this.message}`;
  }
}

function riskyFunction() {
  throw new CustomError("Something went wrong");
}

try {
  riskyFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.log(error.customError());
  } else {
    console.log("An unknown error occurred:", error.message);
  }
}

//Task 5: Write a function that validates user input(e.g.,checking if a string is not empty) and throws a custom error if the validation fails.

function isValidatesUser(str) {
  typeof str === "string" && str.trim !== "";
}

try {
  console.log(isValidatesUser(5));
} catch (error) {
  if (error instanceof CustomError) {
    console.log(error.CustomError);
  }
}
