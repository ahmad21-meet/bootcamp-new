const lang = (language) => {

    switch (language) {
        case "mandrain" : 
            console.log("MOST number of native speakers!");
              break;

        case "spanish" : 
            console.log("2nd place in a number of native speakers");
              break;

        case "english" : 
             console.log("3rd place");
               break;

         case "Arabic" : 
               console.log("5th most spoken language");
                 break;
        
        default:
            console.log("Not in the top 5");
            break;
    }
}

lang("Aabc");