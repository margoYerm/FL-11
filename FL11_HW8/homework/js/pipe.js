function addOne (a) {
    return a + 1;
}

function pipe (b, ...callbacks) {
    let result = b;
    for (let i = 0; i < callbacks.length; i++) {
        result = callbacks[i](result);        
    }
    return result;
}

pipe(8, addOne, addOne, addOne);