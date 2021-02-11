// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

console.log(`he letter at index 1: ${letters[1]}`);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];


// What a lonely array. Add at least 3 friend objects to it.  

friends.push(
    { friend1: "Christian" },
    { friend2: "Jeppe" },
    { friend3: "Signe" }
);

console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log(`Index of value 1729 is: ${significantMathNumbers.indexOf(1729)}`);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket


diet.splice(2, 0, "hamburger", "soda", "pizza");
console.log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop();

console.log(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

dinnerTray = [...diet];

console.log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

const everySecond = [];

const letters2 = function (array) {
    for (i = 1; i <= array.length - 1; i += 2) {
        everySecond.push(array[i])
    }
    console.log(`Every second element of array: ${everySecond}`);
}

letters2(lettersExpanded);


// 
// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];


// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

var numbers2 = function (array) {
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] > 6 || array[i] < 0) {
            discardedNumbers.push(array[i]);
        }
    }
    console.log(`Discarded numbers: ${discardedNumbers}`);
}
numbers2(numbers);

// --------------------------------------