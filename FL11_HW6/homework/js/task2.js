const z = 0.00;
let a = parseFloat(prompt('Please, input triangle side a'));
let b = parseFloat(prompt('Please, input triangle side b'));
let c = parseFloat(prompt('Please, input triangle side c'));
if (a && b && c !== isNaN) {
    if (a < b + c && b < c + a && c < a + b && a > z && b > z && c > z) {
        if (a === b && b === c) {
            console.log('Equivalent triangle');
        } else if (a === b && b !== c || b === c && c !== a || c === a && a !== b) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }   
} else {
    console.log('Please enter only numeric values!');
}