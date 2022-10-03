

const req = (food , food1) =>{

    for(let i =0; i<food.length;i++){
        for(let j =0; j<food1.length;j++){
            if(food[i]== food1[j]){
                console.log(`this items ${food[i]} ,, ${food1[j]} is equal`);
            }
 

            }
        }
    }


req(food =["Fries", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"] ,food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"] )
