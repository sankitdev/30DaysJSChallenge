// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
  let length = str.length;
  if (length <= 0) return str;
  return str[length - 1] + reverseString(str.slice(0, str.length - 1));
}

// console.log(reverseString("hello"));
// console.log(reverseString("world"));
// console.log(reverseString("a"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("a"));
console.log(isPalindrome(""));
