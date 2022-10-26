var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b; // 5
}
b = 5;
return otherFunction; // 5
}
var firstResult = someFunction(9); // it will return 5 
var result = firstResult(2); // it will return 5
console.log("------------------------");

var a = 1;
function b2() {
a = 10;
return;
function a() { }
}

 b2();//  he will return undefined
console.log(a); // return 1


let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
// he will return 3 , 3 ,3 