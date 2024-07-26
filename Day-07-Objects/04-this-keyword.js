// Activity 4: The this keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let bookObj = {
  title: "Sophies World ",
  author: "Jostein Gaarder",
  year: 1995,
  returnData() {
    return this.title + this.year;
  },
};

console.log(bookObj.returnData());
