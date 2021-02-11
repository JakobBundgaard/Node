function myFirstFunction() {
    return "Hello";
}



const myVariableFunction = () => {
    console.log("Hello")
};

// callback functions




function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

const sayHi = () => {
    return console.log("Hi");
};

sayHiLater(sayHi);

//hoisting 

const sayHello = () => {
    return console.log("Hello there")
};

sayHiLater(sayHello);

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => "Poke" + name;


interact(poke, " Jake");

interact((name) => "Hug " + name, "Napster");

