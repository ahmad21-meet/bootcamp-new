function percentageOfWorld1( country , countpeople , population) {

    let poll = population/7900;
    let sum = poll *100;

    console.log(`${country} has ${countpeople} million people , so its about ${sum.toFixed(1)}% of the world population `);


}
percentageOfWorld1("china",1441 , 25000);
percentageOfWorld1("spain",120 , 2510);
percentageOfWorld1("german",20 , 3000);

const percentageOfWorld2 = (country , countpeople , population) =>{

    let poll = population/7900;
    let sum = poll *100;

    console.log(`${country} has ${countpeople} million people , so its about ${sum.toFixed(1)}% of the world population `);

    
}

percentageOfWorld2("holand",304 , 910);
percentageOfWorld2("jordan",8 , 510);
percentageOfWorld2("poland",401 , 3200);
