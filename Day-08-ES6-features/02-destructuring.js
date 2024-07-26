//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = arr;
console.log(first, second, third);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to console.
let bookObj = {
  title: "Sophies World",
  author: "Jostein Gaarder",
  year: 1995,
};

const { title, author, year } = bookObj;
console.log(title, author, year);
