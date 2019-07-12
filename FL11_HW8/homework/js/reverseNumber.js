function reverseNumber(a) {
    let b = 0;
    while (a) {
        b = b * 10 + a % 10;        
        a = ~~ (a / 10);        
    }    
    return b;    
}

reverseNumber(78);