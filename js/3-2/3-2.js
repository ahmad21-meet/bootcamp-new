// From function declarations to explicit and implicit return functions (one of each).


function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}

const welcome_a = { return: 'Welcome to Appleseeds Bootcamp!'};


___________________________________________________________
function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

const power_a = (a) (Math.pow(a , 2));


___________________________________________________________

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

(function(a){
    Math.sqrt(a);

})
___________________________________________________________


const randomNumbers = (a, b) => Math.random() * (a - b) +b;

(function(a,b){
    Math.random() * (a - b) +b;
     
})