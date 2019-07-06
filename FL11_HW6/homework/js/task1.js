const d = 2; //denominator
let a1 = parseFloat(prompt('Please, input numeric value for point Ax'));
let a2 = parseFloat(prompt('Please, input numeric value for point Ay'));
let b1 = parseFloat(prompt('Please, input numeric value for point Bx'));
let b2 = parseFloat(prompt('Please, input numeric value for point By'));
let c1 = parseFloat(prompt('Please, input numeric value for point Cx'));
let c2 = parseFloat(prompt('Please, input numeric value for point Cy'));
if (a1 && a2 && b1 && b2 && c1 && c2 !== isNaN) {    
    if (c1 === (a1 + b1)/d && c2 === (a2 + b2)/d ) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Please enter only numeric values!');
}