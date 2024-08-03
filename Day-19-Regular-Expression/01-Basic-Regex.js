// Activity 1: Basic Regular Expressions

//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

{
  let str = "I love JavaScript. But JavaScript hates me";
  let regex = /JavaScript/g;
  let match = str.match(regex);
  console.log(match);
}
//Task 2: Write a regular expression to match all digits in a string. Log the matches.
let digitStr = "I am 1 100 percet sure that 2 of them are 3";
let regex = /\d+/g;
let match = digitStr.match(regex);
console.log(match);
