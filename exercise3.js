function calculateSum(a, b) {
  return a + b;
}
var num1 = parseFloat(prompt("1st no: "));
var num2 = parseFloat(prompt("2nd no: "));
const sum = calculateSum(num1,num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
