import * as Operator from "./first.mjs";

try {
  const add = Operator.sum(5, 6);
  console.log(add);
  const sub = Operator.sub(5, 6);
  console.log(sub);
  const multiply = Operator.multiply(5, 6);
  console.log(multiply);
  const divide = Operator.divide(5, 6);
  console.log(divide);
  console.log(Operator.test);
} catch (error) {
  console.error("Error:", error.message);
}
