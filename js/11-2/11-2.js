const numbers =[1,5,8,2,7,3];
const myArr = [];
const doubles = numbers.map(function (double) {
    myArr.push(double *2);
})

console.log(myArr);
const justEven = [];
const onlyEvenValues = numbers.forEach(function (even) {
    if(even%2 ==0){
        justEven.push(even);
    }
  
}
)
console.log(justEven);


