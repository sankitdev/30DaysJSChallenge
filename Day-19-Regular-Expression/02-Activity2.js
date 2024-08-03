// Activity 2: Character Classes and Quantifiers

//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
{
  let str =
    "Think Of How Stupid The Average Person Is and Realize Half Of Them Are Stupider Than That";

  let regex = /\b[A-Z][a-z]*/g;
  let match = str.match(regex);
  console.log(match);
}

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
{
  let strWithNum = "I have 3 apples, 25 oranges, and 123 bananas.";
  let regex = /\d+/g;
  let match = strWithNum.match(regex);
  console.log(match);
}
