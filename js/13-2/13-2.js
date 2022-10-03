const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];
foods.sort();
console.log(foods);
console.log("--------------------------");

foods.reverse();
console.log(foods);
console.log("--------------------------");



const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

foodsWithUpperCase.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(foodsWithUpperCase);
console.log("--------------------------");

foodsWithUpperCase.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
console.log(foodsWithUpperCase);

console.log("--------------------------");


const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"]

words.sort((a, b) => b.length - a.length);

console.log(words);
