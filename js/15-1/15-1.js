

function getSum(arr1,arr2){
      let sum = 0; // change to let because its Assignment to constant variable.
    for (var i=0; i < arr1.length; i++){ 
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum(arr1=[1,2,3], arr2=[5,66,23]); // not declare correct 
    // i used debugger method 
    // the big was that the array is not declare correct