// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my lastname is ${lastName}`);
// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021 
// You cannot touch line 1 or 2

const thisYear = parseInt(year) + number;

const currentYear = Number(year) + number;

console.log(thisYear);

console.log(currentYear);

console.log(+year + number);

// --------------------------------------

// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const num3 = Number(numberOne) + Number(numberTwo);

console.log(num3);

// --------------------------------------

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const num4 = Number(anotherNumberOne) + Number(anotherNumberTwo);
console.log(num4.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const num5 = (one + two + three) / 3;

console.log(num5.toFixed(5));

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("j", "J"));

// --------------------------------------
