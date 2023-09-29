
console.log("\r\n1. Counting even numbers from 2 to 10:");
for(let i = 2; i <= 10; i+= 2) {
    console.log(i);
}

console.log("\r\n2. Counting down from 5 to 1:")
for(let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("\r\n3. Summing numbers in an array:")
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(const num of numbers) {
    sum += num;
}
console.log(sum);

console.log("\r\n4. Printing properties of student");
const student = {
    name: 'John',
    age: 20,
    grade: 'A'
};
for(const key in student) {
    console.log(`${key}`);
}


console.log("\r\n5. Printing values of book");
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 1997
}
for(const key in book) {
    console.log(`${book[key]}`);
}

console.log("\r\n6. Printing colors in colors");
const colors = ['red','green','blue','yellow'];
for(const color in colors) {
    console.log(color);
}

console.log("\r\n7. Summing numbers in an array again:");
const numbers2 = [1, 2, 3, 4, 5];
sum = 0;
for(const num of numbers2) {
    sum += num;
}
console.log(sum);

console.log("\r\n8. Converting temperatures from Fahrenheit to Celsius:");
const temperatures = [32,68,75,82,56];
function f2c(temp) {
    console.log((temp-32)*5/9);
}
temperatures.forEach(f2c);

console.log("\r\n9. Printing populations of cities:");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
cities.forEach((city) => console.log(city + ": " + populations[city]));

console.log("\r\n10. Printing thai pattern:");
for(let i = 0; i < 5; i++) {
    let str = "";
    for(let j = 0; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}