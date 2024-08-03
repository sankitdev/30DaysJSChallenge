// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
{
  let str = "Hello World ";
  let regex = /^Hello/g;
  let match = str.match(regex);
  console.log(match);
}

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
{
  let str = "World Hello";
  let regex = /Hello$/g;
  let match = str.match(regex);
  console.log(match);
}
