var x = 10;
console.log(x);
if (true) {
var x = 20;
console.log(x);
}
console.log(x);


console.log("________________");





var x = 10;
 console.log(x);
 if (true) {
 (function() {
  var x = 20;
   console.log(x);
  })();
}
  console.log(x);

  console.log("________________");

  var x = 10;
  console.log(x);
  function test(){
  var x = 20;
  console.log(x);
  if (x > 10) {
  let x = 30;
  console.log(x);
  }
  console.log(x);
  }
  test();
  console.log(x)

  console.log("________________");

  var x;
  x = 10;
  function test(){
  var x;
  if (x > 20) {
  x = 50;
  }
  console.log(x);
}
test();

console.log("________________");


function test(){
    var x, y;
    if (false) {
    x = 50;
    }
    console.log(x);
    console.log(y);
    y = 100;
    console.log(y);
    }
    test();

    console.log("________________");

    console.log("________________");

    function tell(){
        foo();
        bar();
        // Function defiened
        // using function declaration
        function foo(){
        console.log('foo');
        }
        // Function defined
        // using function expression
        var bar = function() {
        console.log('bar');
        }
        }

        tell();
