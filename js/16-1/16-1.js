// the a will not print because it is undfined they should be before the log
// it will return undefind and 2 , 2 if foo
// how to can fix it we should but the var a before log 

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
    funcA();

console.log("--------------------------------");

// the result will be  the fullname of the prop (Aurelio De Rosa)
// and the test will Jhon Doe why bec we go to obj to prop and we get the full name its back to the original name
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());


console.log("-------------------------");

// a declaring using let , its just scoped for the func
// b declaring globlay not local so b its type of number
// but a in not defined bec its local just in func

function funcB() {
    let a = b = 0;
    a++;
    return  a;
    }
    funcB();
    console.log(typeof a); // out put not defined
    console.log(typeof b); // output number

console.log("---------------------");

// it will return 2 ,2  why bec we  call the func twice and in the seconde time 
// we but log(2) , so it will log 2 twice 

function funcC() {
    console.log("1"); // output 2
    }
    funcC();
    function funcC() {
    console.log("2"); // output 2
    }
    funcC();
    
    console.log("---------------------");

    // it will return error bec e is not defined why bec the,
    // is  scoped its just for the func  and we cant use it out of it 
    // we should remove the var and make the element just declaring make it global not local 
    function funcD1() {
       d = 1;
        }
        funcD1();

        console.log(d); // 1
        function funcD2() {
          var e = 1; // remove the var
        }
        funcD2();
        console.log(e); // error

        
        console.log("---------------------");


       // f is not defined in the func bec we didint have f we should but it above the func
       // but f is defined out of the func bec we declaring it using var 
       // so the output will be 1 
       
        function funcE() {
            console.log("Value of f in local scope: ", f); // undefined
            }
            console.log("Value of f in global scope: ", f); // 1
            var f = 1;
            funcE();