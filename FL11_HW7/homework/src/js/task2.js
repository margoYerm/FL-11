const r = [
    'Choose a roulette pocket number from 0 to ',
    'Attempts left: ',
    'Total prize: ',
    'Possible prize on current attempt: ',
    'Please, enter a number of pocket on which the ball could land'    
]

let ask = confirm('Do you want to play a game?');
if (!ask) {
    alert('You did not become a billionaire, but can.');
} else {
    let minInt = 0;
    let max = 8;
    const one = 1;
    const two = 2;
    const incremInt = 4;
    let c = 3; //retryCount
    let bingo = Math.floor(Math.random() * (max - minInt + one)) + minInt;
    let y1 = 100;
    let y2 = 50;
    let y3 = 25;
    let sum = 0; //sumPrize
    let askAgain = 'Do you want to play again?';
    console.log(bingo);
    let uI = + prompt(`${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}$ \n ${r[3]} ${y1}$ \n \n  ${r[4]}`, '');    
    for (let i = 2; i >= 0; i--) {                
        if (uI === bingo && i === 2) {            
            sum = y1;            
            alert(`Congratulation, you won! Your prize is: ${sum} $.`); 
            i === 0;
            let playContinue1 = confirm('Do you want to continue?');
            if (!playContinue1) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {                
                let mx = max + incremInt;
                let k = 3; //counter
                let bingo2 = Math.floor(Math.random() * (mx - minInt + one)) + minInt;
                let x1 = y1 * two;
                let x2 = y2 * two;
                let x3 = y3 * two;
                let tot = sum;
                console.log(bingo2);
                let iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x1}$ \n 
${r[4]}`, '');
                for (let j = 2; j >= 0; j--) {
                    if (iU === bingo2 && j === 2) {
                        tot = y1 + x1;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 1) {
                        tot = y1 + x2;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 0) {
                        tot = y1 + x3;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU !== bingo2 && j >= 0) {
                        k --;
                        if(k === 2) {                
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x2}$ \n 
${r[4]}`, '');
                        } else if(k === 1) {
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x3}$ 
\n  ${r[4]}`, '');
                        } else {
                            alert(`Thank you for your participation. Your prize is ${tot}.`);
                            confirm('Do you want to play again?');
                            break;
                        }
                        continue;                        
                    }
                }
            }
            break;
        } else if (uI === bingo && i === 1) {             
            sum = y2;            
            alert(`Congratulation, you won! Your prize is: ${sum} $.`); 
            i === 0;
            let playContinue2 = confirm('Do you want to continue?');
            if (!playContinue2) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {                
                let mx = max + incremInt;
                let k = 3; //counter
                let bingo2 = Math.floor(Math.random() * (mx - minInt + one)) + minInt;
                let x1 = y1 * two;
                let x2 = y2 * two;
                let x3 = y3 * two;
                let tot = sum;
                console.log(bingo2);
                let iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x1}$ \n 
${r[4]}`, '');
                for (let j = 2; j >= 0; j--) {
                    if (iU === bingo2 && j === 2) {
                        tot = y2 + x1;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 1) {
                        tot = y2 + x2;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 0) {
                        tot = y2 + x3;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU !== bingo2 && j >= 0) {
                        k --;
                        if(k === 2) {                
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x2}$ \n 
${r[4]}`, '');
                        } else if(k === 1) {
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x3}$ 
\n  ${r[4]}`, '');
                        } else {
                            alert(`Thank you for your participation. Your prize is ${tot}.`);
                            confirm('Do you want to play again?');
                            break;
                        }
                        continue;                        
                    }
                }      
            }
            break;
        } else if (uI === bingo && i === 0) {            
            sum = y3;             
            alert(`Congratulation, you won! Your prize is: ${sum} $.`);            
            let playContinue3 = confirm('Do you want to continue?');
            if (!playContinue3) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {
                //if user winn and wont continue plaing
                let mx = max + incremInt;
                let k = 3; //counter
                let bingo2 = Math.floor(Math.random() * (mx - minInt + one)) + minInt;
                let x1 = y1 * two;
                let x2 = y2 * two;
                let x3 = y3 * two;
                let tot = sum;
                console.log(bingo2);
                let iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x1}$ \n 
${r[4]}`, '');
                for (let j = 2; j >= 0; j--) {
                    if (iU === bingo2 && j === 2) {
                        tot = y3 + x1;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 1) {
                        tot = y3 + x2;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU === bingo2 && j === 0) {
                        tot = y3 + x3;
                        alert(`Congratulation, you won! Your prize is: ${tot}$.`);
                        j = 0;
                        confirm('Do you want to play again?');
                        break;
                    } else if (iU !== bingo2 && j >= 0) {
                        k --;
                        if(k === 2) {                
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x2}$ \n 
${r[4]}`, '');
                        } else if(k === 1) {
                            iU = + prompt(`${r[0]} ${mx} \n ${r[1]} ${k} \n ${r[2]} ${tot}$ \n ${r[3]} ${x3}$ 
\n  ${r[4]}`, '');
                        } else {
                            alert(`Thank you for your participation. Your prize is ${tot}.`);
                            confirm('Do you want to play again?');
                            break;
                        }
                        continue;                        
                    }
                }                
            }
        } else if (uI !== bingo && i >= 0) {
            c --;
            if(c === 2) {                
                uI = + prompt(`${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}$ \n ${r[3]} ${y2}$ \n \n  ${r[4]}`, '');
            } else if(c === 1) {                
                uI = + prompt(`${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}$ \n ${r[3]} ${y3}$ \n \n  ${r[4]}`, '');
            } else {
                alert(`Thank you for your participation. Your prize is ${sum}.`);
                confirm(askAgain);
                break;
            }            
            continue;
        } 
    }
}
