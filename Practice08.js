//Q1
function multiply(x,y) {
    return x*y;
}
console.log("3*2 = " + multiply(3,2));

//Q2
function isEven(num) {
    return (num % 2) === 0;
}
console.log("26 is even? " + isEven(26));

//Q3
const subtract = function(a,b) {
    return a-b;
}
const difference = subtract;
console.log("52-30 = " + difference(52,30));

//Q4
greeting = function(name) {
    return `Hello, ${name}!`;
}
console.log("Greet John: " + greeting("John"));

//Q5
function calculate(x,y) {
    const calc = function(x,y){return (x+y)**2};
    return calc(x,y);
}
console.log("Square of the sum of 2 and 3: " + calculate(2,3));

//Q6
function average(num1,num2,num3) {
    const avg = function(num1,num2,num3) {return (num1 + num2 + num3) / 3};
    return avg(num1,num2,num3);
}
console.log("Average of 8, 10, 12: " + average(8,10,12));

//Q7
const multiplyNumbers = (a,b) => a*b;
console.log("10*12= " + multiplyNumbers(10,12));

//Q8
const greet = (name) => `Hello ${name}`;
console.log("Greet James: " + greet("James"));

//Q9
const square = (x) => x*x;
console.log("Square of 8: " + square(8));

//Q10
const isEvenNumber = (num) => num % 2 === 0;
console.log("173 is even? " + isEvenNumber(173));

//Q11
const findMax = (numbers) => Math.max(...numbers);
console.log("Max of {8, 9, 10, 3, 5}: " + findMax([8,9,10,3,5]));

//Q12
const addTwoNumbers = (a,b) => a + b;
console.log("126 + 200 = " + addTwoNumbers(126,200));