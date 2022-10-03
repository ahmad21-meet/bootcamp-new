const isString =(str, callback) =>{
    if( typeof str==='string'){
        return console.log(callback(str));

    }

}

const callback= (str)=> {

    console.log(str);

}

isString('ahmad' ,callback)