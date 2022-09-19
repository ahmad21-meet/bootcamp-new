 const leap =(year) => {
    let count = 0;
    let diz = year/4;
    let bill = year/100;
    let lock = year/400;

    if(Number.isInteger(diz) == true && Number.isInteger(bill) == false){
        console.log(`the  year ${year} is leap year`);
    }
    else if( Number.isInteger(diz) == true && Number.isInteger(lock) == true){
        console.log(`the year ${year} is leap year`);
    }

    else{
        console.log(`The year ${year} is not leap year`);
    }


 }

 leap(2020);