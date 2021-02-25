// functional looping methods are preferred
// such as map, reduce, filter, find etc...diet

const fruits = ["apples", "banana", "blueberries"];

// use map to print out fruits

// fruits.map(fruit => console.log(fruit));

const copiedFruits = fruits.map((fruit, index) => {
    return { id: index + 1, fruit, delicious: "yes, yes yes" };
});

console.log(copiedFruits);
