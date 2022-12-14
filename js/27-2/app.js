const myarr = 'Call the functions once with an array of words and call it once'
const myarr2 =myarr.split(' ');
// myarr2.push(1)
// console.log(myarr2);



const makeAllCaps = (arr) => {
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
         const isStrings = (e) => typeof e ==='string' ;
         if(arr.every(isStrings) && Array.isArray(arr)){
            let arr2 = arr.map(e=>e.toUpperCase())
            resolve({status:200, code: 'UpperCased',arr2})
         }
         reject({status:404, code: 'rejected'})
      },2000);
   });
};

function sortWords(arr){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(Array.isArray(arr)){
            let arr3 = arr.sort()
            resolve({arr3,status:200, code: 'Sorted'})
         }
         reject({status:404, code: 'rejected'})
      },2000)
   })
};

makeAllCaps(myarr2)
.then((res) => {
      console.log(res.arr2);
      console.log(res.status);
      console.log(res.code);
      console.log('Array contains strings only');
      return sortWords(res.arr2)
   })
   .then((res)=>{
      console.log(res.arr3);
      console.log(res.status);
      console.log(res.code);
   })
   .catch((rej) => {
      console.log(rej.status);
      console.log(rej.code);
      console.log('Array contains element other than strings');
   })