function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str.length; i++ ){
    if ( str.charAt ( i ) === char ){
    counter += 1 ;
    }
    } return console.log(counter) ;
    }
    countOccurrences ( "ini mini miny moe" , "n" );


    // line 5 should counter += 1 