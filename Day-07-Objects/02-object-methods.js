//Activity 2: Object Methods

//Task 3:Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.
let bookObj = {
  title: "Sophies World",
  author: " Jostein Gaarder",
  year: 1995,
  details: function () {
    return this.title + this.author;
  },
};

console.log(bookObj.details());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let SecbookObj = {
  title: "Sophies World",
  author: " Jostein Gaarder",
  year: 1995,
  updateyear(year) {
    return (this.year = year);
  },
};

console.log(SecbookObj.updateyear(2000));
console.log(SecbookObj);
