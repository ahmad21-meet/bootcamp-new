let numSiblings = prompt("How many siblings do you have?");

if(numSiblings==1){
    document.getElementById("stam").innerHTML =" you have 1 sibling";
    console.log("1 sibling");
}
else if( numSiblings >1){
    document.getElementById("stam").innerHTML =" you more  have than  1 sibling";

    console.log("more than 1 siblings");
}

else {
    document.getElementById("stam").innerHTML =" you dont have any siblings";

    console.log("no siblings");
}