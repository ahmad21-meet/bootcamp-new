
const rec = (n) => {
    for(let i = 1; i<=n; i++){   
        if(i==7 &&  i % 7 === 0 ){
            i++;
            console.log("BOOM-BOOM")
        }
       else if( i % 7 ===0){
        i++;
            console.log("BOOM");
        }

        console.log(i);

    }

}
rec(18);