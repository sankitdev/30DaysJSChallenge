//Activity 3:Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      title: "1984",
      author: "George Orwell",
    },
    {
      title: "The Great Gatsby",
      author: "IDK",
    },
  ],
};

console.log(library);

//Task 6: Access and log the name of the library and titles of all the books in the library.

console.log(library.name);
library.books.forEach((items) => console.log(items.title));
