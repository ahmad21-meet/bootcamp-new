const nums =[85,45,54,102,46,7,100];
const product = nums.reduce((max ,currentVal) => {
if(currentVal > max) return currentVal;
return max;
})



const mol = [2,4,6,8]
const sum = mol.reduce((acc ,currVal) => {
    if(acc %2==0){
return acc + currVal;
    }

})


const arr = [1, 2, 3,2 ,4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);


