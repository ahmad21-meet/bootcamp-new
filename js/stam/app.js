const form = document.querySelector('#signup-form');
const name_s = document.querySelector('#name');
const age = document.querySelector("#age");
const emil = document.querySelector("#emil");

var fullName = name_s.value;
var emailAddress = emil.value;



form.addEventListener('submit', function(e) {

console.log(fullName);
console.log("HAmad");


	e.preventDefault(); //stops the request from being sent (prevents page reload)
});



