const checkpass =(password) =>{

    if(password.length > 7){
        console.log("Strong");
    }
    else {
        console.log("Weak");
    }

}
checkpass("a4444444234");



// _________________________________________
const checkpass_2 = (password) =>{

    password.length == 7 ? console.log("strong") : console.log("weak");

}
checkpass_2("222")
// ______________________________________________

const checkpass_3 = (password) =>{
    if(password.length >7 && password.length != 7){
        console.log("STrong");
    }
    else{
        console.log("weak");
    }
}
checkpass_3("ahmadxd222222");


//________________________________________________

const advance =(password) => {
    let count =0;
    let st = 0;
    for( let i = 0 ; i<password.length ; i++){
     
        if( password.length > 7 &&password.charAt(i) == password.charAt(i).toUpperCase() && password.charAt(i).match(/[a-z]/i)){
            count ++ ;
        }
        else if ( password.length > 7){
            st++;
            
        }

    }

    if(count ==1){
        console.log("very strong");
    }
    else if (st == 1 ){
        console.log("strong");
    }
    else{
        console.log("weak");
    }
}
advance("aVvvvvvvvvvvvv");



