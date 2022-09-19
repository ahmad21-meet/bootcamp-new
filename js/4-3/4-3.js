let john_team = 89 + 120 + 103;
let john_avg = john_team/3;

let mike_team = 116 + 94 + 123; 
let mike_avg = mike_team/3;


let mary_team = 97 + 134 + 105; //336
let mary_avg = mary_team/3;




if(john_avg > mike_avg && john_avg > mary_avg){
    console.log(" john team win ");
}

else if ( mike_avg > mary_avg){
    console.log(" mike team win");
}
else if (mary_avg > mike_avg ) {
    console.log("mary team win");
}

else {
    console.log("draw");
}
