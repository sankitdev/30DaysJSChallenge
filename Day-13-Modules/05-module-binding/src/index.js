//Activity 5: Module Bundling

//Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

import { greet } from "./greet";

try {
  let response = greet("Goku");
  console.log(response);
} catch (error) {
  console.error(error);
}
