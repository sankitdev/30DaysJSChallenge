// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

{
  let pass = "Goku1@";
  let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/;
  if (regex.test(pass)) {
    console.log("Password is Valid");
  } else {
    console.log("Password is not in correct format");
  }
}
//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

{
  let url =
    "https://www.example.com:8080/path/to/resource?query=string#fragment";
  let regex =
    /^(https?:\/\/)?([\w-]+\.)+[\w-]+(:\d+)?(\/[\w\-\.]*)*(\?[;&=\w\d]*)?(#[\w\d]*)?$/i;

  if (regex.test(url)) {
    console.log("URL is valid");
  } else {
    console.log("URL is not valid");
  }
}
