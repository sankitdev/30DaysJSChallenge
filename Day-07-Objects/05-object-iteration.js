//Activity 5: Object Iteration
//Task 8 : Use a for..in loop to iterate over the properties of the book object and log each property and its value.

let bookObj = {
  title: "Sophies World",
  author: "Jostein Gaarder",
  year: 1995,
};

for (const key in bookObj) {
  if (Object.hasOwnProperty.call(bookObj, key)) {
    const element = bookObj[key];
    console.log(element);
  }
}
//Task 9 : Use Object.keys and Object.values method to log all the keys and values of the book object.
let keys = Object.keys(bookObj);
let values = Object.values(bookObj);
console.log(keys + values);
