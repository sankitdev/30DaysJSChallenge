//Activity 3: Switch Case

//Task 4 - Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let num = 3;
switch (num) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Wrong value entered, Enter only 1-7");
    break;
}

//Task 5: Write a program that uses a switch case to assign a grade ("A","B","C","D","F") based on a score and log the grade to the console.
let grade;
let score = 50;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score < 90 && score >= 75:
    grade = "B";
    break;
  case score < 75 && score >= 50:
    grade = "C";
    break;
  case score < 50 && score >= 35:
    grade = "D";
    break;
  case score < 35:
    grade = "F";
    break;
}

console.log("Your Grade is :-", grade);
