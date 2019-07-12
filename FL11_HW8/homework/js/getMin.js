function getMin () {    
    let result = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < result) {
            result = arguments[i];
        } else { 
            continue; 
        }
    }     
    return result;    
}

getMin(5, -3, 8);
getMin(9, 4, 12, 21, 15, 2);