/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
_______________________________________________
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }
    welcome();

    const welcome_a = () => "Welcome to Appleseeds Bootcamp!";



___________________________________________________

    function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    }

    const powern = (a) => {

        let resultn = Math.pow(a, 2)

        return resultn;

    }
    powern(5);


_______________________________________________
    function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }


    const addn = (l , k = 5) => {

        let myNumbern = l;
        let sumn = myNumbern + k;
        return sumn;    }






    // From function expressions to function declarations
    const hello = () => "Hello!";

    function hellon() {
        let we = 'Hello ';
        return we;
        }

____________________________________________________


    const squareRoot = a => Math.sqrt(a);

    

    function squareRootn (a){
        let c = Math.sqrt(a);
        return c;
    }



________________________________________________________________
    const randomNumbers = (a, b) => Math.random() * (a - b) + b;

    function randomNumbersn (a ,b) {

        let summ = Math.random() * (a-b) + b;

        return summ;
    }

