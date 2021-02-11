function myFirstFunction() {
    return "Hello";
}

const myVariableFunction = () => {
    console.log("Hello")
};

// callback functions


const sayHi = () => {
    return console.log("Hi");
}

function sayHilater2(anyFunctionReference) {
    anyFunctionReference();
}

sayHiLater(sayHi());

//hoisting 


