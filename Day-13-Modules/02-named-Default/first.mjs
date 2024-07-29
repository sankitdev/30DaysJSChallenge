//Activity 2 : Named and Default Export

//Task 3: Create a module that exports multiple functions using named exports.Import and use these functions in another script.

export function greet(name) {
  return `Hello ${name}`;
}

export const sum = (a, b) => {
  return a + b;
};

//Task 4: Create a module that exports a single function using deafutl export. Import and use this function in another script.

const singleExport = (a, b) => {
  return a * b;
};

export default singleExport;
