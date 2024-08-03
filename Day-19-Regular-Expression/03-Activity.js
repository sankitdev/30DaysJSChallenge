// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

{
  let phoneNumber = "(123) 456-7890";
  let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

  let matches = phoneNumber.match(regex);
  console.log(matches);
}
// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "goku@gmail.com";
let regex = /^([\w.%+-]+)@([\w.-]+\.[A-Za-z]{2,})$/;
let match = email.match(regex);
console.log(match);
