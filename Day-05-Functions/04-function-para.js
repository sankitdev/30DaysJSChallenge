//Activity 4:Function Parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

function productOfTwo(num1, num2 = 5) {
  return num1 * num2;
}

console.log(productOfTwo(5, 6)); //if given second argument the default value will be negleted

//Task 8: Write a function that takes a persons name and age and returns a greeting message. Provide a default value for the age

let greetingMsg = (name, age = 18) =>
  "Hello There " + name + " you are " + age + " years old";
console.log(greetingMsg("Alex"));
