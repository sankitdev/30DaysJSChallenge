//Activity 3:Do..While Loop

//Task 5: Write a program to print numbers from 1 to 5 using a do..while loop.

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//Task 6: Write a program to calculate the factorial of a number using a do..while loop.
let index = 5;
let result = 1;
do {
  result *= index;
  index--;
} while (index >= 1);
console.log(result);
