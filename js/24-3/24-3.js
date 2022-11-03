//? 1. Build your own filter method with the help of prototypes
//* 1:

Array.prototype.myFilter = function filterFunc (callBack){
    const filterArr = [];
    for(let i = 0 ; i<this.length ; i++){
        let result = callBack(this[i],i,this);
        if(result){
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}

let arr = [1,2,3,4,5];
let res = arr.myFilter(element => {return element %2 ==0})
console.log(res);

//? 2. Build your own find method with the help of prototypes
//* 2:

Array.prototype.myFind = function FindFunc(callBack){
    for(let i = 0; i<this.length; i++){
        if(callBack(this[i],i,this)){
        return this[i];
    }
}
};

const array1 = [5,1,22,4];
let found =array1.myFind(element =>{return element>10});
console.log(found);


//? 3. Build your own map method with the help of prototypes
//* 3:

Array.prototype.myMap = function mapfunc(callback){
    const arr2 = [];
    for(let i =0;i<this.length ; i++){
        let result = callback(this[i],i,this);
    arr2.push(result)
    }
    return arr2;
};

const array2 = [5,254,12,4]
let map = array2.myMap(element =>{return element +1});
console.log(map);