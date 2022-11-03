const obj1={
    name:'Ahmad',
    Last:'Muhtaseb',
    gender:'male',
    age:18,
    livesIn:'JERS'
 }
 const obj2={};
 const objectIteration=(obj)=>{
    for(let key in obj){
       obj2[obj[key]]=key;
    }
    return obj2;
 }
 console.log(objectIteration(obj1));