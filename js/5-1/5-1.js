const countryToLivein =(language, isIsland , population , country) => {

let count = 0;

if(language =="english"){
    count++;

    if(population < 50){
        count++;
    }
    if(isIsland == false){
        count++;
    }
}

if(count==3){
    console.log(`you should live in ${country}`);
}

else{
    console.log(`${country} dose not meet you`);
}

}
countryToLivein("english" , false , 40 , "spain");