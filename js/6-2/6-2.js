


//For each of the questions below, answer the questions with this
//array:

//const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.


const people = ["Greg", "Mary", "Devon", "James"];

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
    
}



// 2. Write the command to remove "Greg" from the array.
people.shift();

console.log(people);




// 3. Write the command to remove "James" from the array.

people.pop();
console.log(people);

// 4. Write the command to add "Matt" to the front of the array.

people.unshift("Matt");
console.log(people);



//5. Write the command to add your name to the end of the array.
people.push("Ahmad");
console.log(people);


//6. Using a loop, iterate through this array, and after  console.log "Mary", exit from the loop.

for (let index = 0; index < people.length-2; index++) {
    const element = people[index];

    console.log(element);

    
}

/*
7. Write the command to make a copy of the array using a
slice. The copy should NOT include "Mary" or "Matt".
*/

let copy_Array = people.slice(0,2);
console.log(copy_Array);






/*
8. Write the command that gives the indexOf where "Mary"
is located.
*/ 

console.log(people.indexOf('Mary'));


/*

9. Write the command that gives the indexOf where "Foo" is
located (this should return -1).
 */
console.log(people.indexOf('Foo'));


/*
10. Redefine the people variable with the value you started
with. Using the splice command, remove "Devon" from
*/


let copy_Array_2= people.slice(0,4);
copy_Array_2.splice(2,1);
console.log(copy_Array_2);






