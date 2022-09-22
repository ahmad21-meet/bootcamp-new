const  lock = (voters) => {
    for (let i = 0; i < voters; i++) {
       console.log((`Voter number ${i} is currently voting`));
    }
    
}
lock(51);

