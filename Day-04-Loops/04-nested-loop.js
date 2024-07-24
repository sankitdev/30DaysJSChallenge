//Activity 4:Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
let star;
for (let i = 1; i <= 5; i++) {
  star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
