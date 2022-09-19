
const timeing =() => {

let dayName = new Date().toLocaleDateString('en-us', { weekday:"long"})
let dateName = new Date().getDate();
let monthName = new Date().toLocaleDateString('en-us', { month:"long"})
let year = new Date().getFullYear();

console.log(` Today is ${dayName} the ${dateName} of ${monthName} ${year}`);

}
timeing();