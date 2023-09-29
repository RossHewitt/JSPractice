//Q1
function multiply(x,y) {
    return x*y;
}

//Q2
function isEven(num) {
    return (num % 2) === 0;
}

//Q3
const subtract = function(a,b) {
    return a-b;
}
const difference = subtract;

//Q4
greeting = function(name) {
    return `Hello, ${name}!`;
}

//Q5
function calculate(x,y) {
    const calc = function(x,y){return (x+y)**2};
    return calc(x,y);
}

//Q6
function average(num1,num2,num3) {
    const avg = function(num1,num2,num3) {return (num1 + num2 + num3) / 3};
    return avg(num1,num2,num3);
}

//Q7-12
const multiplyNumbers = (a,b) => a*b;
const greet = (name) => `Hello ${name}`;
const square = (x) => x*x;
const areEven = (num) => num % 2 === 0;
const findMax = (numbers) => Math.max(numbers);
const addTwoNumbers = (a,b) => a + b;