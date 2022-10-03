const listOfNeighbors = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

    for (let i  =  0;  i < listOfNeighbors.length;  i++)  {
           const element = listOfNeighbors[i];

           for(let j = 0 ; j<element.length; j++){
            console.log("Neighbors :" , element[j]);
           }

    } 